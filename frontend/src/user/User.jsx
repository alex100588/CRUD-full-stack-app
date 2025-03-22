import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="user-table">
      <button type="button" className="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
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
          <tr>
            <td>1</td>
            <td>Alex</td>
            <td>alex@yahoo.com</td>
            <td>Romania</td>
            <td className="">
              <button type="button" className="btn btn-info me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <button type="button" className="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
