import { useParams, useLocation,Router,useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';
import brand from "../assets/images/brand.svg";
import { ListGroup,Card,Jumbotron,Row,Col,Button,Container,Form } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import { API } from "../config/api";
import { useQuery } from "react-query";
import not_found from "../assets/images/not_found.svg";

const MyBooking = () => {
  var Gethouse_id =localStorage.getItem("house_id")

  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })

  const router = useHistory();

  const [dataUpdate, setDataUpdate] = useState([])
  const [formData, setFormData] = useState({
      
    status:"",
    total: "",
    imageFile:""
  });
  const handleChange = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
console.log()
  // const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(null);
  const [loading, setLoading] = useState(true);
  const contextValue = useContext(UserContext);
console.log(contextValue[0])

  const userId=contextValue[0].user.id;
  const dataUser=contextValue[0];
console.log(userId)
  

  const { isLoading, data, error } = useQuery("products", async () => {
  // /  const response = await API.get("/products");
    const response = await API.get(`/transaction?user_id=${userId}`);
  
    return response.data.data;
  });
  if (isLoading) return <p>...loading</p>;

  const isStatus=data.filter(item => ( item.status === "Waiting")).sort((a, b) => (b.id - a.id))
  {isStatus?.length <= 0 && (
    <img src={not_found} width="100%" height="100%" alt="not found" />
  )}
console.log(data)
console.log(isStatus)
// console.log(data.length)
const item=isStatus[0]
console.log(item)
console.log(item.id)
localStorage.setItem("transaction_id", item.id)

  // if (loading) return <p>loading...</p>;
console.log(item.checkin)
var d1 = new Date(item.checkin);
var d2 = new Date(item.checkout);
const checkinYear=d1.getUTCFullYear()
const checkinMonth=d1.getUTCMonth()
const checkinDay=d1.getUTCDate()
const checkoutYear=d2.getUTCFullYear()
const checkoutMonth=d2.getUTCMonth()
const checkoutDay=d2.getUTCDate()
console.log(d2)

// console.log(checkinYear);
// console.log(checkinMonth);
// console.log(checkinDay);

// console.log(checkoutYear);
// console.log(checkoutMonth);
// console.log(checkoutDay);

const compareYear=checkoutYear-checkinYear
const compareMonth=checkoutMonth-checkinMonth
const compareDay=checkoutDay-checkinDay
var AllCompared=0;

if(compareDay ==0){
  var AllCompared=AllCompared
}
else if(compareDay >0){
  // console.log(compareDay)
  // var AllCompared=compMonth+compareDay
  var AllCompared=compareDay
  
  if(compareMonth >0){
    var compMonth=compareMonth*30
    // console.log(compMonth)
    var AllCompared=compMonth+compareDay

  }
  if(compareYear >0){
    var compYear=compareYear*365
    var AllCompared=compYear+compareDay
    // console.log(AllCompared)
  }
}
const totalHari=compareYear+"Year  " +compareMonth +" Month " +compareDay +" Day"
// const totals=item.house.price*AllCompared
const harga=item.house.price
const totals=harga*AllCompared

console.log(AllCompared);
var rent=''
console.log(dataUpdate)
// console.log(dataUpdate.imageFile.name)

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(data);
  console.log("clicked")
  
  try {
    const formData = new FormData();
    formData.set("status", "Pending");
    formData.append("imageFile", dataUpdate.imageFile, dataUpdate.imageFile.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/${Gethouse_id}`, {
      let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/${item.id}`, {
        method: 'PATCH',
        body: formData,
      }

    );
    console.log(res)

    const stat=res.status
       if(stat=="200"){
        console.log("success")
        alert("kamu berhasil")
        router.push(`/mybookingpending`);
       }
    // console.log(res)

  } catch (error) {
    console.log(error);
  }
};

const handleClicks = (event) => {
  console.log("clicked")
  event.preventDefault()
  
  // MakeTransaction() 
}

  return(
    <div>
      <>
      {/* {isStatus?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )} */}
      {data?.length > 0 &&
        data?.map((item, index) => (
          <Col key={index}>
            {/* <CardItem item={item} /> */}
          </Col>
        ))}
<Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
<Col xs lg="2">
  
</Col>
<Col md="auto">
<Row>
<Card style={{ width: '1035px',height:"419px"  }}>
<ListGroup variant="flush">
  <ListGroup.Item>
  <Row>
  <Col sm={4}>
  <img src={brand} alt="brand" />

  </Col>
  <Col sm={5}>
    
  </Col>
  
  <Col sm={3}>
    <h4>Booking</h4>
    <p>{Nowss} </p>
  </Col>
  </Row>

  {/* </ListGroup.Item> */}
  {/* <ListGroup.Item> */}
  

  
  <Row>
  <Col sm>
  <h4>{item.house.name}</h4>
<p>{item.house.address}</p>
<Button  variant="secondary">Waiting Payment</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>

    <p>{item.checkin} </p>
    <br></br>
    <p>Check-Out</p>
    <p>{item.checkout} </p>
    
    </Col>
  
  </Row>
  </Col>
  <Col sm>
      <h5>Amenities</h5>
    <p>{item.house.amenities} </p>
    <h5>Type Of Rent</h5>
    <p>{item.house.typeRent} </p>
    </Col>
  <Col sm>
    
    <img style={{width:"138px"}} src="" />
  <p>Upload Payment Proof</p>
  <Form >
    
        <Form.Group>
          <Form.Control
            name="imageFile"
            type="file"
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form>
        
  </Col>
</Row>
  
  <ListGroup>
  <Row>
  <Col sm="4">
  <Row>
  <Col sm="4">
   
  <h5>No</h5>
    
  </Col>
  <Col sm="4"><h5>Full Name</h5></Col>
  <Col sm="4"><h5>Gender</h5></Col>
</Row>
  </Col>
  <Col sm="4"><h5>Phone/Email</h5></Col>
  <Col sm="4">

  </Col>
</Row>
  </ListGroup>
  </ListGroup.Item>
  <ListGroup.Item>
  
  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  <Col sm={4}>{dataUser.user.fullname} </Col>
  <Col sm={4}>{dataUser.user.gender} </Col>
</Row>
 </Col>
 <Col sm={4}>{dataUser.user.email} </Col>
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
  <p>{compareYear +"Year "}
    {compareMonth +" Month "}
    {compareDay +" Day"} </p>

  </Col>
</Row>

  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  <Col sm={2}>Rp. {item.house.price*AllCompared} </Col>
</Row>

  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={4}>

  
  <Button onClick={handleSubmit} variant="primary" style={{width:"150px"}}>

    Pay
  </Button>

     </Col>
</Row>

  </ListGroup.Item>
  </ListGroup.Item>
</ListGroup>
</Card>
  <Col sm={4}></Col>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
</Row>
</Col>
<Col xs lg="2">
  
</Col>
</Row>
</>
   
  </div>
  )
}
export default MyBooking;
