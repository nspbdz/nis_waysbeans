import { useState,useContext,useEffect } from "react";
import {Row,Col, Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { API } from "../../config/api";
import { TiHomeOutline } from 'react-icons/ti';

function AddPropertyForm(props) {
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
    // formData.set("name", "Pending"); 
    // address:dataUpdate.address,
    //       bedroom:dataUpdate.bedroom,
    //       bathroom:dataUpdate.bathroom,
    //       city_id:dataUpdate.city_id,
    //       name:dataUpdate.name,
    //       price:dataUpdate.price,
    //       typeRent:dataUpdate.typeRent,
    formData.set("name", dataUpdate.name);
    formData.set("price", dataUpdate.price);
    formData.set("typeRent", dataUpdate.typeRent);
    formData.set("address", dataUpdate.address);
    formData.set("bedroom", dataUpdate.bedroom);
    formData.set("bathroom", dataUpdate.bathroom);
    formData.set("city_id", dataUpdate.city_id);
    formData.set("amenities", amens.toString());
    // formData.append("image", dataUpdate.imageFile, dataUpdate.imageFile.name);
    formData.append("imageFile", dataUpdate.imageFile,dataUpdate.imageFile.name);
    formData.append("imageFile", dataUpdate.imageFile1,dataUpdate.imageFile1.name);
    formData.append("imageFile", dataUpdate.imageFile2,dataUpdate.imageFile2.name);
    formData.append("imageFile", dataUpdate.imageFile3,dataUpdate.imageFile3.name);
    console.log(formData)
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/150`, {
      let res = await fetch('http://localhost:5000/api/v1/house', {
        method: 'POST',
        body: formData,
      }

    );
    console.log(res)

    const stat=res.status
       if(stat=="200"){
        console.log("success")
        alert("Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam        Untuk melihat pesanan Klik Disini Terimakasih")
        // router.push(`/mybookingpending`);
       }
    // console.log(res)

  } catch (error) {
    console.log(error);
  }
};
console.log(formData)

  // const MakeTransaction = () => {

  //   fetch('http://localhost:5000/api/v1/house', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //         'Authorization':`Bearer ${token}`

  //     },
  //     body: JSON.stringify({
  //       address:dataUpdate.address,
  //       bedroom:dataUpdate.bedroom,
  //       bathroom:dataUpdate.bathroom,
  //       city_id:dataUpdate.city_id,
  //       name:dataUpdate.name,
  //       price:dataUpdate.price,
  //       typeRent:dataUpdate.typeRent,
  //       amenities:amens.toString(),
  //       // image:dataUpdate.imageFile,
  //       image: ("imageFile",dataUpdate.imageFile,dataUpdate.imageFile.name),
  //       // image1:dataUpdate.imageFile1,
  //       // image2:dataUpdate.imageFile2,
  //       // image3:dataUpdate.imageFile3,
        
  //       // image:formData.imageFile.replace(/C:\\fakepath\\/, ''),
  //       // image1:formData.imageFile1.replace(/C:\\fakepath\\/, ''),
  //       // image2:formData.imageFile2.replace(/C:\\fakepath\\/, ''),
  //       // image3:formData.imageFile3.replace(/C:\\fakepath\\/, ''),

  //       // imageFile:for
        

  //     }),
  //   })
  //     .then((res) => res.json() )
  //     .then((res) => {
  //      console.log(res)
  //      const stat=res.status
  //      if(stat=="success"){
  //       console.log("success")
  //       alert("kamu berhasil membuat transaksi")
  //       // router.push(`/mybooking`);
  //      }
  //      console.log(res.status)
  //    }) 
  //     .then((result) => setData(result.rows))
      
  //     .catch((err) => console.log('error'))
  // }

  


  const handleSubmit = (event) => {
    event.preventDefault()
    MakeTransaction() 
  }
 
  return (
  <>
  
    <Form>
       
   
  <Form.Group className="mb-3" controlId="name">
    <Form.Label> <h5> Name Property</h5></Form.Label>
    <Form.Control type="text"  name="name" value={dataUpdate.name} onChange={handleChange} />
  </Form.Group>

  
  <h5 style={{paddingTop:"18px"}} >City</h5>
    <Row>
      <div>
      <select required name="city_id" onChange={handleChange} style={{marginLeft:"10px",width:"1110px"}}>
      <option  value="undefined"></option>
     
      {dataCity?.length > 0 &&
        dataCity?.map((itemCity, index) => (
      <option  value={itemCity.id}>{itemCity.name}</option>
      ))}
      </select>  
      </div>

    </Row>
  <Form.Group className="mb-3" controlId="address">
    <Form.Label> <h5 style={{paddingTop:"28px"}}> Address</h5></Form.Label>
    <Form.Control as="textarea"  name="address" value={formData.address} onChange={handleChange} rows={3} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label> <h5 style={{paddingTop:"28px"}}> Price </h5></Form.Label>
    <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} />
  </Form.Group>
  <h5 style={{paddingTop:"28px"}}>Type Rent</h5>

  <select  name="typeRent" onChange={handleChange} style={{width:"1110px"}}>
  <option value=""> - </option>
  <option value="day">Day</option>
  <option value="month">Month</option>
  <option value="year">Year</option>
  </select>
  <br></br>

  <h5 style={{paddingTop:"30px"}}>Amenities</h5>
  <Row>
            
              <Col sm="1" >
              <input 
                type="checkbox"
                id="Furnished"
                value="Furnished"
                onChange={handleCheckboxChange}
              />
              </Col>
              <Col sm="1" > 
                <p> Furnished</p> 
              </Col>
              <Col sm="1" > 

              <input 
                type="checkbox"
                id="Pet Allowed"
                value="Pet Allowed"
                onChange={handleCheckboxChange}
              />
              </Col>
              <Col sm="2" > 
                <p> Pet Allowed</p> 
              </Col>
              <Col sm="1" >
              <input 
                type="checkbox"
                id="Shared Accomodation"
                value="Shared Accomodation"
                onChange={handleCheckboxChange}
              />
              </Col>
              <Col sm="2" > 
                <p> Shared Accomodation</p> 
              </Col>
            </Row>
 
   
  <h5 style={{paddingTop:"28px"}}>Bedroom</h5>
  <select name="bedroom" onChange={handleChange} style={{width:"1110px"}}>
  <option value=""> - </option>
  <option  value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5+">5+</option>
  </select>
  <br></br>
  <h5 style={{paddingTop:"28px"}}>Bathroom</h5>
  <select name="bathroom" onChange={handleChange}  style={{width:"1110px"}}>
  <option value=""> - </option>
  <option  value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5+">5+</option>
  </select>
  <br></br>
  <h5 style={{paddingTop:"30px"}}>Masukan Foto Property</h5>
  
        <Row>

    <Col sm="1">
          <p>foto Utama</p>
      </Col>

    <Col sm="2">
       <Form.Control  style={{paddingTop:"28px"}}
            name="imageFile"
            type="file"
            onChange={handleChange}
            required
          />
          
  
    </Col>
    <Col sm="1">
          <p>foto </p>
      </Col>
    <Col sm="2"> 
       <Form.Control  style={{paddingTop:"28px"}}
            name="imageFile1"
            type="file"
            onChange={handleChange}
            required
          />
  
    </Col>
    <Col sm="1">
          <p>foto </p>
      </Col>
    <Col sm="2">

    <Form.Control  style={{paddingTop:"28px"}}
            name="imageFile2"
            type="file"
            onChange={handleChange}
            required
          />
    </Col>
    <Col sm="1">
          <p>foto </p>
      </Col>
    <Col sm="2">
    <Form.Control  style={{paddingTop:"28px"}}
            name="imageFile3"
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

export default AddPropertyForm;
