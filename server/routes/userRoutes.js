
const express = require('express')
const User= require('../models/user')
const user = require('../models/user')
const router=express.Router()
router.post('/create',(req,res)=>{
    user.create(
        req.body
    ).then((user)=>{
        console.log("Submitted")
        res.send({Succes:"Succesfully Submitted :",user})
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    }) 
})
router.delete('/delete/:id',(req,res)=>{
user.findByIdAndDelete(req.params.id)
.then(user=>res.json(user))
.catch(err=>res.json(err))
})
router.post('/getuser/:id',(req,res)=>{
    user.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
router.put('/update/:id',(req,res)=>{
    user.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    }).then(user=> res.send({Succes:"Success",user}))
    .catch(err=>res.json(err))
})
module.exports =router