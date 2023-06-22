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

//apita get post wagema put and delete use karannath puluwaan
    app.delete('/Customer/:id',(req,res)=>{
        console.log(req.params)
        res.send('<h1>Delete Customer</h1>')
    })

    app.put('/Customer/',(req,res)=>{
        console.log(req.data)
        res.send('<h1>Update Customer</h1>')
    })

app.listen(port,(req ,res)=>{
    console.log(`Express App listen ${port}`);
})