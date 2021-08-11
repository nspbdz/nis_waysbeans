import { useState,useContext,useEffect } from "react";
import {Row,Col, Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { API } from "../../config/api";
import { TiHomeOutline } from 'react-icons/ti';
import guetamala from "../../assets/images/guetamala.png";

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
        alert("Success Add Product")
        router.push(`/`);
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
  <Row>
    <Col xs={5}>
    <Form style={{marginTop:"40px"}}>
       
   
       <Form.Group className="mb-3" controlId="name">
         <h4>Add Product</h4>
         <Form.Control type="text" placeholder="name"  name="name" value={dataUpdate.name} onChange={handleChange} />
       </Form.Group>
     
       <Form.Group className="mb-3" controlId="stock">
         <Form.Control type="text" placeholder="stock" name="stock" value={formData.stock} onChange={handleChange} />
       </Form.Group>
     
       <Form.Group className="mb-3" controlId="price">
         <Form.Control type="text" placeholder="price" name="price" value={formData.price} onChange={handleChange} />
       </Form.Group>
     
       
       <Form.Group className="mb-3" controlId="description">
         <Form.Control as="textarea" placeholder="description" name="description" value={formData.description} onChange={handleChange} rows={3} />
       </Form.Group>
     
       <br/>
       {/* </br> */}
       
            <Form.Control  style={{paddingTop:"20px"}}
                 name="imageFile"
                 type="file"
                 onChange={handleChange}
                 required
               />
        
       <Row>
         <Col sm="2"></Col>
         <Col sm="4">
         <div style={{paddingTop:"54px"}}>
           <Button style={{backgroundColor:"#613D2B", width:"260px",height:"40px"}} type="submit" onClick={handleSubmit}> 
           Add Product
           </Button>
     
           </div>
         </Col>
         <Col sm="4"></Col>
       </Row>
     
          
     </Form>
     
     
    </Col>
    <Col xs={1}>
    </Col>

    <Col  xs={5}>
    <img style={{marginTop:"20px"}} width="436" height="500" src={guetamala} />
    </Col>
  </Row>
  
</>

 
  );
}

export default AddProductForm;
