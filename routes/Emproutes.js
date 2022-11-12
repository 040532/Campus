const express= require('express')
const router =express.Router()

const EmployeeController= require('../controllers/EmpController')

router.get('/',EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)

module.exports=router