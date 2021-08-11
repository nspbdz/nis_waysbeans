import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
// // import Sidebar from "../components/Sidebar";
import Owner from "./Owner";
import TransactionList from "../components/TransactionList";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/userContext";
import Jumbotron from "../assets/images/Jumbotron.svg";
import icon from "../assets/images/Icon.svg";


const Home = () => {
  const [state, dispatch] = useContext(UserContext);

  const [dataApi, setData] = useState(null);
  const [dataApid, setDatad] = useState([]);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  console.log(dataApid)
  const { isLoading, data, error } = useQuery("product", async () => {
    const response = await API.get("/products");
    
      return response.data.data;
  });

    
    // console.log(dataApi)
    const [page, setPage] = useState(false)
    // console.log(dataTransaction)
    console.log(data)
    const getTransactions = async () => {
      const response = await API.get("/transactions");
        console.log(response);
        setDataTransaction(response.data.data.transactions);
        // setDataTransaction(response.data.data.transactions);
        setLoadingTransaction(false);
      };
    
      useEffect(() => {
        getTransactions();
        return () => {
          setDataTransaction(null);
        };
      }, []);
   console.log(data)
   console.log(dataTransaction)
   
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
        <img src={Jumbotron} />
        <CardList data={data} isLoading={isLoading} error={error} />
        </Col>
</>

      )}
      {state.isLogin==true && state.user.listasid==1 &&(
<TransactionList data={dataTransaction} isLoading={isLoading} error={error} />
      )}
        {state.isLogin==true && state.user.listasid==2  &&(
<>
        <Col>
        <img src={Jumbotron} />
        <CardList data={data} isLoading={isLoading} error={error} />

        </Col>
        {/* <Col > */}
      
        {/* <CardList data={data} isLoading={isLoading} error={error} /> */}

        
        {/* </Col> */}
</>

      )}
      </Row>
    </>

    // )}

  );
};

export default Home;
