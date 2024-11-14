import express from "express"
import { addUser, login } from "../contollers/users.controller.js"
import { authBulkUsers } from "../middlewares/users.authenticator.js"
import { generateReport, recordCornPhase1 } from "../contollers/supply.controller.js"
import { preparationReport, prepareCorn } from "../contollers/preparation.controller.js"
import { flourPackaging } from "../contollers/packaging.js"
export const router = express.Router({strict:false})
router.post('/login',login)
router.post('/add-user',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),addUser)
router.post('/record-stock-1',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),recordCornPhase1)
router.post('/record-prepared-c',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),prepareCorn)
router.post('/stock-1-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),generateReport)
router.post('/preparation-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),preparationReport)
router.post('/packaging',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),flourPackaging)
router.post('/',(req,res)=>{res.send("received")})

