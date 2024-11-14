import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const flourPackaging = async  (req,res)=>{
    try {
        const calculateTotal = (ibiro) => Object.entries(ibiro).reduce((acc, [key, value]) => { return acc + (Number(key) * value); }, 0);
        let {incoming_c,reporter,waste_e,new_food,ifunguro,IF,IS,MA,NF,isezerano,magaju,envelope,waste_f,comment,date} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('preparation_track','r_weight'),
        nw = Number(lastStW)-Number(incoming_c)
        !date ? date = now() : null;
        const insert = await query(`INSERT INTO packaging VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,incoming_c,reporter,waste_e,calculateTotal(ifunguro),calculateTotal(isezerano),calculateTotal(magaju),calculateTotal(new_food),JSON.stringify(new_food),JSON.stringify(ifunguro),JSON.stringify(isezerano),JSON.stringify(magaju),envelope,waste_f,comment,date]),
        insert3 = await query('INSERT INTO preparation_track VALUES (?,?,?,?,?,?)',[id,'minus',incoming_c-(incoming_c*2),'packaging',nw,now()])
        let total_nf = await getLRec('packaging_track','nf_t'),
        total_is = await getLRec('packaging_track','is_t'),
        total_ma = await getLRec('packaging_track','ma_t'),
        total_if = await getLRec('packaging_track','if_t'),
        total_env = await getLRec('packaging_track','env_t')
        total_nf += calculateTotal(ifunguro)
        total_is+= calculateTotal(isezerano)
        total_ma+= calculateTotal(magaju)
        total_if+=calculateTotal(new_food)
        total_env+=(envelope*5)
        let weights = {
            NF:calculateTotal(ifunguro),IS:calculateTotal(isezerano),MA:calculateTotal(magaju),IF:calculateTotal(new_food),envelope:total_env
        }
        const insert2 = await query('INSERT INTO packaging_track VALUES (?,?,?,?,?,?,?,?,?,?)',[id,JSON.stringify(weights),'add','packaging',total_if,total_is,total_ma,total_nf,total_env,now()])
        if(!insert ||!insert2 || !insert3) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
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
        let report = await query('SELECT * from preparation where date >= ? AND date <= ?',[date.start,date.stop]),mtotal,added,initamount
        if(!report) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        if(report.length){
            let lastRec = await getLDayStockTrackRec('preparation_track'),
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