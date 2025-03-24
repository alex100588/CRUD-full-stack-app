import React from 'react'
import './AddUser.css'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <div className='add-user'>
        <Link to='/' className='btn btn-secondary'>
            <i className="fa-solid fa-backward"> Back</i>
        </Link>
        <h3>Add new employee</h3>
        <form className="add-user-form" >
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
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
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser