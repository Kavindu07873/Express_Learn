const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const port = 4000;

app.get('/',(req,res)=>{
    res.send('get reques has come')
    console.log('get reques has come')
})


app.get('/Customer',(req,res)=>{
    res.send('get reques has come Customer')
    console.log('get reques has come')
})


app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})