import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const recordCornPhase1 = async  (req,res)=>{
    try {
        let {dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,reporter,comment,r_amount,date} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('stock1_track','r_weight'),
        lastStDate = await getLRec('stock1_track','date'),
        nw = Number(lastStW)+Number(weight)
        !date ? date = now() : date+= ' '+ DateTime.fromFormat(now(),'yyyy-MM-dd HH:mm:ss').toFormat('HH:mm:ss');
        if (lastStDate) {
            lastStDate = DateTime.fromISO(lastStDate).toFormat('yyyy-MM-dd HH:mm:ss')
        }
        if (date < lastStDate && lastStDate != 0) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        }
        const insert = await query(`INSERT INTO stock1 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,r_amount,reporter,comment,date]),
        insert2 = await query('INSERT INTO stock1_track VALUES (?,?,?,?,?,?)',[id,'add',weight,'stock1',nw,date])
        if(!insert || !insert2) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const generateReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query('SELECT s1.id,s1.dist_names,s1.dist_plate_no,CASE WHEN s1.weight IS NOT NULL THEN s1.weight ELSE s1t.weight END as weight,s1.dryness,s1.moldness,s1.net_price,s1.gross_price,s1.amount_paid,s1.r_amount,s1.reporter,s1.comment,CASE WHEN s1.date IS NOT NULL THEN s1.date ELSE s1t.date END as date from stock1_track as s1t LEFT JOIN stock1 as s1 ON s1.id = s1t.id where s1t.date >= ? AND s1t.date <= ? order by s1t.date desc',[date.start,date.stop]),mtotal,added,initamount
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        if(report.length){
            let lastRec = await getLDayStockTrackRec('stock1_track'),
            lastStW = await getLRec('stock1_track','r_weight')
            if(lastRec != []){
                added = (lastStW-Number(lastRec.r_weight) < 0 ? 0 : lastStW-Number(lastRec.r_weight))
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