
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";
import {Table} from "react-bootstrap"

function TransactionItem({ item,data }) {
  const router = useHistory();
console.log(item)
console.log(data)
  return (
    <>
    <Row>
              <Col >

                     
            <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td> {item.id}</td>
                <td> {item.name}</td>
                <td> {item.status}</td>
          </tr>
   
          </tbody>
            </Table>
    
        </Col>
    </Row>
    </>

  )
  
}

export default TransactionItem;
