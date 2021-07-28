import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Row,Button, Col } from "react-bootstrap";
import AddOrder from "../components/form/AddOrder"
import HouseId from "../components/ProcuctId"
function DetailProduct(props) {
  
  const [showSignin, setshowSignin] = useState(false);
 
  return (
    <div>
    <Row> 
    <Col>
    <HouseId />
    <Row>
                        <Col sm></Col>
                        <Col sm></Col>
                           {/* {!state.isLogin ? */}
                    
                      <Col sm>
                        <>
                      <Button style={{width:"213px",marginTop:"20px",marginBottom:"20px"}}   onClick={() => setshowSignin(true)} className="justic=fy" variant="primary" type="submit">
                          Add to Cart
                      </Button>
                      {/* </Button> */}
                      <AddOrder 
                      show={showSignin}
                      handleClose={() => setshowSignin(false)}
                      />
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

export default DetailProduct;
