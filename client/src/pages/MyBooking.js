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
import BookingList from "../components/BookingList";

const MyBooking = () => {
  var Gethouse_id =localStorage.getItem("house_id")
  const [loadingStatus, setLoadingStatus] = useState(false);

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
    const dataResponse=response.data.data
    const DataStatus=dataResponse.filter(item => ( item.status === "Waiting")).sort((a, b) => (b.id - a.id))
    
    console.log(DataStatus)
      
    return DataStatus[0];

  });
  // if (isLoading) return <p>...loading</p>;
  console.log(data)


  return(
  <>
  <BookingList data={data} isLoading={isLoading} error={error} />

  </>
    )
}
export default MyBooking;
