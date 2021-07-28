
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card,Form, Button,ListGroup } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import brand from "../assets/images/brand.svg";
import { UserContext } from "../contexts/userContext";

function AdminHistoryItem({ item }) {
  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })

  const router = useHistory();
  const [dataUpdate, setDataUpdate] = useState([])
  const handleChange = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
  const contextValue = useContext(UserContext);
  
  const dataUser=contextValue[0];
  console.log(item)
  var d1 = new Date(item.checkin);
var d2 = new Date(item.checkout);
const checkinYear=d1.getUTCFullYear()
const checkinMonth=d1.getUTCMonth()
const checkinDay=d1.getUTCDate()
const checkoutYear=d2.getUTCFullYear()
const checkoutMonth=d2.getUTCMonth()
const checkoutDay=d2.getUTCDate()

const compareYear=checkoutYear-checkinYear
const compareMonth=checkoutMonth-checkinMonth
const compareDay=checkoutDay-checkinDay
var AllCompared=0;

if(compareDay ==0){
  var AllCompared=AllCompared
}
else if(compareDay >0){
  console.log("day")
  console.log(compareDay)
  // var AllCompared=compMonth+compareDay
  var AllCompared=AllCompared+compareDay
  
  if(compareMonth >0){
    var compMonth=compareMonth*30
    console.log(compMonth)
    var AllCompared=compMonth+compareDay

  }
  if(compareYear >0){
    var compYear=compareYear*365
    var AllCompared=compYear+compareDay
    console.log(AllCompared)
  }
}
const totals=compareYear+"Year  " +compareMonth +" Month " +compareDay +" Day"
console.log(totals)
 
const handleSubmit = async (e) => {
  e.preventDefault();
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
    // let res = await fetch(`http://localhost:5000/api/v1/updatetransaction/150`, {
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
  
  
const vl={
  borderLeft: "3px solid blue",
height: "75px",
marginLeft:"5px"
}
const checkIns=item.checkin.split("T00:00:00.000Z")
const checkOuts=item.checkout.split("T00:00:00.000Z")

  return (
    <>
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
  
       </>
       

  )
  
}

export default AdminHistoryItem;
