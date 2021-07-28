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
import HistoryList from "../components/HistoryList";

const MyBookingHistory = () => {

  const router = useHistory();
  const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
  var transaction_id =localStorage.getItem("transaction_id")

  
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
  const dataResponse=response.data.data
  const DataStatus=dataResponse.filter(item => ( item.status === "Approve"))
  console.log(DataStatus)
  return DataStatus;
  });
  if (isLoading) return <p>...loading</p>;


  return(
    <div>
      <>
    <HistoryList data={data} isLoading={isLoading} error={error} />
</>
   
  </div>
  )
}
export default MyBookingHistory;
