import {  useLocation,Router,useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';
import brand from "../assets/images/brand.svg";
import { API } from "../config/api";
import { ListGroup,Card,Jumbotron,Row,Col,Button,Container,Form } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import { useQuery } from "react-query";

const History = () => {

  const router = useHistory();
  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
  var transaction_id =localStorage.getItem("transaction_id")

  
  // const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(null);
  const [loading, setLoading] = useState(true);
 
  
  const { isLoading, data, error } = useQuery("products", async () => {
  // /  const response = await API.get("/products");
  const response = await API.get(`/transactions`);
    // const response = await API.get(`/transaction?user_id=${userId}`);
    return response.data.data;
  });
  if (isLoading) return <p>...loading</p>;
// console.log(data)
console.log(data.transactions)
const dataTransaction=data.transactions
const isStatus=dataTransaction.filter(item => ( item.status === "Approve" )).sort((a, b) => (b.id - a.id))
// console.log(isStatus)
const items=isStatus
console.log(items)


  return(
    <div>
      <>
      {items?.length <= 0 && (
        <p>data kosong</p>
        // <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {items?.length > 0 &&
        items?.map((item, index) => (
          // <Col key={index}>
          <div style={{paddingBottom:"60px"}}>
          <>
    <Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
    <Col xs lg="2">
      
    </Col>
    <Col md="auto">
    <Row>
    <Card style={{ width: '1035px',height:"419px"  }}>
    <ListGroup variant="flush">
      {/* <ListGroup.Item> */}
      <Row>
      <Col sm={4} >
      <img style={{marginLeft:"30px",paddingTop:"20px"}} src={brand} alt="brand" />
    
      </Col>
      <Col sm={5}>
        
      </Col>
      
      <Col sm={3}>
        <h4 style={{paddingTop:"20px"}}>Booking</h4>
        <p>{Nowss} </p>
      </Col>
      </Row>
    
     
      <Row>
      <Col sm>
      <h4>{item.house.name}</h4>
    <p>{item.house.address}</p>
      <Button style={{marginLeft:"30px",paddingTop:"20px"}}   variant="light"> <p style={{color:"#FF9900"}}>Waiting Approve</p> </Button>
      </Col>
      <Col sm>
      <Row>
        <Col sm>
        <>
    <input type="radio" /> <br></br>
    <div style={vl}></div>
    <input checked="active" type="radio" />
    </>
        </Col>
        
        <Col sm>
        <h5>Check-In</h5>
    
          <p>{checkIns} </p>
        {/* </br> */}
        <h5>Check-Out</h5>
        <p>{checkOuts} </p>
        
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
        
        <img style={{width:"138px",height:"138px"}} src={item.attachment} />
      <p>Upload Payment Proof</p>
     
            
      </Col>
    </Row>
    <ListGroup.Item>
      
      {/* <ListGroup> */}
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
      {/* </ListGroup> */}
      </ListGroup.Item>
    
      <ListGroup.Item>
      <Row  >
      <Col sm={4}>
    
      <Row>
      <Col sm={4}>1 </Col>
      <Col sm={4}>{dataUser.user.fullname} </Col>
      <Col sm={4}>{dataUser.user.gender} </Col>
     </Row>
    
     </Col>
     <Col sm={4}>{dataUser.user.phone} </Col>
      <Col sm={2}>
      <h5> Long Time Rent :</h5>
      </Col>
      <Col sm={2}>
        <p> {item.totaltime} </p>
      {/* <p>{compareYear +"Year "}
        {compareMonth +" Month "}
        {compareDay +" Day"} </p> */}
    
      </Col>
    </Row>
    </ListGroup.Item>
    
      <ListGroup.Item>
        <Row>
      <Col sm={4}> </Col>
      <Col sm={4}> </Col>
      <Col sm={2}> <h5>Total :</h5> </Col>
      <Col sm={2}>Rp. {item.total} </Col>
    </Row>
    </ListGroup.Item>
    
        <Row>
      <Col sm={4}> </Col>
      <Col sm={4}> </Col>
      <Col sm={4}>
    
      
         </Col>
    </Row>
    
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
      
<Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
<Col xs lg="2">
  
</Col>
<Col md="auto">
<Row>
<Card style={{ width: '1035px',height:"419px"  }}>
<ListGroup variant="flush">
  {/* <ListGroup.Item> */}
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

 
  <Row>
  <Col sm>
  <h4>{item.house.name}</h4>
<p>{item.house.address}</p>
  <Button  variant="secondary">{item.status}</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>

    {/* <p>{item.checkin} </p> */}
    <br></br>
    <p>Check-Out</p>
    {/* <p>{item.checkout} </p> */}
    
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
    
    <img style={{width:"138px"}} src={item.attachment} />
  <p>Upload Payment Proof</p>
 
        
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
  {/* </ListGroup.Item> */}
  {/* <ListGroup.Item> */}
  
  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  <Col sm={4}>{item.user.fullname} </Col>
  <Col sm={4}>{item.user.gender} </Col>
</Row>
 </Col>
 <Col sm={4}>{item.user.phone} </Col>
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
    <p> {item.totaltime} </p>
  {/* <p>{compareYear +"Year "}
    {compareMonth +" Month "}
    {compareDay +" Day"} </p> */}

  </Col>
</Row>

  {/* <ListGroup.Item> */}
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  <Col sm={2}>Rp. {item.total} </Col>
</Row>

  {/* </ListGroup.Item> */}
  {/* <ListGroup.Item> */}
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={4}>

  
     </Col>
</Row>

  {/* </ListGroup.Item> */}
  {/* </ListGroup.Item> */}
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

))}

</>
   
  </div>
  )
}
export default History;
