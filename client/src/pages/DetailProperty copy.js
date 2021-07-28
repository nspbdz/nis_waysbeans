import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import { Row, Col } from "react-bootstrap";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { Card,Jumbotron,Row,Col,Button,Container } from "react-bootstrap";


const DetailProperty = ({ match }) => {
    
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
const pa =window.location.pathname
const splitval=pa.split("/detailProperty/")
const urlVal=splitval[1]
console.log(urlVal)



//   window.location.href


  return(
    <div>
    {data.filter(item => item.id ==urlVal).map(dataMatch => (
      

                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            
                        </Col>
                        <Col md="auto"></Col>
              <img src={dataMatch.img1}  alt="brand" />

                        <Col xs lg="4">
                            
                        </Col>
                        </Row>
                    


            

        
      
    ))}
  </div>
  )
}
export default DetailProperty;
