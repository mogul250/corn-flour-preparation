import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, getLStockTrackRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const sacksController = async  (req,res)=>{
    try {
        const calculateTotal = (ibiro) => Object.entries(ibiro).reduce((acc, [key, value]) => { return acc + (value); }, 0);
        let {reporter,new_food,ifunguro,isezerano,magaju,envelope,comment,date} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastTDW = await getLRec('sacks_track','r_sacks'),
        lastStDate = await getLRec('sacks_track','date')
        !date ? date = now() : date+= ' '+ DateTime.fromFormat(now(),'yyyy-MM-dd HH:mm:ss').toFormat('HH:mm:ss');
        if (lastStDate) {
            lastStDate = DateTime.fromISO(lastStDate).toFormat('yyyy-MM-dd HH:mm:ss')
        }
        if (date < lastStDate && lastStDate != 0) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        }
        if (date > now()) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: "invalid date",metadata: {}})
        }
        if (!lastTDW) {
            lastTDW = {
                NF:{"5":0,"10":0,"25":0},
                IS:{"5":0,"10":0,"25":0},
                IF:{"5":0,"10":0,"25":0},
                MA:{"5":0,"10":0,"25":0},
                envelope:{"2":0}
            }
        }else{
            lastTDW = JSON.parse(lastTDW)
        }
        const insert = await query(`INSERT INTO sacks VALUES (?,?,?,?,?,?,?,?,?)`,[id,reporter,JSON.stringify(new_food),JSON.stringify(ifunguro),JSON.stringify(isezerano),JSON.stringify(magaju),JSON.stringify({ '2':envelope}),comment,date])
        let weights = {
            NF:calculateTotal(new_food),IS:calculateTotal(isezerano),MA:calculateTotal(magaju),IF:calculateTotal(ifunguro),envelope:envelope *2
        },
        ls = {
            NF:new_food,IS:isezerano,MA:magaju,IF:ifunguro,envelope:{ '2':envelope}
        }
        Object.keys(lastTDW).map(key=>{
            Object.keys(lastTDW[key]).map(key2=>{
                lastTDW[key][key2]+= ls[key][key2]
            })
        })
        const insert2 = await query('INSERT INTO sacks_track VALUES (?,?,?,?,?,?)',[id,JSON.stringify(weights),JSON.stringify(lastTDW),'add','sacks',date])
        if(!insert ||!insert2) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const sacksTrackReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query(`SELECT 
            r_sacks,
            reporter,
            comment,
                CASE WHEN reporter IS NOT NULL THEN
                 JSON_OBJECT('NF',new_food,'IF',ifunguro,'IS',isezerano,'MA',magaju, 'envelope',envelope) 
                ELSE 
                 (SELECT JSON_OBJECT('NF',new_food,'IF',ifunguro,'IS',isezerano,'MA',magaju, 'envelope',envelopes) 
                 from 
                    packaging 
                 where 
                    packaging.id = sacks_track.id) 
                END
            as ls,
            CASE WHEN sacks.date IS NOT NULL THEN 
             sacks.date 
            ELSE
             sacks_track.date 
            END as date 
            from 
             sacks_track
            left join sacks on sacks_track.id = sacks.id 
            where 
            DATE(sacks_track.date) >= ? AND DATE(sacks_track.date) <= ?
            order by sacks_track.date desc`,[date.start,date.stop])
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        report = report.map(rep=>{
            rep.date = DateTime.fromISO(rep.date).toFormat('yyyy LLL dd')
            rep.r_sacks = JSON.parse(rep.r_sacks)
            rep.ls = JSON.parse(rep.ls)
            if (typeof rep.ls.NF == 'string') {
                rep.ls.NF = JSON.parse(rep.ls.NF)
                rep.ls.IS = JSON.parse(rep.ls.IS)
                rep.ls.IF = JSON.parse(rep.ls.IF)
                rep.ls.MA = JSON.parse(rep.ls.MA)
                rep.ls.envelope = JSON.parse(rep.ls.envelope)
                
            }else{
                rep.ls.NF = (rep.ls.NF.weights)
                rep.ls.IS = (rep.ls.IS.weights)
                rep.ls.IF = (rep.ls.IF.weights)
                rep.ls.MA = (rep.ls.MA.weights)
                rep.ls.envelope = {'2': rep.ls.envelope}

            }
            return rep
        })
        
        res.status(rM.sM.entRemessage.rC).send({success: rM.sM.entRemessage.s,message: rM.sM.entRemessage.c,metadata: {report}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}