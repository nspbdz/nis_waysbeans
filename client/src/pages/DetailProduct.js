import { useState } from "react";
import { useParams } from "react-router-dom";

import { Row,Button, Col } from "react-bootstrap";
import AddOrder from "../components/form/AddOrder"
import {  useEffect, useContext } from "react";
import {CartContext} from "../contexts/cartContext"
import { API } from "../config/api";

import ProductDetailItem from "../components/ProductDetailItem"
function DetailProduct({match,props,handleAddProduct}) {
  
  const [showSignin, setshowSignin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState(null);
  const {state, dispatch} = useContext(CartContext);
  const params = useParams();

  
  console.log(state)

  const getProduct = async () => {
    const response = await API.get(`/product/${params.id}`);
    console.log(response);
    setData1(response.data.data);
    setLoading(false);
  };
   
  useEffect(() => {
    getProduct();
    return () => {
      setData1(null);
    };
  }, []);
  
  const addProduct = (item) => {
    console.log(item)
    dispatch({
      type: "ADD_PRODUCT",
      data: item,
     
    }) 
  }
console.log(data1)
  return (
    <div> 
    <Row> 
    <Col>
    <ProductDetailItem data={data1}  handleClick={addProduct} />
    <Row>
                        <Col sm></Col>
                        <Col sm></Col>
                           {/* {!state.isLogin ? */}
                    
                      <Col sm>
                        <>
                      {/* <Button style={{width:"213px",marginTop:"20px",marginBottom:"20px"}}   onClick={() => setshowSignin(true)} className="justic=fy" variant="primary" type="submit">
                          Add to Cart
                      </Button>
                    
                      <Button variant="warning" onClick={addProduct}>
                        Add to Cart
                      </Button> */}
                      {/* </Button> */}
                      {/* <AddOrder 
                      show={showSignin}
                      handleClose={() => setshowSignin(false)}
                      /> */}
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
