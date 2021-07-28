import {useContext} from 'react';

import {
  Button, Card, Col, Row
} from 'react-bootstrap';
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const {state, dispatch} = useContext(CartContext);
  const handleClick = (item, type) => {
    dispatch({
      type,
      data: item
    })
  };
  return (
    <div>
      {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && (
        <Row>
          {state.carts.map((item) => (
            <Col key={item.id}>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <div className="d-flex w-100 align-items-center">
                    <div className="flex-grow-1">

                    <Button variant="warning" className="mr-2" onClick={() => handleClick(item, "REMOVE_PRODUCT")}>
                      -
                    </Button>
                    <span className="mr-2" >{item.qty}</span>
                    <Button variant="secondary" onClick={() => handleClick(item, "ADD_PRODUCT")}>
                      +
                    </Button>
                    </div>
                    <Button variant="danger" onClick={() => handleClick(item, "REMOVE_CART")}>Remove</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default Cart
