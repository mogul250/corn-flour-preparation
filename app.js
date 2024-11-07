import express  from "express";
import dotenv from "dotenv";
import  cors  from "cors";
import bodyParser from "body-parser";
import mysql from "mysql";
import { router } from "./src/routes/index.route.js";
import { compPass, encPass } from "./src/incs/functions.util.js";
dotenv.config()
const app = express()
export const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['POST','GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use(bodyParser.json())
app.use(router)
app.listen(process.env.PORT, (err)=>{
    if (err) console.log(err)
    console.log('the app is running on port:',process.env.PORT)
})
// console.log(await encPass('123'))


