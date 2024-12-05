import { addToken, verifyToken } from "../incs/functions.util.js"
import { query } from "./query.controller.js"
import { rM } from "./response.message.controller.js"


export const requestResetPassword = async (req,res)=>{
    let {identifier} = req.body,table
    try {
        let response = await query(`SELECT id,names,email FROM users WHERE email = ?`,[identifier])
        if (!response) return res.send({success: false, message: rM.eM.ISEM.c})
            if (response.length > 0) {
                response = response[0]
                let uid = id(),
                obj = {id: response.id, fa : uid, table}
                await query(`UPDATE users set 2FA = ? where id = ?`,[uid,response.id])
                let t = addToken(obj);
                let link = `${process.env.FRONT_END_LINK}/reset-password/${t}`
                const emailContent = `
                                    <!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <style>
                                        /* Add your custom CSS styles here */
                                        body {
                                        font-family: Arial, sans-serif;
                                        margin: 0;
                                        padding: 0;
                                        background-color: #ffffff;
                                        }
                                        .container {
                                        max-width: 600px;
                                        margin: 0 auto;
                                        padding: 20px;
                                        background-color: #ffffff;
                                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                                        }
                                        h1 {
                                        color: #333333;
                                        margin-top: 0;
                                        }
                                        p {
                                        color: #000;
                                        line-height: 1.5;
                                        }
                                        .footer {
                                        background-color: #f2f2f2;
                                        padding: 20px;
                                        box-sizing: border-box;
                                        width: 100%;
                                        position: fixed;
                                        bottom: 0px;
                                        text-align: center;
                                        }
                                    </style>
                                    </head>
                                    <body>
                                    <div class="container">
                                    <p style="text-align: center"> <img src="https://ubuzima.digital/assets/img/icons/logo/logo.png" style="width: 300px;height: 152px,display:flex;justify-content:center;align-items:center;overflow-wrap:break-word"></p>
                                        <h1>Hi, ${response.names} </h1>
                                        <p style="font-size:16px; text-transform: capitalize;">you requested for a password reset on UDS</p>
                                        <p style="font-size: 18px; font-weight: bold;">click <a href="${link}">here</a> for further instructions</p>
                                    </div>
                                    <div class="footer">
                                        <p>&copy; ${new Date().getFullYear()} New New Good Food. All rights reserved.</p>
                                    </div>
                                    </body>
                                    </html>
                                `
                                let emres = await sendCustmail(response.email,{subject: 'UDS Password Reset Request',mailContent: emailContent})
                                if (emres.success) {
                                    res.status(200).send({success: true, message : `reset password instructions sent to ${response.email} successfully!, check your inbox`})
                                }
            } else {
                res.status(rM.eM.loginErrorMessage.rC).send({success: false, message : rM.eM.loginErrorMessage.c})
            }
			
		} catch (error) {
			console.log(error)
            return res.status(rM.eM.ISEM.rC).send({success: false, message: rM.eM.ISEM.c})
		}
}
export  const ResetPassword = async (req,res)=>{
    let {token,password} = req.body
	token = verifyToken(token);
    
	if (token.success) {
		token = token.token
	}else{
        return res.status(rM.eM.ISEM.rC).send({success: false, message: rM.eM.ISEM.c})
    }
	try {
		let response = await query(`SELECT id,email,role FROM users  WHERE id = ?`,[token.id])
		if (!response) return res.status(rM.eM.ISEM.rC).send({success: false, message: rM.eM.ISEM.c})
		if (response.length > 0) {
			await query(`UPDATE users set password = ?, 2FA = ? where id = ? AND 2FA = ?`,[password,null,token.id,token.fa])
			res.send({success: true, message : "password changed successfully!"})
		} else {
			res.status(rM.eM.loginErrorMessage.rC).send({success: false, message : rM.eM.loginErrorMessage.c})
		}
	} catch (error) {
		res.status(rM.eM.ISEM.rC).send({success: false, message : rM.eM.ISEM.c})
	}
		
}