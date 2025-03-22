import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        console.log(response.data[0].address)
        setUsers(response.data)
      } catch (error) {
        console.log("Error while fetching the data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="user-table">
      <button type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Serial number</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="">
                  <button type="button" className="btn btn-info me-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
