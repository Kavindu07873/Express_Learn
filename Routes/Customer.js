const express = require('express')
const req = require('express/lib/request')
const router = express.Router()


const mysql = require('mysql')
const db = require('../configs/db.configs')
const connection = mysql.createConnection(db.database)
connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Sucefully Connect Mysql Server')
        var userTableQuery ="CREATE TABLE IF NOT EXIT Users (id VARCHAR(255) PRIMARYKEY , Name (VARCHAR(255)))"
        connection.query(userTableQuery , function(err,result){
            if(err){
                throw err;
            }
            else{
                console.log(result)
                if(result.warningCount === 0){
                    console.log("Create Table")
                }
              
            }
        })

    }
})
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