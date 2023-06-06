const mongoose = require('mongoose')
const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    message:{
        type: String,
        required: true
    }

})

const studentDetails = mongoose.model('studentDetails',studentsSchema);

module.exports = studentDetails;