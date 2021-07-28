
import { useHistory,Router,Link } from "react-router-dom";
import { Row,Col,Card, Button } from "react-bootstrap";

function CardItem({ item }) {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    // console.log(id);
    router.push(`product/${id}`);
  };
  // console.log(item)
  // console.log(item.price)
  // console.log(item.image)
  const FurnishedValuex=item.Furnished
  const PetValuex=item.PetAllowed
  const ShareValuex=item.SharedCommodities
  // console.log(item.furnished)
  var prices=item.price
  var rentts=item.typeRent
  if(rentts=="day"){
  // console.log("ini tahun")
    var prices=Math.ceil(prices/365)
  }else 
  if(rentts=="month"){
    // console.log("ini tahun")
      var prices=Math.ceil(prices/30)
    }
  // console.log(prices)
  // console.log(rentts)

  // if()
  
  return (
    <>
    <Row>
              <Col  key={item.id} id={item.id} >

                      <Card  onClick={() => handlePushToDetail(item.id)} data-div_id={item.id}  style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img  variant="top" src={item.photo} height={200} style={{ objectFit: "cover" }}   />
                  <Card.Body>
                  <div class="card-img-overlay">
                  <Card.Title style={{backgroundColor:"white",width:"100px" }}>
                              <div className="room__amenity" >
                                {/* <p style={{fontSize:"14px",backgroundColor:"white",textAlign:"center"}}>{item.amenities.replace(/,/g, " ")}</p> */}
                              </div>
                            </Card.Title>
                    </div>
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
