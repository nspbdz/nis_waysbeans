import {Row,Form,Col,Button } from "react-bootstrap";
import {useCallback} from 'react';
import "../styles/customBtn.css";

function Budget({ budget, setBudget}) {
  

    const handleBudget = useCallback(event => {
      setBudget(event.target.value)
    }, [setBudget])
  

   

        return (
            <>
        <p className="h5 text-left font-weight-bold">Budget</p>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4 ">
                Less Than IDR.
                </Form.Label>
                <Col sm="8">
                <Form.Control value="1200000" style={{width:"237px"}} onChange={handleBudget} />
                </Col>
            </Form.Group>
            </Form>

            {/* <Row>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm>   
            <Button className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
            </Col>
        </Row> */}
           
            </>

        )
    
}
  
  export default Budget;
