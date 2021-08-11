import { useState } from "react";
import { useMutation } from "react-query";
import { Form, Button } from "react-bootstrap";
import { API, setAuthToken } from "../../config/api";

const Signin = ({ handleSignin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = useMutation(
    async () => {
      const config = {
        "Content-Type": "application/json",
      };
      return await API.post("/login", data, config);
    },
    {
      onSuccess: async ({ data }) => {
        console.log(data)
        // console.log(data.data.token)
        setAuthToken(data.data.token);
        handleSignin({
          type: "LOGIN",
          payload: data.data,

        });
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser.mutate();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h4 style={{color:"#613D2B"}}> Login</h4>
        <Form.Control
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Group>
      <Button style={{backgroundColor:"#613D2B"}} type="submit">
        Submit
      </Button>
      <p>Don't have an account ? Klik Here</p>
    </Form>
  );
};

export default Signin;
