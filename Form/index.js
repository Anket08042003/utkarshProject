const express= require("express")
const app = express()
const path= require('path');
const mongoose=require('mongoose')
const studentDetails = require('./models/studentSchema')

mongoose.connect('mongodb+srv://Anket:Anket@cluster0.m0ycewv.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("mongo connection is open!!")
})
.catch(err=>{
    console.log("oh no error!!")
    console.log(err)
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/products/form', async (req,res)=>{
    const allForms= await studentDetails.find({})
    res.render('products/form',{allForms})
})

app.post('/products',async (req,res)=>{
    const newForm= new studentDetails(req.body)
    await newForm.save()
    console.log(newForm)
    res.send('your response is recorded')
})

app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("listening on port no 3000")
})