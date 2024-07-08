import React, { useState } from 'react'
import UserContext from "../UserContext";
import axios from 'axios'
const UserState = (props) => {
    const ui=[]
    const [users,setUsers]=useState(ui)
    const getusers=()=>{
        axios.get('http://localhost:3001').then((users=>{
          console.log(users.data)
          setUsers(users.data)
      }))
      .catch(err=>console.log(err))
      }
      const createuser=(name,email,age)=>{
        axios.post('http://localhost:3001/create/',{name:name,email:email,age:age})
        .then((result)=>{
          
          setUsers(users.concat(result.data))
          console.log(result.data)
      })
      .catch(err=>console.log(err))
      }
      const deleteuser=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then((result)=>{
            console.log(result)
            // console.time()
            // getusers();
            // console.timeEnd()
            
             setUsers(users.filter((value) =>{return (value._id!==id)}))
             
        })
        .catch(err=>console.log(err))
      }
      const userdata=(id,name,email,age)=>{
        
        axios.put('http://localhost:3001/update/'+id,{name,email,age})
        .then((result) => {
          console.log(result.data);
          getusers();
          
        })
        .catch(err=>console.log(err))
        
      }
  return (
    <div>
      <UserContext.Provider value={{users,setUsers,getusers,createuser,deleteuser,userdata}}>
        {props.children}
      </UserContext.Provider>
    </div>
  )
}

export default UserState
