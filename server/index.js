const express = require('express');
const mongoose=require('mongoose');
const user = require('./models/user');
const cors=require('cors')
mongoose.connect('mongodb+srv://rajkumar45burail:bharat%402003@cluster0.m74pjfv.mongodb.net/test').then(()=>{
    console.log("Connection successfull")
})
const app=express();
app.use(express.json())
app.use(cors())
// app.use('/',(req,res)=>{
//     res.send('<h2>Hello world</h2>')
// })
app.get('/',(req,res)=>{
    user.find({}).then((user)=>res.json(user))
})
app.use('/',require('./routes/userRoutes'))
app.listen(3001,()=>{
    console.log('listening at http://localhost:'+3001+'/')
})