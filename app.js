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


app.get('/Customer',(req,res)=>{
    res.send('Hello Customer')
    console.log(req.body)
})


app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})