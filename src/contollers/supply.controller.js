import { getLRec, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js";
import { rM } from "./response.message.controller.js";

export const recordCornPhase1 = async  (req,res)=>{
    try {
        const {dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,reporter,comment,r_amount} = req.body,
        date = now(),id = rsg(6,true,true,!1,!1),
        lastStW = await getLRec('stock1_track','r_weight'),
        nw = lastStW+weight
        const insert = await query(`INSERT INTO stock1 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,[id,dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,r_amount,reporter,comment,date]),
        insert2 = await query('INSERT INTO stock1_track VALUES (?,?,?,?,?,?)',[id,'add',weight,'stock1',nw,date])
        if(!insert || !insert2) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRecmessage.rC).send({success: rM.sM.entRecmessage.s,message: rM.sM.entRecmessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}