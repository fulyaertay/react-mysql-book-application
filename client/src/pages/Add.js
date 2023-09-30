import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      alert("There was an error!");
    }
  };
  return (
    <div>
      <div className="header">
        <h1>Jonquil's Book Shop</h1>
        <button>
          <Link className="formLink" to="/add">
            Add New Book
          </Link>
        </button>
      </div>
      <div className="form">
        <h1> Add New Book</h1>
        <input
          type="text"
          placeholder="Book title"
          onChange={handleChange}
          name="title"
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Book description"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Book price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="Book cover image"
          onChange={handleChange}
          name="cover"
        />
        <button className="extend-btn-width" onClick={handleClick}>
          Add New Book
        </button>

        <Link to="/">See all books</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Add;
