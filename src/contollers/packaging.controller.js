import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, getLStockTrackRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const flourPackaging = async  (req,res)=>{
    try {
        const calculateTotal = (ibiro) => Object.entries(ibiro).reduce((acc, [key, value]) => { return acc + (Number(key) * value); }, 0);
        let {incoming_c,reporter,waste_e,new_food,ifunguro,IF,IS,MA,NF,isezerano,magaju,envelope,waste_f,comment,date} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('preparation_track','r_weight'),
        nw = Number(lastStW)-Number(incoming_c),
        f_e = {IF,IS,MA,NF}
        !date ? date = now() : null;
        const insert = await query(`INSERT INTO packaging VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,incoming_c,reporter,waste_e,JSON.stringify(f_e),calculateTotal(ifunguro),calculateTotal(isezerano),calculateTotal(magaju),calculateTotal(new_food),JSON.stringify(new_food),JSON.stringify(ifunguro),JSON.stringify(isezerano),JSON.stringify(magaju),envelope,waste_f,comment,date]),
        insert3 = await query('INSERT INTO preparation_track VALUES (?,?,?,?,?,?)',[id,'minus',incoming_c-(incoming_c*2),'packaging',nw,now()])
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
        const insert2 = await query('INSERT INTO packaging_track VALUES (?,?,?,?,?,?,?,?,?,?)',[id,JSON.stringify(weights),'add','packaging',total_if,total_is,total_ma,total_nf,total_env,now()])
        if(!insert ||!insert2 || !insert3) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
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
        let report = await query('SELECT * from packaging where DATE(date) >= ? AND DATE(date) <= ?',[date.start,date.stop]),mtotal,added,initamount,lastRec
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