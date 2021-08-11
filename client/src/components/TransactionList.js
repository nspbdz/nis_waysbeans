
import { Button, Col, Row,Table } from "react-bootstrap";
import { useState } from "react";
import TransactionItem from "./TransactionItem";
import { BiCheckCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import not_found from "../assets/images/not_found.svg";
import DetailInvoice from "./form/DetailInvoice";

const TransactionList = ({ data, isLoading, error,isLoadingFilter, errors }) => {
  const [showInvoice, setshowInvoice] = useState(false);
  const [dataId, setDataId] = useState();
  const [dataApi, setDataApi] = useState([])

var token= localStorage.getItem("token")

  if (isLoading) return <p>...loading</p>;
  
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  console.log(data)
  // console.log(data[0].user.fullname)

 const  handleClick =(id) =>{
  console.log(id)
  setDataId(id)
  console.log(dataId)
  // setshowInvoice(true)
 }
//  const item=data.filter(items =>(items.id === id) )
 console.log(data)
 const approveStatus = (id) => {
  // e.preventDefault()
  
  fetch(`http://localhost:5000/api/v1/transaction/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
    body: JSON.stringify({
      status: "On The Way"
    }),
  })
    .then((res) => res.json() )
    .then((res) => { 
     const stat=res.status
     if(stat=="success"){
      console.log("success")
      alert("kamu berhasil me Approve status  ")
      // router.push(`/mybooking`);
     }
   }) 
    .then((result) => setDataApi(result.rows))
    
    .catch((err) => console.log('error'))
}
const CancelStatus = (id) => {
  // e.preventDefault()
  
  fetch(`http://localhost:5000/api/v1/transaction/${id}`, {
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
      alert("kamu berhasil mencancel status  ")
      // router.push(`/mybooking`);
     }
   }) 
    .then((result) => setDataApi(result.rows))
    
    .catch((err) => console.log('error'))
}

 console.log(data)

  return (
    <>
  <h3>Income Transaction</h3>
    <Row>

      <Table striped bordered hover >
  <thead style={{backgroundColor:"#E5E5E5"}}>
    <tr>
    <th>No</th>
      <th>Name</th>
      <th>Address</th>
      <th>Post Code</th>
      <th>Product Order</th>
      <th> Status Payment</th>
      <th style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data?.length > 0 &&
        data?.map((item, index) => (

          <tbody style={{backgroundColor:"#FFFFFF"}} key={index}>
                    
            <tr>
                  <td value={item.id}> {item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.postCode}</td>
                  <td> kopi {item.order.name}</td>
                  <td> {item.status}</td>
                {/* <td id={item.id} value={item.id} onClick={() => handleClick(item.id)}> 
                <BsSearch onClick={handleClick} 
                />
                </td> */}
                {item.status== "Waiting Approve" ?
                  <td  > 
                <Row>
                  <Col sm="6"> <Button variant="danger" onClick={() => CancelStatus(item.id)}>
                    Cancel
                  </Button></Col>
                  <Col sm="5">  <Button  variant="success" onClick={() => approveStatus(item.id)}>
                    Approve
                  </Button></Col>
                  <Col sm="1"></Col>
                </Row>
                
                
              
                </td>
                :null
                }
                 {item.status== "Cancel" ?
                  <td  > 
                
               <ImCross />
                </td>
                :null
                }
                  {item.status== "success" ?
                  <td  > 
                <BiCheckCircle />
              
                </td>
                :null
                }
                  {item.status== "On The Way" ?
                  <td  > 
                
                <BiCheckCircle />
                
                </td>
                :null
                }
                 {item.status== "Completed" ?
                  <td  > 
                  <Col sm="5">  <Button  variant="success" >
                    Completed
                  </Button></Col>
                
                </td>
                :null
                }
                
    </tr>
   
  </tbody>
          
        ))}
        </Table>
    </Row>
    </>

  );
};

export default TransactionList;
