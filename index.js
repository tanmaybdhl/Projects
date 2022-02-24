const nodemailer = require("nodemailer");
const express = require("express")
var app = express();

app.use(express.json({extended : false}));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tanmaybudholia@gmail.com',
        pass: 'gmail@ssured1234'
    }
    
});

var mailoptions = {
    from:'tanmaybudholia@gmail.com',
    to:'tanmaybudholia@gmail.com',
    subject:'nodemailer',
    text:'whattup biaatch'
};

app.post('/test',(req,res)=>{
    var email = req.body.email;

    var mailoptions = {
        from:'tanmaybudholia@gmail.com',
        to:email,
        subject:'nodemailer',
        text:'whattup biaatch'
    };
    transporter.sendMail(mailoptions, function(err,info){
        if(err)console.log(err);
        else {
            console.log(info);
            res.json(info);
        }
    });
})

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`server is running on port ${PORT}`));