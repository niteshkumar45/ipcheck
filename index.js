const express = require('express')
const app = express()
const requestIp = require('request-ip');

app.use(requestIp.mw());
app.get("/",(req,res)=>{
    res.status(201).send(`it is your ip address is ${req.clientIp}`)
})


app.listen(3200,()=>{
    console.log("the server is running");
})