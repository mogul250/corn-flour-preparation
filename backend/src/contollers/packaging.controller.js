import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, getLStockTrackRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const flourPackaging = async  (req,res)=>{
    try {
        const calculateTotal = (ibiro) => Object.entries(ibiro).reduce((acc, [key, value]) => { return acc + (Number(key) * value); }, 0);
        let {incoming_c,reporter,waste_e,new_food,ifunguro,IF,IS,MA,NF,ISENV,isezerano,magaju,envelope,waste_f,comment,date,sack_no_IF,sack_no_IS,sack_no_MA,sack_no_NF,sack_no_ISENV} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('preparation_track','r_weight'),
        lastTDW = await getLRec('packaging_track','r_weights'),
        lastTDS = await getLRec('sacks_track','r_sacks'),
        lastStDate = await getLRec('packaging_track','date'),
        nw = Number(lastStW)- Math.abs(Number(incoming_c)),
        f_e = {IF,IS,MA,NF,ISENV}
        !date ? date = now() : date+= ' '+ DateTime.fromFormat(now(),'yyyy-MM-dd HH:mm:ss').toFormat('HH:mm:ss');
        if (lastStDate) {
            lastStDate = DateTime.fromISO(lastStDate).toFormat('yyyy-MM-dd HH:mm:ss')
        }
        if (date < lastStDate && lastStDate != 0) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: "invalid date",metadata: {}})
        }
        if (date > now()) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: "invalid date",metadata: {}})
        }
        if (nw < 0) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: "no equivalent weight in inventory (preparation)",metadata: {}})
        }
        if (!lastTDW) {
            lastTDW = {
                NF:{"5":0,"10":0,"25":0},
                IS:{"5":0,"10":0,"25":0},
                IF:{"5":0,"10":0,"25":0},
                MA:{"5":0,"10":0,"25":0},
                envelope:{"5":0}
            }
        }else{
            lastTDW = JSON.parse(lastTDW)
        }
        let ls = {
            NF:new_food,IS:isezerano,MA:magaju,IF:ifunguro,envelope:{ '5':envelope}
        }
       
        if (!lastTDS) {
            lastTDS = {
                NF:{"5":0,"10":0,"25":0},
                IS:{"5":0,"10":0,"25":0},
                IF:{"5":0,"10":0,"25":0},
                MA:{"5":0,"10":0,"25":0},
                envelope:{"5":0}
            }
        }else{
            lastTDS = JSON.parse(lastTDS)
        }
        let isNeg = false
        Object.keys(lastTDS).map(key=>{
            Object.keys(lastTDS[key]).map(key2=>{
                lastTDS[key][key2]-= ls[key][key2]
                if (lastTDS[key][key2] < 0) isNeg = true
            })
        })
        if (isNeg) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: 'no equvalent sacks in inventory',metadata: {}})
        }
        const insert = await query(`INSERT INTO packaging VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,incoming_c,reporter,waste_e,JSON.stringify(f_e),calculateTotal(ifunguro),calculateTotal(isezerano),calculateTotal(magaju),calculateTotal(new_food),sack_no_IF,sack_no_IS,sack_no_MA,sack_no_NF,sack_no_ISENV,JSON.stringify(new_food),JSON.stringify(ifunguro),JSON.stringify(isezerano),JSON.stringify(magaju),envelope,waste_f,comment,date])
        if(!insert) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        const insert3 = await query('INSERT INTO preparation_track VALUES (?,?,?,?,?,?)',[id,'minus',incoming_c-(incoming_c*2),'packaging',nw,date])
        if(!insert3) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        let total_nf = await getLRec('packaging_track','nf_t'),
        total_is = await getLRec('packaging_track','is_t'),
        total_ma = await getLRec('packaging_track','ma_t'),
        total_if = await getLRec('packaging_track','if_t'),
        total_env = await getLRec('packaging_track','env_t')
        total_nf += calculateTotal(new_food)
        total_is+= calculateTotal(isezerano)
        total_ma+= calculateTotal(magaju)
        total_if+=calculateTotal(ifunguro)
        total_env+=(envelope*5)
        let weights = {
            NF:calculateTotal(new_food),IS:calculateTotal(isezerano),MA:calculateTotal(magaju),IF:calculateTotal(ifunguro),envelope:envelope *5
        }
        Object.keys(lastTDW).map(key=>{
            Object.keys(lastTDW[key]).map(key2=>{
                lastTDW[key][key2]+= ls[key][key2]
            })
        })
        const insert2 = await query('INSERT INTO packaging_track VALUES (?,?,?,?,?,?,?,?,?,?,?)',[id,JSON.stringify(weights),JSON.stringify(lastTDW),'add','packaging',total_if,total_is,total_ma,total_nf,total_env,date])
        if(!insert2) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        const insert4 = await query('INSERT INTO sacks_track VALUES (?,?,?,?,?,?)',[id,JSON.stringify(weights),JSON.stringify(lastTDS),'minus','packaging',date])
        if(!insert4) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const packagingReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query('SELECT * from packaging where DATE(date) >= ? AND DATE(date) <= ? ORDER BY date DESC',[date.start,date.stop]),mtotal,added,initamount,lastRec
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        if(report.length){
            lastRec = await getLStockTrackRec('packaging_track')
            if(lastRec != [] && lastRec){
                // added = lastStW-Number(lastRec.weight)
                // mtotal = Number(lastStW)
                // initamount = lastRec.r_weight
                lastRec.weights = JSON.parse(lastRec.weights)
                lastRec.date = DateTime.fromISO(lastRec.date).toFormat('yyyy LLL dd')

                
            }
        }
        report = report.map(rep=>{
            rep.date = DateTime.fromISO(rep.date).toFormat('yyyy LLL dd')
            rep.ifunguro = JSON.parse(rep.ifunguro)
            rep.new_food = JSON.parse(rep.new_food)
            rep.isezerano = JSON.parse(rep.isezerano)
            rep.magaju = JSON.parse(rep.magaju)
            rep.f_e = JSON.parse(rep.f_e)
            return rep
        })
        
        res.status(rM.sM.entRemessage.rC).send({success: rM.sM.entRemessage.s,message: rM.sM.entRemessage.c,metadata: {report,mainTotals:{lastRec}}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const packagingTrackReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query(`SELECT r_weights,reporter,sack_no_IF,sack_no_IS,sack_no_MA,sack_no_NF,comment,CASE WHEN reporter IS NOT NULL THEN JSON_OBJECT('NF',new_food,'IF',ifunguro,'IS',isezerano,'MA',magaju, 'envelope',envelopes) ELSE (SELECT p_sold from sales_n_returns where sales_n_returns.id = packaging_track.id) END  as ls, CASE WHEN packaging.date IS NOT NULL THEN packaging.date ELSE packaging_track.date END as date from packaging_track left join packaging on packaging_track.id = packaging.id where DATE(packaging_track.date) >= ? AND DATE(packaging_track.date) <= ? order by packaging_track.date desc`,[date.start,date.stop])
        let ff= `{"NF":{"weights":{"5":120,"10":40,"25":20},"pricings":{"5":3600,"10":7200,"25":18000},"totals":{"5":432,000,"10":288000,"25":360000}},"IS":{"weights":{"5":220,"10":60,"25":59},"pricings":{"5":3000,"10":6000,"25":14500},"totals":{"5":660000,"10":360000,"25":855500}},"IF":{"weights":{"5":0,"10":0,"25":0},"pricings":{"5":0,"10":6000,"25":14500},"totals":{"5":0,"10":360000,"25":0}},"MA":{"weights":{"5":0,"10":0,"25":0},"pricings":{"5":0,"10":0,"25":0},"totals":{"5":0,"10":0,"25":0}},"envelope":{"weights":{"2":0},"pricings":{"2":0},"totals":{"2":0}}}`
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
            // console.log(report[1].ls)
        report = report.map(rep=>{
            rep.date = DateTime.fromISO(rep.date).toFormat('yyyy LLL dd')
            rep.r_weights = JSON.parse(rep.r_weights)
            rep.ls = JSON.parse(rep.ls)
            if (rep.ls == null) {
                rep.ls = {
                    NF : {"5":0,"10":0,"25":0},
                    IS : {"5":0,"10":0,"25":0},
                    IF : {"5":0,"10":0,"25":0},
                    MA : {"5":0,"10":0,"25":0},
                    envelope : {"5":0}
                }
                
            }else if (typeof rep.ls.NF == 'string') {
                rep.ls.NF = JSON.parse(rep.ls.NF)
                rep.ls.IS = JSON.parse(rep.ls.IS)
                rep.ls.IF = JSON.parse(rep.ls.IF)
                rep.ls.MA = JSON.parse(rep.ls.MA)
                rep.ls.envelope = {'5': rep.ls.envelope}
                
            }else{
                rep.ls.NF = (rep.ls.NF.weights)
                rep.ls.IS = (rep.ls.IS.weights)
                rep.ls.IF = (rep.ls.IF.weights)
                rep.ls.MA = (rep.ls.MA.weights)
                rep.ls.envelope = rep.ls.envelope.weights

            }
            return rep
        })
        
        res.status(rM.sM.entRemessage.rC).send({success: rM.sM.entRemessage.s,message: rM.sM.entRemessage.c,metadata: {report}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}