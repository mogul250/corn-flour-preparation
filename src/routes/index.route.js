import express from "express"
import { addUser, login } from "../contollers/users.controller.js"
import { authBulkUsers } from "../middlewares/users.authenticator.js"
import { generateReport, recordCornPhase1 } from "../contollers/supply.controller.js"
import { preparationReport, prepareCorn } from "../contollers/preparation.controller.js"
import { flourPackaging, packagingReport, packagingTrackReport } from "../contollers/packaging.controller.js"
import { flourSales, flourSalesNR, salesNRReport, salesNRTrackReport, salesReport } from "../contollers/sales.controller.js"
import { stockController, stockReport } from "../contollers/stock.controller.js"
import { returnsController, returnsReport } from "../contollers/returns.controller.js"
import { leftoverOutReport, leftoversController, leftoversOutController, leftoversReport } from "../contollers/leftovers.controller.js"
import { expensesController, expensesReport } from "../contollers/expenses.controller.js"
export const router = express.Router({strict:false})
router.post('/login',login)
router.post('/add-user',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),addUser)
router.post('/record-stock-1',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),recordCornPhase1)
router.post('/record-prepared-c',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),prepareCorn)
router.post('/stock-1-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),generateReport)
router.post('/stockReport',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),stockReport)
router.post('/preparation-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),preparationReport)
router.post('/packaging',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),flourPackaging)
router.post('/sales',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),flourSales)
router.post('/sales-nr',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),flourSalesNR)
router.post('/sales-nr-track',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),salesNRTrackReport)
router.post('/packaging-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),packagingReport)
router.post('/packaging-track-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),packagingTrackReport)
router.post('/sales-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),salesReport)
router.post('/sales-nr-report',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),salesNRReport)
router.post('/stockController',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),stockController)
router.post('/returnsController',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),returnsController)
router.post('/returnsReport',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),returnsReport)
router.post('/leftoversController',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),leftoversController)
router.post('/leftoversReport',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),leftoversReport)
router.post('/leftoverOutReport',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),leftoverOutReport)
router.post('/leftoversOutController',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),leftoversOutController)
router.post('/expensesReport',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),expensesReport)
router.post('/expensesController',(req,res,next)=>authBulkUsers(req,res,next,['SYSTEM']),expensesController)
router.post('/',(req,res)=>{res.send("received")})

