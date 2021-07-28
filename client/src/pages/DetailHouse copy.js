import { useParams } from "react-router-dom";

import { Row, Col,Button } from "react-bootstrap";
import { FaBath,FaBed } from 'react-icons/fa';

import { useState, useEffect } from "react";
import { API } from "../config/api";

const DetailHouse = ({ match }) => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getHouse = async () => {
    const response = await API.get(`/house/${params.id}`);
    // console.log(response);
    // console.log(response.data.data);
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getHouse();
    return () => {
      setData(null);
    };
  }, []);

  if (loading) return <p>loading...</p>;
  return (
    
<>
                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            
                        </Col>
                        <Col md="auto" style={{ paddingBottom:"12px"}}>
                            
              <img src={data.image} style={{width:"1018px",height:"400.16px",paddingTop:"50px"}} alt="brand" />
                       
                        <Row style={{paddingBottom:"40px"}}>

                        <Col sm="4">
              <img src={data.image} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>
                        <Col sm="4">
              <img src={data.image} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>
                        <Col sm="4">
              <img src={data.image} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>


                        </Row>

                        <h1>{data.name}</h1>

                        <Row>
                            <Col sm="4">
                        <h4>Rp. {data.price}/Year</h4>
                        
                        <p>{data.address}</p>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">
                                <Row>
                                    <Col sm="4">
                                    
                            <p>Bedroom</p>
                            <p> {data.bedroom} <FaBed/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Bathroom</p>
                            <p> {data.bathroom} <FaBath/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Area</p>
                            <p> {data.area} Ft </p>
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

                        <h4 className="text-center"> {data.description}</h4>
                        <Row>
                        <Col sm></Col>
                        <Col sm></Col>
                           {/* {!state.isLogin ? */}
                    
                      <Col sm>
                        <Button  style={{width:"213px",marginBlockEnd:"20px"}}>Book Now</Button>
                        </Col>

                        </Row> 

    
</>

  
    )
  //   <Row>
  //     <Col xs={6}>
  //       <img src={data.image} alt="product" className="img-fluid" />
  //     </Col>
  //     <Col>
  //       <Row>
  //         <p>{data.name}</p>
  //       </Row>
  //       <Row>
  //         <p>price: </p>
  //         <p>{data.price}</p>
  //       </Row>
  //       <Row>
  //         <p>description: </p>
  //         <br />
  //         <p>{data.description}</p>
  //       </Row>
  //     </Col>
  //   </Row>
  // );
};

export default DetailHouse;
