const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.status(201).send(`your ip address is ${req.ip}`)
})

app.listen(3200)