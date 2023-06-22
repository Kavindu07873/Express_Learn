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

// json Object eka gaththa
app.post('/Customer/',(req,res)=>{
    res.send('Hello Customer json Object eka awa')
    console.log(req.body)
})
// param ekak ewanawanm mehema thama karanne
app.get('/Customer/:id',(req,res)=>{
    console.log(req.params)
    res.send(' Customer parem id Come')
})

//Query String ekak ewwoth karanne mehema
app.get('/Customer/?',(req,res)=>{
    console.log(req.query)
    res.send(' Customer  Query Come')
})
app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})