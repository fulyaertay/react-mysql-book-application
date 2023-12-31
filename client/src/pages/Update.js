import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = (props) => {
  const location = useLocation();
  const [book, setBook] = useState({
    title: location.state.title,
    desc: location.state.desc,
    price: location.state.price,
    cover: location.state.cover,
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const navigate = useNavigate();

  console.log(location.state);
  const bookId = location.pathname.split("/")[2];
  console.log(bookId);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
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
        <h1> Update the Book</h1>
        <input
          type="text"
          placeholder="Book title"
          onChange={handleChange}
          name="title"
          defaultValue={location.state.title}
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Book description"
          name="desc"
          onChange={handleChange}
          defaultValue={location.state.desc}
        />
        <input
          type="number"
          placeholder="Book price"
          onChange={handleChange}
          name="price"
          defaultValue={location.state.price}
        />
        <input
          type="text"
          placeholder="Book cover image"
          onChange={handleChange}
          name="cover"
          defaultValue={location.state.cover}
        />
        <button className="extend-btn-width" onClick={handleClick}>
          Update the Book
        </button>
        <Link to="/">See all books</Link>
      </div>
    </div>
  );
};

export default Update;
