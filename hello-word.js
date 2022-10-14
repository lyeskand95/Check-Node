let http=require('http');
let fs= require('fs/promises');
const express=require('express');
const {password} = require('./password-generator');
const {transporter} = require('./email-sender');
let app=express();
let port=3000 ;
app.get('/', (req, res) => {
    res.send('<h1>Hello World! </h1>')
  })

app.listen(port,()=>{
    console.log('the server '+ port +' has started');
})

 fs.readFile('./welcome.txt').then((data)=>{
        fs.appendFile('./welcome.txt',"hello word").then((err,result)=>{
            if(!err){
                console.log("done"); 
                console.log(data.toString())
            }
        })})
console.log(password)
console.log(transporter)