import { useParams } from "react-router-dom";

import { Row, Col,Button } from "react-bootstrap";
import { FaBath,FaBed } from 'react-icons/fa';
import ModalOrder from "../components/ModalOrder"; 
// import Order from "../components/form/Order"; 

import { useState, useEffect } from "react";
import { API } from "../config/api";

const House = ({ match }) => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOrder, setshowOrder] = useState(false);
  
  const getHouse = async () => {
    const response = await API.get(`/house/${params.id}`);
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getHouse();
    return () => {
      setData(null);
    };
  }, []);

  // if (loading) return <p>loading...</p>;
  console.log(data)

  const handleAddProduct = async (data, config) => {
   await API.post("/transaction", data, config);
    // refetch();
    console.log(data)
    console.log(config)
  };


  return (
    
<>
                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                        </Col>
                        <Col md="auto" style={{ paddingBottom:"12px"}}>
                        <Row style={{paddingBottom:"40px"}}>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                        </Row>
                        {/* <h1>{data.name}</h1> */}
                        <Row>
                            <Col sm="4">
                        {/* <h4>Rp. {data.price}/Year</h4> */}
                        {/* <p>{data.address}</p> */}
                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">
                                <Row>
                                    <Col sm="4">
                                    
                            <p>Bedroom</p>
                            {/* <p> {data.bedroom} <FaBed/> </p> */}
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Bathroom</p>
                            {/* <p> {data.bathroom} <FaBath/> </p> */}
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Area</p>
                            {/* <p> {data.area} Ft </p> */}
                                    </Col>
                                    </Row>
                               
                            
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col sm="4">
                        <h4>Description</h4>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">

                            </Col>
                            
                            
                        </Row>
                        

                        </Col>

                       
                        <Col xs lg="4">
                            
                        </Col>
                        </Row>

                      
    
</>

  
    )
  
};

export default House;
