const express = require('express');
const customer = require('./Routes/Customer')
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const port = 4000;
app.use(express.json());
app.use('/customer' ,customer);

app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})