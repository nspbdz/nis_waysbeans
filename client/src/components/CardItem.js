
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";

function CardItem({ item }) {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    // console.log(id);
    router.push(`product/${id}`);
  };
  
  return (
    <>
    <Row>
              <Col  key={item.id} id={item.id} >

                      <Card  onClick={() => handlePushToDetail(item.id)} data-div_id={item.id}  style={{ width: "15rem", marginBottom: "10px" }}>
                  <Card.Img  variant="top" src={item.photo} width={241} height={321} style={{ objectFit: "cover" }}   />
                  <Card.Body style={{backgroundColor:"#F6E6DA"}}>
                
                    <Card.Title>kopi  {item.name} </Card.Title>

                    <Card.Title>price {item.price} </Card.Title>
                    <Card.Text>stok {item.stock}</Card.Text>
                  </Card.Body>
                </Card>
                
        </Col>
    </Row>
    </>

  )
  
}

export default CardItem;
