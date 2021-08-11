import {useContext,useState} from 'react';
import { useHistory,Router,Link } from "react-router-dom";
import axios from 'axios';
import icon from "../../src/assets/images/Icon.svg";

import { Form } from "react-bootstrap";

import {
  Button, Card, Col, Row
} from 'react-bootstrap';
import { CartContext } from '../contexts/cartContext';
import { UserContext } from '../contexts/userContext';

const Checkout = (props) => {
  const nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
  const [productId, setProductId] = useState([])
  const contextValue = useContext(UserContext);
  var token= localStorage.getItem("token")
console.log(contextValue[0].user.id)

  const router = useHistory();

  const {state, dispatch} = useContext(CartContext);
  const handleClick = (item, type) => {
    dispatch({
      type,
      data: item
    })
  };
  
console.log(contextValue[0].user.id)

  const idUser=contextValue[0].user.id
  const price=state.carts[0].price
  const description=state.carts[0].description
const dataCart =state.carts
const dataJson=JSON.stringify(dataCart)
const dataParse=JSON.parse(dataJson)
  // console.log(dataCart)
  console.log("dataJson",dataJson)
  console.log("dataParse",dataParse)
  var productPriceData = [];
  var qty = [];
  var ids = [];
{dataCart?.length > 0 &&
  dataCart?.map((itemss) => 
  {
    ids = ids.concat(itemss.id);
    qty = qty.concat(itemss.qty);
  }
  )
}
console.log(ids);
console.log(qty);
  //  productidData.forEach((item, i) => {
  //    console.log(productidData[i])
  //       // formData.set("orderQuantity", item[i])
  //     });
  
  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    status: "",
    postCode  : "",
    price: "",
    orderQuantity: "",
    address: "",
    imageFile: null,
    productId: "",
    user_id: "",
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
    
    // try {
      const formData = new FormData();
      formData.set("product", dataJson);
      formData.set("postCode", data.postCode);
      formData.set("name", data.name);
      formData.set("address", data.address);
      formData.set("email", data.email);
      formData.set("phone", data.phone);
      formData.set("status", "Waiting Approve");
      formData.set("description", description);
      formData.set("user_id", idUser);
      formData.append("imageFile", data.imageFile, data.imageFile.name);

      axios({
        method: "post",
        url: "http://localhost:5000/api/v1/transaction",
        data: formData,
        headers: { "Content-Type": "multipart/form-data",Authorization: "Bearer " +token, },
      })
        .then(function (response) {
          //handle success
          alert("Thank you for ordering in us, please wait 1 x 24 hours to verify you order")
        //  router.push("/");
        router.push("/");

          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      }
  

  return (
    <div>
      {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && (
        <Row>
         <Col sm="4">
        <h4 style={{marginTop:"77px"}}>Shipping</h4>
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
            name="postCode"
            type="number"
            value={data.postCode}
            required
            placeholder="postCode"
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
        <Button style={{backgroundColor:"#613D2B",width:"300px"}} type="submit">pay</Button>
       
      </Form>
 

         </Col>

         <Col sm="4">
         {/* <> */}
         {state.carts.map((item) => (

    
       <div style={{width:"524px",marginBottom:"20px",marginTop:"77px"}}>
        <Row style={{backgroundColor:"#F6E6DA",height:"185px"}} >
            <Col key={item.id}  md={3} style={{marginTop:"10px",paddingLeft:"5px"}}>
              <img   src={item.photo}  style={{width:"90px",height:"140px",marginTop:"14px",marginLeft:"28px"}}   />
            </Col>
          <Col  md={5}>
            <h5 style={{marginTop:"25px"}}>{item.name}</h5>
            {/* <p style={{fontSize:"12px",marginTop:"25px",marginBottom:"4px"}}>{item.product.price}</p> */}
            <p style={{fontSize:"12px",marginBottom:"25px"}}>{nowss}</p> 
         <p style={{fontSize:"12px",marginBottom:"4px"}}>Price: Rp.{item.price}</p>
         <p style={{fontSize:"12px",marginBottom:"4px"}}>Qty: {item.qty}</p>
         <p style={{fontSize:"12px",marginBottom:"4px"}}>Subtotal: Rp.{item.price*item.qty}</p>

          </Col>
          <Col  md={4}  >
              <div style={{alignItems:"center"}}>
              <img src={icon}  style={{width:"100px", height:"32px",display:"block",marginLeft: "auto",marginRight:"auto",marginBottom:"5px",marginTop:"20px"}} />
            </div>
    
        </Col>
       </Row>

    
      </div>
                   
                   
         ))} 
                   
                  {/* //  </> */}
                   </Col>
                   </Row>
                   )}
        {/* <Row>
          <Col sm="4"></Col>
          <Col sm="4">
        <Button style={{backgroundColor:"#613D2B",width:"500px"}} type="submit">pay</Button>

          </Col>
          <Col sm="4"></Col>
        </Row> */}

    </div>
  )
}

export default Checkout
