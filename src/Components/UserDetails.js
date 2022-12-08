import React from "react"
import './UserDetails.css'
import './Progress'

function UserDetails(props){
  function onEditUserClicked(event, user){
    props.onEditUser(user)
  }


    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Tasks</th>
            <th>Date added</th>
            <th>Type of transaction</th>
            <th>Progress Bar</th>
            <th></th>
          </tr>
          {props.users.map((user) => {
             return <tr>
                      <td data="Nameofclient">{user.name}</td>
                      <td>
                        <button className="btn btn-sucess" onClick={(event) => {onEditUserClicked(event, user)}}>To do list</button>
                      </td>
                      <td>{user.dateadded}</td>
                      <td>{user.typeoftransac}</td>
                      <td>
                          
                          <button className="btn btn-primary" onClick={(event) => {onEditUserClicked(event, user)}}>View information</button>
                          <button className="btn btn-danger">Delete </button>
          
                      </td>
                    </tr>
          })}

        </table>

    </div>
}


export default UserDetails;