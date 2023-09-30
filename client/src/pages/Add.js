import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {
    const [book, setBook]=useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })
    const handleChange=(e)=>{
        setBook(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    console.log(book)
const navigate=useNavigate()
    const handleClick=async (e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books",book)
            navigate("/")
        }catch(err){
            console.log(err)
        }

    }
  return (
    <div className='form'>
    <h1> Add New Book</h1>
    <input type="text" placeholder="Book title" onChange={handleChange} name="title"/>
    <input type="text" placeholder="Book description" onChange={handleChange} name="desc"/>
    <input type="number" placeholder="Book price" onChange={handleChange} name="price"/>
    <input type="text" placeholder="Book cover image" onChange={handleChange} name="cover"/>
    <button  onClick={handleClick}>Add New Book</button>
   
      <Link to="/">See all books</Link>
    </div>
  )
}

export default Add