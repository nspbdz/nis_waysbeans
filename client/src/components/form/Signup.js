import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { API } from "../../config/api";
import { Redirect, Route } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    listasid: "",
    address: "",

  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const config = {
      'Content-Type': 'application/json'
    }

    const response = await API.post('/register', data, config );
    console.log(response)
    
  const stat=response.data.status
  if(stat == "failed"){
alert("gagal register ")


}else {
alert("berhasi register silahkan login  ")

}

  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label>Your full name</Form.Label>
        <Form.Control 
        type="text" 
        name="fullname" 
        value={data.fullname}
        onChange={handleChange}
        placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="text" 
        name="username" 
        value={data.username}
        onChange={handleChange}
        placeholder="Enter Username" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        name="email" 
        value={data.email}
        onChange={handleChange}
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>address</Form.Label>
        <Form.Control 
        type="textarea" 
        name="address" 
        value={data.address}
        onChange={handleChange}
        placeholder="Enter address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicListas">
        <Form.Label>As </Form.Label>
        
        <Form.Control 
        type="text" 
        name="listasid" 
        value={data.listasid}
        onChange={handleChange}
        placeholder="owner / user" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        name="password" 
        value={data.password}
        onChange={handleChange}
        placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control 
        type="text" 
        name="gender" 
        value={data.gender}
        onChange={handleChange}
        placeholder="Gender" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Signin;