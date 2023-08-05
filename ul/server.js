const express = require('express');
const app = express();
const mongoose = require('mongoose');
const devuser=require('./devusermodel')
mongoose.connect("mongodb+srv://vivek8885:vivek@cluster0.iuhjpt0.mongodb.net/").then(
    () => console.log("DB Connected")
)

app.use(express.json())

app.get('/',async(req,res) =>{
    return res.send('Hello World')
})
app.get('/name',async(req,res)=>{
    try{
        const{fullname}=req.body;
        const exist=await devuser.find();
        if(exist){
            return res.status(200).send(exist);
        }
    }
    catch(err){
        console.log(err);
    }
})

app.get('/name/:name',async(req,res)=>{
    try{
        const findname=req.params.name;
        const exist=await devuser.findOne({fullname:findname});
        if(exist){
            res.send(findname+' is found in the database');
        }
        else{
            res.status(400).send(findname+'  is not presnt in the database');
        }
    }
    catch(err){
            res.status(400).send(err);
    }
})

app.post('/register',async(req,res)=>{
    try{
    const{fullname,email,mobile,skill,password,confirmpassword}=req.body;
    const exist= await devuser.findOne({email});
    if(exist){
        return res.status(400).send('user already exist')
    }
    if(password!=confirmpassword){
        return res.statusCode(403).send('Invalid Password')
    }

    let newUser=new devuser({
        fullname,email,skill,mobile,password,confirmpassword
    })
    newUser.save();
    return res.status(200).send('User Registered Sucessfully');
    }
    catch(err){
        console.log('err');
        return res.status(500).send('Server error')
    }
})

app.delete('/delete/:email',async(req,res)=>{
    try{
        const delmail=req.params.email;
         const exist=await devuser.findOneAndDelete({email:delmail});
         if(exist)
         return res.send('Deleted Sucessfully');
         else{
            return res.status(400).send(delmail+'  is not found in the database');
         }
    }
    catch(err){
        return res.status(500).send('Server Error');
    }
})

app.put('/update/:id',async(req,res)=>{
    try{
         const prev=req.params.id;
         const {newmobile}=req.body;
         const exist=await devuser.findByIdAndUpdate(
                {id:prev},
                {$set:{mobile:newmobile}},
                {new:true}
         );
         if(exist){
            res.status(200).send('Updated SucessFully');
        }
        else{
            res.status(400).send('No data Found');
        }
    }
    catch(err){
        res.status(500).send('Server Error');
    }
})

app.listen(5000,()=> console.log('Server Running'))
