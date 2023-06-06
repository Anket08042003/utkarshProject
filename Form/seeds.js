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

const s=[
    {name: 'Soham',
     email: 'soham@gmail.com',
     subject:'query about fees'
    },
    {name:'Sanket',
     email:'sanket@gmail.com',
     subject:'admission process details'

    },
    {name:'Omkar',
     email:'omkar@gmail.com',
     subject:'availabilty of hostel'
    }
]
studentDetails.insertMany(s)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})

