import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Row,Button, Col } from "react-bootstrap";
import AddPropertyForm from "../components/form/AddPropertyForm";
import HouseId from "../components/ProcuctId"
function AddProperty(props) {
  
  const [showSignin, setshowSignin] = useState(false);
 
  return (
    <div>
    <Row>
    <Col>
    <HouseId />
    <Row>
                    
                      <Col >
                        <>
                      <AddPropertyForm />
                      <br></br>
                      <br></br>

                      <Row>
                        <Col sm="5"></Col>
                        <Col sm="2">
                        {/* <Button  size="lg" variant="primary" type="submit"> */}
                      
                        </Col>
                       
                        <Col sm="5">
                     
                        </Col>
                      </Row>
                      {/* </Button> */}
                      </>
                        </Col>

                        </Row> 

    
    </Col>
    {/* <Col>
    <Button  onClick={() => setshowSignin(true)} className="justic=fy" variant="primary" type="submit">
            Apply
        </Button>
        <AddOrder 
        show={showSignin}
        handleClose={() => setshowSignin(false)}
        />
    </Col> */}
  </Row>
</div>
  );
}

export default AddProperty;
