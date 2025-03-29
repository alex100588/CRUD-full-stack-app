import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:8000/api/users");
        const response = await axios.get("https://crud-full-stack-app.vercel.app/api/users");
        // console.log(response.data)
        setUsers(response.data)
      } catch (error) {
        console.log("Error while fetching the data", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      // .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .delete(`https://crud-full-stack-app.vercel.app/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-center" });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="user-table">
      <Link to='/add' type="button" className="btn btn-primary">
        Add Employee <i className="fa-solid fa-user-plus"></i>
      </Link>

    {users.length === 0 ? <div className="text-center text-danger">
      <h3>No Data to display</h3>
      <p>Please add an Employee</p>
    </div>: 

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
              <tr className="table-row" key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="">
                  <Link to= {`/update/${user._id}`} type="button" className="btn btn-info me-2 ">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>

                  <button onClick={()=>deleteUser(user._id)} type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      }
    </div>
  );
};

export default User;
