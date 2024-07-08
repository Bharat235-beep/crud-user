import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const UserData = (props) => {
    const {deleteuser,userdata,getusers}=useContext(UserContext)
    const [show, setShow] = useState(false);
    const [name,setName]=useState(props.name)
    const [email,setEmail]=useState(props.email)
    const [age,setAge]=useState(props.age)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate=(e)=>{
    e.preventDefault()
    userdata(props.id,name,email,age);
  
   handleClose();
  }
  const handleDelete=(id)=>{
    deleteuser(id);
  }
  return (
    <>
      
                <td>{props.SrNo}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.age}</td>
                <td><Button variant='danger' onClick={()=>handleDelete(props.id)}>Delete</Button> &nbsp;  <Button variant="primary" onClick={handleShow}>
      Update
      </Button></td>
               

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Update User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleUpdate} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Please enter username here..." required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Please enter email here..." required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Please enter age here..." min={1} max={1000} required />
      </Form.Group>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" >
           Update
          </Button>
        </Modal.Footer>
    </Form>
        </Modal.Body>
      
      </Modal>


      
    </>
  )
}

export default UserData
