import { useParams } from "react-router-dom";

import { Row, Col,Button } from "react-bootstrap";
import { FaBath,FaBed } from 'react-icons/fa';

import { useState, useEffect } from "react";
import { API } from "../config/api";

const ProductDetailItem = ({ data,handleClick }) => {
  const [loading, setLoading] = useState(true);
 
console.log(data)

  // if (loading) return <p>loading...</p>;
  return (
 <>
    {data?  
    <>
             <Row className="justify-content-md-center">
                         <Col xs lg="4">
                         </Col>
                         <Col md="auto" style={{ paddingBottom:"12px"}}>
              <img src={data.photo} style={{width:"150px",paddingTop:"50px"}} alt="brand" />
                         <h1>{data.name}</h1>
                         <p className="text-center"> {data.description}</p>
                         <h4>Rp. {data.price}/Day</h4>

                         </Col>

                       <Col sm>
          <Button variant="warning" data={data} onClick={() => handleClick(data)}>

                         Add to Cart
                       </Button>
                    
                         </Col>

                         </Row> 


    </>
      :
      <p>data kosong</p>
      }
 </>
// {/* <>

//                         <Row className="justify-content-md-center">
//                         <Col xs lg="4">
//                         </Col>
//                         <Col md="auto" style={{ paddingBottom:"12px"}}>
//              <img src={data.photo} style={{width:"1018px",height:"400.16px",paddingTop:"50px"}} alt="brand" />
//                         <h1>{data.name}</h1>
//                         <p className="text-center"> {data.description}</p>
//                         <h4>Rp. {data.price}/Day</h4>

//                         </Col>

//                       <Col sm>
//                       <Button variant="warning" onClick={ handleClick(data)}>
//                         Add to Cart
//                       </Button>
                    
//                         </Col>

//                         </Row> 

    
// </> */}

  );
};

export default ProductDetailItem;
