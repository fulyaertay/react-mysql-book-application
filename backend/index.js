import express from "express"
import mysql from "mysql"
import cors from "cors"
const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test123",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

app.post("/books",(req,res)=>{
    const q="INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values=["title from backend","desc from backend","cover pic from backend"]
    db.query(q,[values],(err,data)=>{
        if(err) res.json(err)
        return res.json("book has been created")
    })

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