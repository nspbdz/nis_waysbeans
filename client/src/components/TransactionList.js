
import { Col, Row,Table } from "react-bootstrap";
import { useState } from "react";
import TransactionItem from "./TransactionItem";

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

  setDataId(id)

  console.log(dataId)
  setshowInvoice(true)
 }
 console.log(data)

  return (
    <>
  <h3>Incoming Transaction</h3>
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
                <td id={item.id} value={item.id} onClick={() => handleClick(item.id)}> 
                <BsSearch onClick={handleClick} 
                />
                </td>
                <DetailInvoice 
                show={showInvoice} 
                id={dataId}
                dataSend={data}
                handleClose={() => setshowInvoice(false)}
                />
    </tr>
   
  </tbody>
          
        ))}
        </Table>
    </Row>
    </>

  );
};

export default TransactionList;
