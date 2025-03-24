import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    adress: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-user">
      <Link to="/" className="btn btn-secondary">
        <i className="fa-solid fa-backward"> Back</i>
      </Link>
      <h3>Add new employee</h3>
      <form className="add-user-form" onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            onChange={inputHandler}
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            onChange={inputHandler}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input
            onChange={inputHandler}
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Phone number:</label>
          <input
            onChange={inputHandler}
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your Number"
          />
        </div>
        <div className="input-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
