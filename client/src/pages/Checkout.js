import {useContext,useState} from 'react';
import { Form } from "react-bootstrap";

import {
  Button, Card, Col, Row
} from 'react-bootstrap';
import { CartContext } from '../contexts/cartContext';

const Checkout = (props) => {
  const {state, dispatch} = useContext(CartContext);

  const handleClick = (item, type) => {
    dispatch({
      type,
      data: item
    })
  };
  
  
  console.log(state)
  console.log(state.carts.length)


  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    possCode  : "",
    price: 0,
    orderQuantity: 0,
    address: "",
    imageFile: null,
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
    console.log(data);
    try {
      const formData = new FormData();
      formData.set("name", data.name);
      formData.set("email", data.email);
      formData.set("phone", data.phone);
      formData.set("possCode", data.possCode);
      formData.set("orderQuantity", data.orderQuantity);
      
      formData.set("address", data.address);
      formData.set("price", data.price);
      formData.set("description", data.description);
      formData.append("imageFile", data.imageFile, data.imageFile.name);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      await props.onAddProduct(formData, config);
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
            placeholder="product name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="price"
            type="number"
            value={data.price}
            required
            placeholder="price"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="description"
            type="text"
            placeholder="description"
            required
            value={data.description}
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
        <Form.Group>
          <Form.Control
            name="category"
            type="text"
            required
            placeholder="category"
            value={data.category}
            onChange={handleChange}
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
