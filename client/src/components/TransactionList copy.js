
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
  if (isLoading) return <p>...loading</p>;
  
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  console.log(data)
  // console.log(data[0].user.fullname)

 const  handleClick =(id) =>{
  console.log(id)

  // setDataId(id)

  console.log(dataId)
  // setshowInvoice(true)
 }
 console.log(data)



//  http://localhost:5000/api/v1/transaction/1

const UpdateTrx = () => {
  fetch(`http://localhost:5000/api/v1/transaction/`, {
    method: 'PUT',
  })
    .then((res) => res.json() )
    .then((res) => {
     console.log(res)
     const stat=res.status
     if(stat=="success"){
      console.log("success")
      // setDataUser(res.data.myData);
      // setLoading(false);
      // alert("kamu berhasil membuat transaksi")
      // router.push(`/mybooking`);
     }
     console.log(res.status)
   }) 
    .catch((err) => console.log('error'))
}


  return (
    <>
  {/* <h3>Incoming Transaction</h3> */}
    <Row>
      <Table striped bordered hover >
  <thead>
    <tr>
    <th>No</th>
      <th>FullName</th>
      <th>Bukti Transfer</th>
      <th> Status Payment</th>
      <th>Action</th>
    </tr>
  </thead>
  
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data?.length > 0 &&
        data?.map((item, index) => (

  <tbody key={index}>
             
    <tr>
                <td value={item.id}> {item.id}</td>
                <td>{item.user.fullname}</td>
                {/* <td> {item.house.fullname}</td> */}
                <td> {item.attachment}</td>
                <td> {item.status}</td>
                {/* <td id={item.id} value={item.id} onClick={() => handleClick(item.id)}> 
                <BsSearch onClick={handleClick} 
                />
                </td> */}
                {item.status== "Waiting Approve" ?
                  <td  > 
                
                <Button onClick={() => handleClick(item.id)}>
                    Cancel
                  </Button>
                
                <Button onClick={() => handleClick(item.id)}>
                    Approve
                  </Button>
                </td>
                :null
                }
                 {item.status== "cancel" ?
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
    </tr>
   
  </tbody>
          
        ))}
        </Table>
    </Row>
    </>

  );
};

export default TransactionList;
