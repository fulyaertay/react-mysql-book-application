import express from "express"
import mysql from "mysql"
const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test123",
    database:"test"
})

app.get("/",(req,res)=>{
    res.json("hello this is th backend")
})

app.get("/books",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend")
})