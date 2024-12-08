import { rM } from "./response.message.controller.js"
import {query} from "./query.controller.js"
import { addToken, encPass, verifyToken } from "../incs/functions.util.js"
import { mailSender } from "./mail.sender.controller.js"

export const sendResetLink = async (req,res)=>{
    try {
        const {user} = req.params,
        uinfo = await query('select id,email,names,role from users where email = ?',[user])
        if (uinfo && uinfo.length) {
           let token = addToken({user: uinfo[0].id, role: uinfo[0].role},true,'10m')
           let q = await query(`UPDATE users SET 2FA = ? WHERE id = ?`,[token,uinfo[0].id]),
           sendMail = await mailSender({email: uinfo[0].email,names: uinfo[0].names,token})
           
        }else{
            return res.status(rM.eM.loginErrorMessage.rC).send({success: rM.eM.loginErrorMessage.s,message: rM.eM.loginErrorMessage.c,metadata: {}})
        }
        res.status(rM.sM.RLSmessage.rC).send({success: rM.sM.RLSmessage.s,message: rM.sM.RLSmessage.c,metadata: {}})
        
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }

    
}
export const resetPassword = async (req,res)=>{
    try {
        let {token} = req.params,
        rawT = token,
        {password} = req.body
        token = verifyToken(token)
        if (token) {
            password = await encPass(password)
            let {user,role} = token,
            update = await query(`update users SET password = ?, 2FA = ? WHERE id = ? AND 2FA = ?`, [password,null,user,rawT])
            if(!update){
                return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
            }else if (!update.affectedRows) {
                return res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})
            }
            return res.status(rM.sM.PRmessage.rC).send({success: rM.sM.PRmessage.s,message: rM.sM.PRmessage.c,metadata: {}})
        }
        res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})

    } catch (error) {
        if (error.toString().indexOf('TokenExpiredError: jwt expired') != -1 || error.toString().indexOf('JsonWebTokenError: jwt malformed') != -1) {
            res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})
        }else{
            res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
            console.log(error)

        }
    }
}
export const checkLink = async (req,res)=>{
    try {
        let {token} = req.params,
        rawT = token
        token = verifyToken(token)
        if (token) {
            let {user,role} = token,
            resp
            if (true) {
                resp = await query(`SELECT id FROM users WHERE (id = ? AND 2FA = ?)`, [user,rawT])
                if (!resp.length) {
                    return res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})
                }
            }
            return res.status(rM.sM.LVmessage.rC).send({success: rM.sM.LVmessage.s,message: rM.sM.LVmessage.c,metadata: {}})
        }
        res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})

    } catch (error) {
        console.log(error)
        if (error.toString().indexOf('TokenExpiredError: jwt expired') != -1 || error.toString().indexOf('JsonWebTokenError: jwt malformed') != -1) {
            res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})
        }else if (error.toString().indexOf('JsonWebTokenError: invalid signature') != -1 || error.toString().indexOf('JsonWebTokenError: invalid signature') != -1) {
            res.status(rM.eM.invLink.rC).send({success: rM.eM.invLink.s,message: rM.eM.invLink.c,metadata: {}})
        }else{
            res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})

        }
    }

    
}