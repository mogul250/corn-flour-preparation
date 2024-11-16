import { DateTime } from "luxon";
import { getLDayStockTrackRec, getLRec, getLStockTrackRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const flourSales = async  (req,res)=>{
    try {
        const calculateTotal = (ibiro) => Object.entries(ibiro.weights).reduce((acc, [key, value]) => { return acc + (Number(key) * value); }, 0);
        let {distributor,reporter,g_amount,new_food,ifunguro,r_amount,no_sacks,isezerano,magaju,envelope,comment,date} = req.body,
        id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('packaging_track','r_weight'),
        l_nf = await getLRec('packaging_track','nf_t'),
        l_is = await getLRec('packaging_track','is_t'),
        l_ma = await getLRec('packaging_track','ma_t'),
        l_if = await getLRec('packaging_track','if_t'),
        l_env = await getLRec('packaging_track','env_t')
        l_nf -= calculateTotal(new_food)
        l_is-= calculateTotal(isezerano)
        l_ma-= calculateTotal(magaju)
        l_if-=calculateTotal(ifunguro)
        l_env-=(envelope*5)
        new_food = Object.fromEntries(Object.entries(new_food).map(([key,value])=> [key,value.weights]))
        isezerano = Object.fromEntries(Object.entries(isezerano).map(([key,value])=> [key,value.weights]))
        magaju = Object.fromEntries(Object.entries(magaju).map(([key,value])=> [key,value.weights]))
        envelope = Object.fromEntries(Object.entries(envelope).map(([key,value])=> [key,value.weights]))
        ifunguro = Object.fromEntries(Object.entries(ifunguro).map(([key,value])=> [key,value.weights]))
        // return ifunguro
        !date ? date = now() : null;
        const insert = await query(`INSERT INTO sales VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,reporter,distributor,client,g_amount,r_amount,no_sacks,JSON.stringify(ifunguro),JSON.stringify(isezerano),JSON.stringify(magaju),JSON.stringify(new_food),envelope,comment,date])
        let total_nf = await getLRec('sales_track','nf_t'),
        total_is = await getLRec('sales_track','is_t'),
        total_ma = await getLRec('sales_track','ma_t'),
        total_if = await getLRec('sales_track','if_t'),
        total_env = await getLRec('sales_track','env_t')
        total_nf += calculateTotal(new_food)
        total_is+= calculateTotal(isezerano)
        total_ma+= calculateTotal(magaju)
        total_if+=calculateTotal(ifunguro)
        total_env+=(envelope*5)
        let weights = {
            NF:calculateTotal(new_food),IS:calculateTotal(isezerano),MA:calculateTotal(magaju),IF:calculateTotal(ifunguro),envelope:envelope*5
        }
        const insert3 = await query('INSERT INTO sales_track VALUES (?,?,?,?,?,?,?,?,?,?)',[id,JSON.stringify(weights),'add','sales',total_if,total_is,total_ma,total_nf,total_env,now()])
        const insert2 = await query('INSERT INTO packaging_track VALUES (?,?,?,?,?,?,?,?,?,?)',[id,JSON.stringify(weights),'minus','sales',l_if,l_is,l_ma,l_nf,l_env,now()])
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
        console.log(date.start,date.stop)
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