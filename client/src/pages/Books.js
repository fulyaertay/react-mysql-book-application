import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        const fetchAllBooks=async ()=>{
            try{
                const res= await axios.get("http://localhost:8800/books")
                setBooks(res.data)

            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    const handleDelete=async(id)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()

        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
    <div className='header'>
    <h1>
        Ertay's Book Shop
        </h1>
         <button><Link className='formLink' to="/add">Add New Book</Link></button>
    </div>
       
        <div className='books'>
            {books.map(book=>(
                <div className='book' key={book.id}>
                    {book.cover && <img className='cover-image' src={book.cover} alt=""/>}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <div className='del-update-buttons'>
                     <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
               <Link className='update' to={`/update/${book.id}`}>Update</Link>
                </div>
               

                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Books