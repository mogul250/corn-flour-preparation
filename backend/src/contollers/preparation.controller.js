import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLLRec, getLRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const prepareCorn = async  (req,res)=>{
    try {
        let {comment,date,incoming_c,reporter,prepared_c,waste_f} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('preparation_track','r_weight'),
        lastSt1W = await getLRec('stock1_track','r_weight'),
        lastStDate = await getLRec('preparation_track','date'),
        nw = Number(lastStW)+Number(prepared_c),
        nw2 = Number(lastSt1W)-Number(incoming_c)
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
        if (nw2 < 0) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: 'no equvalent weight in inventory (supply)',metadata: {}})
        }
        const insert = await query(`INSERT INTO preparation VALUES (?,?,?,?,?,?,?)`,[id,incoming_c,prepared_c,waste_f,reporter,comment,date]);
        if(!insert) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        const insert2 = await query('INSERT INTO preparation_track VALUES (?,?,?,?,?,?)',[id,'add',prepared_c,'preparation',nw,date])
        if(!insert2) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        const insert3 = await query('INSERT INTO stock1_track VALUES (?,?,?,?,?,?)',[id,'minus',incoming_c-(incoming_c*2),'preparation',nw2,date])
        if(!insert3) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const preparationReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query('SELECT * from preparation where date >= ? AND date <= ? ORDER by date desc',[date.start,date.stop]),mtotal,added,initamount
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        if(report.length){
            let lastRec = await getLLRec('preparation_track','r_weight'),
            lastStW = await getLRec('preparation_track','r_weight')
            if(lastRec != []){
                added = lastStW-Number(lastRec.weight)
                mtotal = Number(lastStW)
                initamount = lastRec.r_weight
                
            }
        }
        report = report.map(rep=>{
            rep.date = DateTime.fromISO(rep.date).toFormat('yyyy LLL dd')
            return rep
        })
        
        res.status(rM.sM.entRemessage.rC).send({success: rM.sM.entRemessage.s,message: rM.sM.entRemessage.c,metadata: {report,mainTotals:{added,mtotal,initamount}}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}