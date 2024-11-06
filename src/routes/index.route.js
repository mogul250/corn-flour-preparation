import express from "express"
import { addUser, login } from "../contollers/users.controller.js"
import { authBulkUsers } from "../middlewares/users.authenticator.js"
import { recordCornPhase1 } from "../contollers/supply.controller.js"
export const router = express.Router({strict:false})
router.post('/login',login)
router.post('/add-user',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),addUser)
router.post('/record-stock-1',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),recordCornPhase1)
router.post('/',(req,res)=>{res.send("received")})

