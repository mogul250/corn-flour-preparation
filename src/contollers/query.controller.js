import { connection } from "../../app";

export async function query(query,params) {
    try {
        const response = new Promise((resolve,reject)=>{
            connection.query(query,params, (err,res)=>{
                if (err) {
                    reject(err)
                }else{
                    resolve (JSON.parse(JSON.stringify(res)))
                }
            })
        }) 
        return response
    } catch (error) {
       throw error 
    }
    
}