import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import UserContext from '../Context/UserContext';
import UserData from './UserData';
const Users = (props) => {
  let SrNo=0
 
 const {users,getusers}=useContext(UserContext)
    useEffect(()=>{
        getusers();
    },[])
    useEffect(()=>{
        getusers();
    },[users.length])
  return (
    <div>
      <div className="users">
        <Table variant="secondary" responsive="md" striped bordered hover >
          <thead>
          <tr>
            <th>Sr No.</th>
            <th>User Name</th>
            <th>Email Address</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user)=>{
            return (
              <tr key={user._id}>
              <UserData SrNo={++SrNo} id={user._id} name={user.name} email={user.email} age={user.age}/>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Users
