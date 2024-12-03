
import { query } from "../contollers/query.controller.js"
import { rM } from "../contollers/response.message.controller.js"
import { GAVToken } from "../incs/functions.util.js"
export const authBulkUsers = async (req,res,next,roles)=>{
    try {
        const user = GAVToken(req)
        let avai = await query(`SELECT * FROM users WHERE id = ?`,[user.id])
        if (!avai) return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})  
        if (!avai.length)  return res.status(rM.eM.FbdnEm.rC).send({success: rM.eM.FbdnEm.s,message: rM.eM.FbdnEm.c,metadata: {}})
        if (!(roles.indexOf(avai[0].role) in roles))  return res.status(rM.eM.FbdnEm.rC).send({success: rM.eM.FbdnEm.s,message: rM.eM.FbdnEm.c,metadata: {}})
        next()

    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}}) 
    }
}

export const checkuToken = async (req,res,next)=>{
    try {
        let token = GAVToken(req)
        if (!'id' in token) {
            return res.status(rM.eM.FbdnEm.rC).send({success: rM.eM.FbdnEm.s,message: rM.eM.FbdnEm.c,metadata: {}})
        }
        next()

    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}}) 
    }
}