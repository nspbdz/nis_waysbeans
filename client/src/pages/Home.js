import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
import { FilterContext} from "../contexts/filterContext";
// // import Sidebar from "../components/Sidebar";
import Owner from "./Owner";
import TransactionList from "../components/TransactionList";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/userContext";

const Home = () => {
  const [state, dispatch] = useContext(UserContext);

  const [dataApi, setData] = useState(null);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const contextValue = useContext(FilterContext);
  console.log(contextValue)
  console.log(contextValue[0].data.amenities)
  const amenities= contextValue[0].data.amenities
  const typeRent= contextValue[0].data.typeRent
  const price= contextValue[0].data.price
  const bedroom= contextValue[0].data.bedroom
  const bathroom= contextValue[0].data.bathroom
  console.log(typeRent)
  console.log(amenities)
  console.log(price)
  console.log(bedroom)
  console.log(bathroom)

  // console.log(state)
  const { isLoading, data, error } = useQuery("product", async () => {
    const response = await API.get("/products");
    
      return response.data.data;
  });

    
    // console.log(dataApi)
    const [page, setPage] = useState(false)
    // console.log(dataTransaction)
    console.log(data)
    console.log(dataApi)

    return (
          <>
      <Row >
      {state.isLogin !==true  &&(
<>
        <Col  xs={4}  style={{marginRight:"50px"}}>
          {/* <Sidebar /> */}
          <Row>
            <Col sm="4"></Col>
            <Col sm="3"></Col>
            <Col sm="5">
             {/* <Button style={{width:"140px",backgroundColor:"#5A57AB"}}  onClick={getHouses => setPage(true)} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button> */}
            </Col>
        </Row>
        </Col>
        <Col >
          {page === true 
          ? 
          <CardList data={dataApi} isLoading={isLoading} error={error} />
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={data} isLoading={isLoading} error={error} />

      }
        </Col>
</>

      )}
      {state.isLogin==true && state.user.listasid==1 &&(
<TransactionList data={dataTransaction} isLoading={isLoading} error={error} />
      )}
        {state.isLogin==true && state.user.listasid==2  &&(
<>
        <Col  xs={4}  style={{marginRight:"50px"}}>
          {/* <Sidebar /> */}
          <Row>
            <Col sm="4"></Col>
            <Col sm="3"></Col>
            <Col sm="5">
             {/* <Button style={{width:"140px",backgroundColor:"#5A57AB"}}  onClick={getHouses => setPage(true)} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button> */}
            </Col>
        </Row>
        </Col>
        <Col >
          {page === true 
          ? 
          <CardList data={dataApi} isLoading={isLoading} error={error} />
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={data} isLoading={isLoading} error={error} />

        }
        </Col>
</>

      )}
      </Row>
    </>

    // )}

  );
};

export default Home;
