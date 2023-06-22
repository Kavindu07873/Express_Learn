const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const port = 4000;
//ewana json request eka alla gannawa
    app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Express')
    // console.log('get reques has come')
})

//json Object eka gaththa
app.get('/Customer',(req,res)=>{
    res.send('Hello Customer')
    console.log(req.body)
})

app.get('/Customer/:id',(req,res)=>{
    console.log(req.params)
    res.send(' Customer parem id Come')
})
app.get('/Customer/',(req,res)=>{
    console.log(req.params)
    res.send(' Customer parem Name Come')
})
app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})