
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";

function OrderItem({ item }) {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    // console.log(id);
    router.push(`product/${id}`);
  };
  console.log(item)
  return (
    <>
              <Col  key={item.id} id={item.id} >
                <Card>
                  <Row>
                    <Col sm="4">
                <Card>

                  <Card.Img  variant="top" src={item.photo} height={200} style={{ objectFit: "cover" }}   />
                </Card>

                    </Col>
                    <Col sm="4">
                    <Card>
                  <Card.Img  variant="top" src={item.photo} height={200} style={{ objectFit: "cover" }}   />
                  </Card>
                    </Col>
                    <Col sm="4">
                      <p>ansdas</p>
                    </Col>
                  </Row>
                </Card>
            {/* <Row>
            <Col sm="5"> 
            <Card>
            <Row>
              <Col sm="5">
              <img  variant="top" src={item.photo} width="120" height="80"   />
              </Col>
              </Row>
            <Card  onClick={() => handlePushToDetail(item.id)} data-div_id={item.id}  style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Body>
                    <Card.Title>kopi  {item.name} </Card.Title>

                    <Card.Title>price {item.price} </Card.Title>
                    <Card.Text>stok {item.stock}</Card.Text>
                  </Card.Body>
                </Card>
            </Card>

                </Col>
              </Row>       
              <img  variant="top" src={item.photo} width="120" height="80"   /> */}

                    
                
        </Col>
    </Row>
    </>

  )
  
}

export default OrderItem;
