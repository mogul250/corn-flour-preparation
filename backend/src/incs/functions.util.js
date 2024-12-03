import dotenv from "dotenv"
import { DateTime } from "luxon";
import cookie from 'cookie'
dotenv.config()
import jwt from "jsonwebtoken";
import { query } from "../contollers/query.controller.js";
import bcrypt from "bcrypt";
export function now() {
    try {
        let time = DateTime.now();
        time = time.setZone('Africa/kigali')
        time = time.toFormat('yyyy-MM-dd HH:mm:ss')
        return time
    } catch (error) {
        throw error
    }
}
export function verifyToken(payload) {

    const token = jwt.verify(payload,process.env.JWT_SEC_KEY)
    if (token) {
        return token
    }else{
        throw token
    }
      
    
}
export function GAVToken(req) {
    try {
        let token = req.headers.authorization
        if (token) {
            token = token.split(' ')[1]    
        }else{
            const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
            token = cookies.token
        }
        token = verifyToken(token)
        return token    
    } catch (error) {
        throw error
    }
}
export async function CheckAvai(table,column,value) {
    try {
        let resp = await query(`SELECT ${column} FROM ${table} WHERE ${column} = ?`,[value])
        if (resp.length) {
            return true
        }else{
            return false
        }
    } catch (error) {
        throw error
    }
}
export async function getLRec(table,column) {
    try {
        let resp = await query(`SELECT ${column} FROM ${table} ORDER BY date DESC LIMIT 1`,[])
        if (resp.length) {
            return resp[0][column]
        }else{
            return 0
        }
    } catch (error) {
        throw error
    }
}
export async function getLDayStockTrackRec(table) {
    try {
        let lastd = DateTime.fromFormat(now(), 'yyyy-MM-dd HH:mm:ss')
            lastd = lastd.minus({days: 1})
            lastd = lastd.toFormat('yyyy-MM-dd')
            console.log(lastd)
        let resp = await query(`SELECT * FROM ${table} where DATE(date) = ? ORDER BY date ASC limit 1`,[lastd])
        if (resp.length) {
            return resp[0]
        }else{
            return 0
        }
    } catch (error) {
        throw error
    }
}
export async function getLStockTrackRec(table) {
    try {
        let resp = await query(`SELECT * FROM ${table} ORDER BY date DESC LIMIT 1`)
        if (resp.length) {
            return resp[0]
        }else{
            return undefined
        }
    } catch (error) {
        throw error
    }
}
export function addToken(payload,isExpiring,expTime){
    const token = jwt.sign(payload,process.env.JWT_SEC_KEY,(isExpiring) ? {expiresIn:   expTime} : {})
    if (token) {
        return token
    }else{
        throw token
    }


}
export async function encPass(pass) {
    const saltRounds = 10;
    return await new Promise((resolve, reject) => {
        bcrypt.hash(pass, saltRounds, (err, hash) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(hash)
    })
        
    })
}
export async function compPass(pass,encPass) {
    return await new Promise((resolve,reject)=>{
        bcrypt.compare(pass, encPass, (err, result) => {
            if (err) reject(err);
            
            if (result) {
                resolve(1)
            } else {
                resolve(0)
            }
        });
    })
    
}
