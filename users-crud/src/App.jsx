import { useState } from 'react'
import './App.css'
import Users from './Components/Users'
import AddUser from './Components/AddUser'
import UserState from './Context/User/UserState'


function App() {



  return (
    <>
    <UserState>
    <AddUser />
      <Users  />
      </UserState>
    </>
  )
}

export default App
