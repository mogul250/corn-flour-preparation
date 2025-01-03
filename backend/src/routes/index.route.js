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
import { employeesController, employeesReport } from "../contollers/employee.controller.js"
import { debtsController, debtsnAmReport, debtsReport, pdebtsController, pdebtsReport } from "../contollers/debts.controller.js"
import { sendResetLink,resetPassword, checkLink } from "../contollers/reset.password.controller.js"
import { mrController, mrReport } from "../contollers/mr.controller..js"
import { carsController, carsReport } from "../contollers/cars.controller.js"
import { sacksController, sacksTrackReport } from "../contollers/sacks.controller.js"
import { ebController, ebReport } from "../contollers/external.buys.controller.js"
import { moController, moReport } from "../contollers/external.money.out.controller.js"
import { invoiceController, invoiceReport } from "../contollers/invoices.controller.js"
export const router = express.Router({strict:false})
router.post('/login',login)
router.post('/add-user',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),addUser)
router.post('/record-stock-1',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),recordCornPhase1)
router.post('/record-prepared-c',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),prepareCorn)
router.post('/stock-1-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),generateReport)
router.post('/stockReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),stockReport)
router.post('/preparation-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),preparationReport)
router.post('/packaging',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),flourPackaging)
router.post('/sales',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),flourSales)
router.post('/sales-nr',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),flourSalesNR)
router.post('/sales-nr-track',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),salesNRTrackReport)
router.post('/packaging-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),packagingReport)
router.post('/packaging-track-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),packagingTrackReport)
router.post('/sales-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),salesReport)
router.post('/sales-nr-report',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),salesNRReport)
router.post('/stockController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),stockController)
router.post('/returnsController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),returnsController)
router.post('/returnsReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),returnsReport)
router.post('/leftoversController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),leftoversController)
router.post('/leftoversReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),leftoversReport)
router.post('/leftoverOutReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),leftoverOutReport)
router.post('/leftoversOutController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),leftoversOutController)
router.post('/expensesReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),expensesReport)
router.post('/employeesReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),employeesReport)
router.post('/expensesController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),expensesController)
router.post('/employeesController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),employeesController)
router.post('/debtsController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),debtsController)
router.post('/debtsReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),debtsReport)
router.post('/pdebtsController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),pdebtsController)
router.post('/pdebtsReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),pdebtsReport)
router.post('/mrController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),mrController)
router.post('/mrReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),mrReport)
router.post('/carsController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),carsController)
router.post('/carsReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),carsReport)
router.post('/sacksController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),sacksController)
router.post('/sacksReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),sacksTrackReport)
router.post('/ebController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),ebController)
router.post('/ebReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),ebReport)
router.post('/invoiceController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),invoiceController)
router.post('/invoiceReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),invoiceReport)
router.post('/moController',(req,res,next)=>authBulkUsers(req,res,next,['WORKER']),moController)
router.post('/moReport',(req,res,next)=>authBulkUsers(req,res,next,['BOSS']),moReport)
router.get('/send-flink/:user',sendResetLink)
router.post('/reset-password/:token',resetPassword)
router.get('/checkLink/:token',checkLink)
router.post('/gDebts',debtsnAmReport)
router.post('/',(req,res)=>{res.send("received")})

