import React, { useState } from 'react'
import UserContext from "../UserContext";
import axios from 'axios'
const UserState = (props) => {
    const ui=[]
    const [users,setUsers]=useState(ui)
    const getusers=()=>{
        axios.get('https://crud-user-seven.vercel.app/').then((users=>{
          console.log(users.data)
          setUsers(users.data)
      }))
      .catch(err=>console.log(err))
      }
      const createuser=(name,email,age)=>{
        axios.post('https://crud-user-seven.vercel.app/create/',{name:name,email:email,age:age})
        .then((result)=>{
          
          setUsers(users.concat(result.data))
          console.log(result.data)
      })
      .catch(err=>console.log(err))
      }
      const deleteuser=(id)=>{
        axios.delete('https://crud-user-seven.vercel.app/delete/'+id)
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
        
        axios.put('https://crud-user-seven.vercel.app/update/'+id,{name,email,age})
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
