import { useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { FaBath,FaBed } from 'react-icons/fa';

import { useState, useEffect } from "react";
import { API } from "../config/api";

const ProductDetailItem = ({ match }) => {
  const params = useParams();
  localStorage.setItem("house_id", params.id)
  // var a =localStorage.getItem("house_id")
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const getProduct = async () => {
    const response = await API.get(`/product/${params.id}`);
    console.log(response);
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
    return () => {
      setData(null);
    };
  }, []);
console.log(data)

  if (loading) return <p>loading...</p>;
  return (
    
<>
                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                        </Col>
                        <Col md="auto" style={{ paddingBottom:"12px"}}>
             <img src={data.photo} style={{width:"1018px",height:"400.16px",paddingTop:"50px"}} alt="brand" />
                        <h1>{data.name}</h1>
                        <p className="text-center"> {data.description}</p>
                        <h4>Rp. {data.price}/Day</h4>

                        </Col>

                      <Col sm>
                      
                        </Col>

                        </Row> 

    
</>

  );
};

export default ProductDetailItem;
