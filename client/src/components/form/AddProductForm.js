import { useState,useContext,useEffect } from "react";
import {Row,Col, Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { API } from "../../config/api";
import { TiHomeOutline } from 'react-icons/ti';

function AddProductForm(props) {
  const [DataAmenities, setDataAmenities] = useState([]);
  const { handleClose,handleOrder, show } = props;
  const [loading, setLoading] = useState(false);
  const [dataCity, setDataCity] = useState();
  
  const router = useHistory();
  const tokens=localStorage.getItem("token");
  console.log(tokens);
  const contextValue = useContext(UserContext);
  const userId=contextValue[0].user.id;
  const pa =window.location.pathname
  const splitval=pa.split("/house/")
  const urlVal=splitval[1]
  console.log(urlVal)
  // var Gethouse_id =localStorage.getItem("house_id")
 // console.log(a)

  

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({});
  const [dataUpdate, setDataUpdate] = useState([])

  const [amens,setAmens] = useState([])
  const handleCheckboxChange = (event) => {
 // event.preventDefault()
   
     let newArray = [...amens, event.target.id];
     if (amens.includes(event.target.id) )
      {
       newArray = newArray.filter(day => day !== event.target.id);
     }
     setAmens(
       newArray
     );
   };
 console.log(amens.toString())
 
  const handleChange = (e) => {
    const a=e.target.value
    console.log(formData)
    // setFormData(event.target.value)
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
      });

  }
  console.log(formData)
var token= localStorage.getItem("token")
console.log(token);

const getProduct = async () => {
  
  const response = await API.get("/citys");
  console.log(response);
  setDataCity(response.data.data);
  setLoading(false);
};
useEffect(() => {
  getProduct();
}, []);
console.log(dataCity)

const getAmens = async () => {
  const amenss=toString(amens)  
  // setDataCity(response.data.data);
  // setLoading(false);
};
useEffect(() => {
  getAmens();
}, []);

const MakeTransaction = async (e) => {
  // e.preventDefault();
  console.log("clicked")
  
  try {
    const formData = new FormData();
   
    formData.set("name", dataUpdate.name);
    formData.set("stock", dataUpdate.stock);
    formData.set("price", dataUpdate.price);
    formData.set("description", dataUpdate.description);
    formData.append("imageFile", dataUpdate.imageFile,dataUpdate.imageFile.name);
 
    console.log(formData)
  
    const config = {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json', 
        'Authorization':`Bearer ${token}`
      },
    };
      let res = await fetch('http://localhost:5000/api/v1/product', {
        method: 'POST',
        body: formData,
      }

    );
    console.log(res)

    const stat=res.status
       if(stat=="200"){
        console.log("success")
        alert("Berhasil menambahkan produk")
        // router.push(`/mybookingpending`);
       }
    // console.log(res)

  } catch (error) {
    console.log(error);
  }
};
console.log(formData)
  
console.log(token)

  const handleSubmit = (event) => {
    event.preventDefault()
    MakeTransaction() 
  }
 
  return (
  <>
  
    <Form>
       
   
  <Form.Group className="mb-3" controlId="name">
    <Form.Label> <h5> Name </h5></Form.Label>
    <Form.Control type="text"  name="name" value={dataUpdate.name} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="stock">
    <Form.Label> <h5 style={{paddingTop:"28px"}}> Stock </h5></Form.Label>
    <Form.Control type="text" name="stock" value={formData.stock} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label> <h5 style={{paddingTop:"28px"}}> Price </h5></Form.Label>
    <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="description">
    <Form.Label> <h5 style={{paddingTop:"28px"}}> description</h5></Form.Label>
    <Form.Control as="textarea"  name="description" value={formData.description} onChange={handleChange} rows={3} />
  </Form.Group>

  <br></br>
  <h5 style={{paddingTop:"30px"}}>Masukan Foto kopi</h5>
  
        <Row>

    <Col sm="1">
          <p>foto </p>
      </Col>

    <Col sm="2">
       <Form.Control  style={{paddingTop:"28px"}}
            name="imageFile"
            type="file"
            onChange={handleChange}
            required
          />
          
  
    </Col>
  </Row>
    
   
  <Row>
    <Col sm="4"></Col>
    <Col sm="4">
    <div style={{paddingTop:"80px"}}>
      <Button style={{width:"300px",height:"50px"}} type="submit" onClick={handleSubmit}> Save</Button>

      </div>
    </Col>
    <Col sm="4"></Col>
  </Row>

     
</Form>


</>

 
  );
}

export default AddProductForm;
