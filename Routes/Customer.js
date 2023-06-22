const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

// router.get('/',(req,res)=>{
//     res.send('Customer Get Method Normal')
// })
router.get('/:id',(req,res)=>{
    res.send('Customer Get parameter Method Normal')
})
router.get('/?',(req,res)=>{
    res.send('Customer Get Query Method Normal')
})

router.post('/',(req,res)=>{
    res.send('Customer Post Method')
})
module.exports = router;