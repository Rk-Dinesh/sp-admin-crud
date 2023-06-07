import React, { useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate ,useParams} from "react-router-dom";

function Adduser({users,setUsers}) {
   
    let navigate = useNavigate()
    let params = useParams()
    console.log(params)
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [dob, setDob] = useState("");

    let handleSubmit = ()=>{
        let newUser = { name,email,mobile,dob }
        let newArray = [...users]
        if(params.id !== undefined)
        {
            newArray.splice(params.id,1,newUser)
        } else {
            newArray.push(newUser)
        }
        setUsers(newArray)
        navigate('/dashboard')
      }

      useEffect(()=>{
        if(params.id!==undefined)
        {
            setName(users[params.id].name)
            setEmail(users[params.id].email)
            setMobile(users[params.id].mobile)
            setDob(users[params.id].dob)
        }
      },[users,params.id])

    return <>
    <div className = "container-fluid">
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  value ={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Mobile Number"  value={mobile}  onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDob">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="Enter BirthDate" value={dob} onChange={(e)=>setDob(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default Adduser;