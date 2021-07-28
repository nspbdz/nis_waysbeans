import { useState,useContext } from "react";
import { Form, Button, Col,Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function AddOrder(props) {
  
  const { handleClose,handleOrder, show } = props;
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
var GetPrice =localStorage.getItem("price")
console.log(GetPrice)
  

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
      // name: "",
    checkin:"",
    checkout: "",
    user_id:'',
    houseId:'',
    total:'',
    totaltime:''
   
  });
  const handleChange = (event) => {
    const a=event.target.value
    console.log(formData)
    // setFormData(event.target.value)
    setFormData({
      ...formData, 
      [event.target.name]:event.target.value,
    });

  }
  const aa=String(formData.checkin)
  console.log(formData.checkin)
  console.log(formData.checkout)
  var d1 = new Date(formData.checkin);
  var d2 = new Date(formData.checkout);
  const checkinYear=d1.getUTCFullYear()
  const checkinMonth=d1.getUTCMonth()
  const checkinDay=d1.getUTCDate()
  const checkoutYear=d2.getUTCFullYear()
  const checkoutMonth=d2.getUTCMonth()
  const checkoutDay=d2.getUTCDate()
  
  console.log(checkinYear);
console.log(checkinMonth);
console.log(checkinDay);

console.log(checkoutYear);
console.log(checkoutMonth);
console.log(checkoutDay);

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
  var AllCompared=compareDay
  
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
const totalHari=compareYear+"Year  " +compareMonth +" Month " +compareDay +" Day"
// const totals=item.house.price*AllCompared
// const harga=formData.house.price
// const totals=harga*AllCompared
// console.log(totals)
console.log(AllCompared)

// console.log(harga)
// console.log(totals)
var token= localStorage.getItem("token")
console.log(token);

  const MakeTransaction = () => {
    fetch('http://localhost:5000/api/v1/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        // name: formData.name,
        checkin: formData.checkin,
        checkout: formData.checkout,
        user_id: userId,
        houseId: urlVal,
        status: "Waiting",
        total:GetPrice*AllCompared,
        totaltime:totalHari,
     
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       console.log(res)
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        alert("kamu berhasil membuat transaksi")
        router.push(`/mybooking`);
       }
       console.log(res.status)
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    MakeTransaction() 
  }

  const dateStyle={
    height: "50px",
    width: "450px",
    left: "33px",
    top: "188px",
    borderRadius: "5px",
    marginBottom:"20px"

  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
    <form  onSubmit={handleSubmit}>
      <h4 style={{textAlign:"center"}} >How Long You Will Stay</h4>
    <br></br>
    <h5>Check -In</h5>
    <input  style={dateStyle} type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
    <br></br>
    <h5>Check -Out</h5>
  
    <input style={dateStyle} type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
    <br></br>
    <Row>
      <Col sm="3" ></Col>
      <Col sm="4" >
      <Button  style={{ width:"213px"}}   className="justic=fy" variant="primary" type="submit">
                          Order
       </Button> 
      </Col>
      <Col sm="4" ></Col>
    </Row>
   
    {/* <button type="submit">click</button> */}
  </form>
  </Modal.Body>
    </Modal>
  );
}

export default AddOrder;
