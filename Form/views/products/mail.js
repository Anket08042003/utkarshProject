const express= require("express")
const app = express()
function sendMail(){
    debugger;
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_rm4bjtt"
    const templateID= "template_4np9sla"

    emailjs.send(serviceID,templateID,params)
   .then(
      res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent succesfully")
    }
)
.catch((err)=>console.log(err))
}

