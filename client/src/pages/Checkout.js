import {useContext,useState} from 'react';
import { useHistory,Router,Link } from "react-router-dom";

import { Form } from "react-bootstrap";

import {
  Button, Card, Col, Row
} from 'react-bootstrap';
import { CartContext } from '../contexts/cartContext';

const Checkout = (props) => {
  var token= localStorage.getItem("token")

  const router = useHistory();

  const {state, dispatch} = useContext(CartContext);
  const handleClick = (item, type) => {
    dispatch({
      type,
      data: item
    })
  };
  
  console.log(state.carts[0].qty)
  const qty=state.carts[0].qty
  const price=state.carts[0].price
  const description=state.carts[0].description
  const ids=state.carts[0].ids
  console.log(state)
  console.log(description)
  console.log(state.carts.length)


  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    possCode  : "",
    price: "",
    orderQuantity: "",
    address: "",
    imageFile: null,
    product_id: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked")
    
    try {
      const formData = new FormData();
      formData.set("name", data.name);
      formData.set("email", data.email);
      formData.set("phone", data.phone);
      formData.set("possCode", data.possCode);
      formData.set("orderQuantity", qty);
      formData.set("address", data.address);
      formData.set("price", price);
      formData.set("description", description);
      formData.set("product_id", ids);
      formData.append("imageFile", data.imageFile, data.imageFile.name);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization':`Bearer ${token}`
        },
      };
      // let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/150`, {
        let res = await fetch(`http://localhost:5000/api/v1/transaction`, {
          method: 'Post',
          body: formData,
        }
  
      );
      console.log(res)
  
      const stat=res.status
         if(stat=="200"){
          console.log("success")
          alert("kamu berhasil")
          // router.push("/");
         }
      // console.log(res)
  
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    // <p>asdasdas</p>
    <div>
      {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && (
       
       <Row>
         <Col sm="4">
         <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            name="name"
            type="text"
            value={data.name}
            required
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="email"
            type="text"
            value={data.email}
            required
            placeholder="email "
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="phone"
            type="number"
            value={data.phone}
            required
            placeholder=" Phone"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="possCode"
            type="number"
            value={data.possCode}
            required
            placeholder="possCode"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="address"
            type="text"
            placeholder="address"
            required
            value={data.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="imageFile"
            type="file"
            onChange={handleChange}
            required
          />
        </Form.Group>
       
        <Button type="submit">pay</Button>
      </Form>
 

         </Col>

         <Col sm="4">
          {state.carts.map((item) => (
            <Col key={item.id}>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img
                  variant="top"
                  src={item.photo}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text> harga {item.price}</Card.Text>
                  <Row>
                    <Col sm="4">
                    <div className="d-flex w-100 align-items-center">
                    <div className="flex-grow-1">

                  
                    </div>
                    {/* <Button variant="danger" onClick={() => handleClick(item, "REMOVE_CART")}>Remove</Button> */}
                  </div>


                    </Col>
                    <Col sm="4">
                      <p>subtotal</p>
                      <p>{item.qty}</p>
                      <p>{item.price*item.qty}</p>
                      
                    </Col>
                  </Row>
         
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Checkout
