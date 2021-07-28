import { useState,useContext } from "react";
import { Form, Button,Col,Row,ListGroup,Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import brand from "../../assets/images/brand.svg";

function DetailInvoice(props) {
  const [loading, setLoading] = useState(false);
  
  const { handleClose,handleOrder,dataSend, show ,id,value } = props;
  const router = useHistory();
  const contextValue = useContext(UserContext);
  const userId=contextValue[0].user.id;
  const pa =window.location.pathname
  const [data, setData] = useState([])
  const [dataStatus, setDataStatus] = useState('');
  
  // console.log(dataSend)

const item=dataSend.filter(items =>(items.id === id) )
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
 
  return (
<>
    
    </>  
  );
}

export default DetailInvoice;
