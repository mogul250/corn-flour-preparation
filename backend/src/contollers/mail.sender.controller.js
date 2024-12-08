import dotenv from "dotenv";
import { createTransport } from "nodemailer";
dotenv.config()
export const mailSender = async (data)=>{
    let link = `${process.env.FRONT_END_LINK}/changePassword/${data.token}`
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
	    <p style="text-align: center"> <img src="https://new-good-food-industry.rw/assets/MASAK88-BNxGTLrw.png" style="width: 300px;height: 152px,display:flex;justify-content:center;align-items:center;overflow-wrap:break-word;position: relative"></p>
	    	<h1>Hi, ${data.names} </h1>
	    	<p style="font-size:16px; text-transform: capitalize;">you requested for a password reset on NGF</p>
	    	<p style="font-size: 18px; font-weight: bold;">click <a href="${link}">here</a> to reset your password, this link will be valid only for 10 minutes</p>
	    </div>
	    <div class="footer">
	    	<p>&copy; ${new Date().getFullYear()} NEW GOOD FOOD LTD. All rights reserved.</p>
	    </div>
	    </body>
	    </html>
	`
	let emres = await sendCustmail(data.email,{subject: 'NGF Password Reset Request',mailContent: emailContent})
    if (emres.success) {
        return true
    }else{
        console.log(emres)
        return false
    }
}
export async function sendCustmail(email,message) {
    const transporter = createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: "info@itspace.rw",
        pass: "AnUSqRY4FhPR"
      }
    });
    const mailOptions = {
      from: "NGF <info@itspace.rw>",
      to: email,
      subject: message.subject,
      html: message.mailContent
    };
        const info = new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error)
              resolve({ success: false, message: 'Mails were not sent' });
            } else {
              resolve({ success: true, message: 'Mails sent' });
            }
          });
        });
        return info;
  
  }