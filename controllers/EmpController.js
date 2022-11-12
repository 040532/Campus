const Employee=require('../models/Empmodels')

const index =(req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:' An error Occured!'
        })
    })
}
const show=(req,res,next)=>{
    let employeeId=req.body.employeeId
    Employee.findById(employeeId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: ' An error Occured!'
        })
    })
}
const store=(req,res,next)=>{
    let employee =new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({
            message:'Employee Added Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error Occured!'
        })
    })
}

const update= (req,res,next)=>{
    let employeeId=req.body.employeeId
    let updateData={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeId,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Employee updated Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

module.exports={
    index,show,store,update
}