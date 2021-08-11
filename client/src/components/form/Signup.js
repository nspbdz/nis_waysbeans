import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { API } from "../../config/api";
import { Redirect, Route } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    listasid: "",

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
      <h4 style={{color:"#613D2B"}}> Register</h4>
      
        <Form.Label>Your full name</Form.Label>
        <Form.Control 
        type="text" 
        name="fullname" 
        value={data.fullname}
        onChange={handleChange}
        placeholder="Enter your name" />
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
      
    
      
      <Button style={{backgroundColor:"#613D2B"}} type="submit">
      Register
      </Button>
      <p>Already have an account ? Klik Here</p>
    </Form>
  );
};

export default Signin;