import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const carsController = async  (req,res)=>{
   try {
        let {reporter,driver,plate_no,diesel,pieces,oil,wash,mechanic,o_m,inc_money,total,comment,date} = req.body,
        id = rsg(6,true,true,!1,!1)
        !date ? date = now() : null;
        total =  Number(inc_money) - (Number(diesel)+Number(pieces)+Number(oil)+Number(wash)+Number(mechanic)+Number(o_m))
        if(total == NaN) total = 0
        const insert = await query(`INSERT INTO cars VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,reporter,driver,plate_no,diesel,pieces,oil,wash,mechanic,o_m,inc_money,total,comment,date])
        if(!insert) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}
export const carsReport = async (req,res)=>{
    try {
        const {date} = req.body
        if (!date.start || !date.stop) {
            let lastm = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastm = lastm.minus({months: 1})
            lastm = lastm.toFormat('yyyy-MM-dd')
            date.start = lastm
            date.stop = now()
        }
        let report = await query('SELECT * from cars where date >= ? AND date <= ? ORDER BY date DESC',[date.start,date.stop]),mtotal,added,initamount
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        // if(report.length){
        //     let lastRec = await getLDayStockTrackRec('stock1_track'),
        //     lastStW = await getLRec('stock1_track','r_weight')
        //     if(lastRec != []){
        //         added = lastStW-Number(lastRec.r_weight)
        //         mtotal = Number(lastStW)
        //         initamount = lastRec.r_weight
                
        //     }
        // }
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