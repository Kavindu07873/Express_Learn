const express = require('express')
const req = require('express/lib/request')
const router = express.Router()


const mysql = require('mysql')
const db = require('../configs/db.configs')
const { send } = require('express/lib/response')
const connection = mysql.createConnection(db.database)
connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Sucefully Connect Mysql Server')

        var userTableQuery ="CREATE TABLE IF NOT EXISTS Users (id VARCHAR(255) PRIMARY KEY,Name VARCHAR(255) ,address VARCHAR(255))"
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
router.delete('/:id',(req,res)=>{
    console.log(req.params.id)
    const id = req.params.id;
    const Query = "DELETE FROM Users WHERE id=?"
    connection.query(Query , [id] , (err,rows)=>{
        if(err)throw err
        if(rows.affectedRows>0){
        res.send({'message' : 'Deleted'})
        // res.send()
        }else{
            res.send({'message': 'Youser Not Found'})
        }
        // res.send(rows)
    })
    
    // res.send('Customer Delete parameter Method Normal')


})
router.get('/?',(req,res)=>{

    const query ="SELECT * FROM Users";
    connection.query(query ,(err , rows)=>{
        if(err){
            throw err
        }
        else{
            res.send(rows)
        }
    } )

    // res.send('Customer Get Query Method Normal')
})

router.put('/',(req,res)=>{
    var Body = req.body;
   
        const id = Body.id;
        const Name = Body.Name;
        const address = Body.address;

         const Query = "UPDATE Users SET Name=?, address=? WHERE id =?"

        connection.query(Query , [Name,address,id] , (err,rows)=>{
            if(err)throw err;
            // res.send(rows)
            if(rows.affectedRows>0){
                res.send(rows.message)
            }else{
                res.send({'message':'Not Found That User'})
            }

        })
})


router.post('/',(req,res)=>{
    var Body = req.body;
   
        const id = Body.id;
        const Name = Body.Name;
        const address = Body.address;

        console.log(id , Name , address)

        const Query ="INSERT INTO Users VALUES (?,?,?)"
        
        connection.query(Query, [id,Name,address] , (err)=>{
            if(err){
                res.send(err)
                console.log("Duplicate Value")
            }else{
                    console.log('User Created')
                    res.send('Successfully insert Customer') 
            }
        })



    // res.send('Customer Post Method')


})
module.exports = router;