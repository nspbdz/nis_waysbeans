
import { useHistory,Router,Link } from "react-router-dom";
import { Form, Button,Col,Row,ListGroup,Card } from "react-bootstrap";
import { useState,useContext } from "react";
import brand from "../assets/images/brand.svg";
import { UserContext } from "../contexts/userContext";

function InvoiceItems({ item,id }) {
  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
  
  const router = useHistory();
  const [data, setData] = useState([])
  const contextValue = useContext(UserContext);
  const dataUser=contextValue[0];
  console.log(dataUser)

  item=item[0]
  console.log(item)
  console.log(item)

  var token= localStorage.getItem("token")
  const cancelStatus = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:5000/api/v1/updatetransacti/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        status: "Cancel"
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        // alert("kamu berhasil Update Status ")
        // router.push(`/mybooking`);
       }
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }
  const approveStatus = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:5000/api/v1/updatetransacti/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        status: "Approve"
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        // alert("kamu berhasil Update Status ")
        // router.push(`/mybooking`);
       }
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }
  
const vl={
  borderLeft: "3px solid blue",
height: "75px",
marginLeft:"5px"
}
const checkIns=item.checkin.split("T00:00:00.000Z")
const checkOuts=item.checkout.split("T00:00:00.000Z")

  return(
    <div>
      <>
<Row className="justify-content-md-center" style={{width:"750px"}}>
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
  <h4 style={{marginLeft:"30px",paddingTop:"20px"}} >{item.house.name}</h4>
<p style={{marginLeft:"30px",paddingTop:"20px"}}>{item.house.address}</p>
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
    <h6>Check-In</h6>

      <p>{checkIns} </p>
    {/* </br> */}
    <h6>Check-Out</h6>
    <p>{checkOuts} </p>
    
    </Col>
  
  </Row>
  </Col>
  <Col sm>
      <h6>Amenities</h6>
    <p>{item.house.amenities} </p>
    <h6>Type Of Rent</h6>
    <p>{item.house.typeRent} </p>
    </Col>
  <Col sm>
    
    <img style={{width:"138px",height:"138px",marginRight:"10px"}} src={item.attachment} />
  <p style={{marginRight:"10px"}} >Upload Payment Proof</p>
 
        
  </Col>
</Row>
<ListGroup.Item>
  
  {/* <ListGroup> */}
  <Row>
  <Col sm="4">
  <Row>
  <Col sm="3">
   
  <h6>No</h6>
    
  </Col>
  <Col sm="5"><h6>Full Name</h6></Col>
  <Col sm="4"><h6>Gender</h6></Col>
</Row>
  </Col>
  <Col sm="4"><h6>Phone/Email</h6></Col>
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
 <Col sm={4}>{dataUser.user.email} </Col>
  <Col sm={2}>
  <h6> Long Time Rent :</h6>
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
  <Col sm={2}> <h6>Total :</h6> </Col>
  <Col sm={2}>Rp. {item.total} </Col>
</Row>
</ListGroup.Item>

<ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={2}> </Col>
  <Col sm={3}>

  
  <Button     onClick={cancelStatus}  variant="danger" style={{width:"150px"}}>
    Cancel
  </Button>
     </Col>
     <Col sm={3}>

  
  <Button onClick={approveStatus}   variant="primary" style={{width:"150px"}}>
    Approve
  </Button>

     </Col>
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
  )
  
}

export default InvoiceItems;
