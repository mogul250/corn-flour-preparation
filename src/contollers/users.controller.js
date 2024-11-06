import { addToken, compPass, encPass, now } from "../incs/functions.util.js";
import { query } from "./query.controller.js";
import { rsg } from "./random.string.generator.js"
import { rM } from "./response.message.controller.js";
import cookie from 'cookie';
import dotenv from "dotenv"
dotenv.config()
export const addUser = async (req,res) =>{
    try {
        let {names,role,password,email} = req.body
        let id = rsg();
        password = await encPass(password)
        let adduser = await query('INSERT INTO users(id,names,email,role,password,dateadded) VALUES (?,?,?,?,?,?)',[id,names,email,role,password,now()])
        if (!adduser) {
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        }
        res.status(rM.sM.userCmessage.rC).send({success: rM.sM.userCmessage.s,message: rM.sM.userCmessage.c,metadata: {id}})
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }

}
export const login = async (req,res)=>{
    try {
        let {email,password} = req.body
        let resp = await query(`SELECT id,role,password FROM users WHERE email = ?`, [email])
        if(!resp){
            return res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
        }
        if (!resp.length) {
            return res.status(rM.eM.loginErrorMessage.rC).send({success: rM.eM.loginErrorMessage.s,message: rM.eM.loginErrorMessage.c,metadata: {}})
        }
        [resp] = resp
        let dec = await compPass(password,resp.password)
        if (!dec) {
            res.status(rM.eM.loginErrorMessageP.rC).send({success: rM.eM.loginErrorMessageP.s,message: rM.eM.loginErrorMessageP.c,metadata: {isNew:false}})
        }else{
            let token = addToken({id:resp.id, role: resp.role})
            res.setHeader('Set-Cookie', 
                cookie.serialize('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24,
                    sameSite: 'None',
                    path: '/'
                }),
                cookie.serialize('lastRole', 'plot', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24,
                    sameSite: 'None',
                    path: '/'
                })
            );
            res.status(rM.sM.loginMessage.rC).send({success: rM.sM.loginMessage.s,message: rM.sM.loginMessage.c,metadata: {token,role: resp.role}})
        }
    } catch (error) {
        console.log(error)
        res.status(rM.eM.ISEM.rC).send({success: rM.eM.ISEM.s,message: rM.eM.ISEM.c,metadata: {}})
    }


}