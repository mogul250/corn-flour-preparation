import { now } from "../utils/test.util";
import { query } from "./query.controller";
import { rsg } from "./random.string.generator";
import { rM } from "./response.message.controller";

export const recordCornPhase1 = async  (req,res)=>{
    try {
        const {dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,reporter,comment} = req.body,
        date = now(),id = rsg(6,true,true,!1,!1);
        const insert = await query(`INSERT INTO stock1 VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,[id,dist_names,dist_plate_no,weight,dryness,moldness,net_price,gross_price,amount_paid,reporter,comment,date])
        if(!insert) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        res.status(rM.sM.entRemessage.rC).send({success: rM.sM.entRemessage.s,message: rM.sM.entRemessage.c,metadata: {}})

        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }
}