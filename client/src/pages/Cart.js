import {useContext,useRef,useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import {
  Button, Card, Col, Row
} from 'react-bootstrap';
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const [price1, setPrice1] = useState([])

const inputRef= useRef();
const myRefs= useRef([]);
  const {state, dispatch} = useContext(CartContext);
  const dataCart =state.carts
  console.log(dataCart)
  var productPriceData = [];
  var productStockData = [];
  // var productPricec = [];
  var productPricec ="" ;
  var productStock ="" ;

  {dataCart?.length > 0 &&
    dataCart?.map((itemss) => 
    {
      productPriceData = productPriceData.concat(itemss.price);
      productStockData = productStockData.concat(itemss.qty);
      console.log(productPriceData);
    }
    )
  }
  console.log(productPriceData);
  console.log(productStockData);
  
  {productPriceData?.length > 0 &&(
    productPricec=productPriceData.slice(0, productPriceData.length)
      
    )
  }
  {productStockData?.length > 0 &&(
    productStock=productStockData.slice(0, productStockData.length)
      
    )
  }
  const priceJoin =productPriceData.join();
  const priceProcess=priceJoin.replace(/,/g, '+')
  const stockJoin =productStockData.join();
  const stockProcess=stockJoin.replace(/,/g, '+')
  console.log(stockJoin)
  const stockProcess2 =eval(stockProcess)
  const priceProcess2 =eval(priceProcess)

const resultSubtotal=priceProcess2*stockProcess2
console.log(resultSubtotal)

  
  const handleClick = (item, type) => {
    console.log(item)
    dispatch({
      type,
      data: item,
    }) 
  
  };
  // var field = document.querySelector('div[id^=demo]').click;
  // console.log(document.querySelector('div[id^=demo]').click)
  // "td[id^=rowDate]"
  // var test = document.querySelectorAll('input[value]');
  console.log(state)
  console.log(dataCart)
  function handleCallDetails(id){
   console.log(id)

}

  return (
    <div>
      {state.carts.length < 1 && (<p className="h1">Your cart is empty</p>)}
      {state.carts.length > 0 && (
        <>
        {/* <div >
        <input ref={inputRef}  value="asda" />
      </div> */}
      
        <h4 style={{marginTop:"70px"}}>My Cart</h4>
        <p style={{marginTop:"24px"}}>Review Your Order</p>
        <Row>
          {state.carts.map((item,key) => (
            <>
            <Col key={item.id} md="8" >
          <hr style={{backgroundColor:"#613D2B"}}></hr>
             <Row >
              <Col md="2">    
              <img
                  variant="top"
                  src={item.photo}
                  height={80}
                  width={80}
                  style={{ objectFit: "cover" }}
                />
                      </Col>
              <Col md="4" style={{marginTop:"10px"}}>    
                <p> {item.name}</p>
              <Row>
                <Col md="2" >
                <p onClick={() => handleClick(item, "REMOVE_PRODUCT")} style={{fontSize:"16px"}}>-</p>
                </Col>
                <Col md="2" >       
                  <span >{item.qty}</span>
               </Col>
                <Col md="2" > 
                <p onClick={() => handleClick(item, "ADD_PRODUCT")} style={{fontSize:"16px"}}>+</p>
                </Col>
              </Row>
             </Col>
              <Col md="4">          </Col>
              <Col md="2" style={{marginTop:"10px"}}>
              <div   id={"demo"+item.id} value={item.qty*item.price}  >
             <p>  Rp.    {item.qty*item.price} </p>

              </div>
              <div style={{float:"right",paddingRight:"25px",marginTop:"15px"}}>
              <BsTrash />
              </div>
                   </Col>
             </Row>
                <hr style={{backgroundColor:"#613D2B"}}></hr>
            </Col>
            {/* </>
          ))} */}
          <Col md="4">
          <hr style={{backgroundColor:"#613D2B"}}></hr>
            <Row >
            
              <Col sm="4"  > 
              <p> Subtotal  </p>
              <p> Qty  </p>
              
              </Col>
              <Col sm="4" ></Col>
              <Col sm="4" >
              <p>Rp.{item.price} </p>
              
              <p style={{float:"right",paddingRight:"25px"}}>{item.qty}</p>  

              </Col>
            </Row>
                      
          <hr style={{backgroundColor:"#613D2B"}}></hr>
          
          </Col>
          </>
          ))}
        </Row>
        <Row>
          <Col sm="8"></Col>
          <Col md="4">
  <Row>
  
    <Col sm="4" > <p> Total </p></Col>
    <Col sm="4" ></Col>
    <Col sm="4" >
    Rp. {resultSubtotal} 

    </Col>
  </Row>

<Link to="/checkout" >
<Button   style={{float:"right",backgroundColor:"#613D2B"}}> Proceed to Checkout</Button>
</Link>
            

</Col>
        </Row>
        </>
        
      )}
    </div>
  )
}

export default Cart
