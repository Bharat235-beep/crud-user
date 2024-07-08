import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UserContext from '../Context/UserContext';



const AddUser = () => {
   
    const {createuser}=useContext(UserContext)
    const [show, setShow] = useState(false);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const handleClose = () =>{ 
      setName("")
    setEmail("")
    setAge("")
      setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleAddUser=(e)=>{
        e.preventDefault();
        createuser(name,email,age)
        
        handleClose()
    }
  return (
    <div>
       <Button className='btn' variant="primary"  onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose} size='md' backdrop="static"  centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleAddUser}>
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
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Please enter age here..." min={1} max={1000} required/>
      </Form.Group>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" >
           Add User
          </Button>
        </Modal.Footer>
    </Form>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default AddUser
