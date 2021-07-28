import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
import { FilterContext} from "../contexts/filterContext";
import Sidebar from "../components/Sidebar";
import Owner from "./Owner";
import TransactionList from "../components/TransactionList";

import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/userContext";

const Home = () => {
  const [state, dispatch] = useContext(UserContext);
  const [stateFilt, filterDispatch] = useContext(FilterContext);

  const [dataApi, setData] = useState(null);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const contextValue = useContext(FilterContext);
  // console.log(contextValue)
  // console.log(contextValue[0].data.amenities)
  const amenities= contextValue[0].data.amenities
  const typeRent= contextValue[0].data.typeRent
  const price= contextValue[0].data.price
  const bedroom= contextValue[0].data.bedroom
  const bathroom= contextValue[0].data.bathroom
  console.log(typeRent)
  console.log(state)
  // console.log(stateFilt.user.)

  
  const { isLoading, data, error } = useQuery("houses", async () => {
    // const response = await API.get("/houses");
      const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
    return response.data.data;
  });

  // const  {isLoadingFilter, errors } = useQuery("houses", async () => {

    const getHouses = async () => {
    if (isLoading) return <p>...loading</p>;

    const response = await API.get("/houses");

      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      console.log(response);
      setData(response.data.data);
      setLoadingFilter(false);
    };
  
    useEffect(() => {
      getHouses();
      return () => {
        setData(null);
      };
    }, []);

    const getTransactions = async () => {
      const response = await API.get("/transactions");
        console.log(response);
        setDataTransaction(response.data.data.transactions);
        setLoadingTransaction(false);
      };
    
      useEffect(() => {
      getTransactions();
       return () => {
       setDataTransaction(null);
        };
      }, []);
    console.log(dataApi)
    const [page, setPage] = useState(false)
    console.log(dataTransaction)

    return (
      
       
          <>
      <div> 
      <Row>
      {state.isLogin==true && state.user.listasid==1 &&(
<>
<TransactionList data={dataTransaction} isLoading={isLoading} error={error} />
{/* <TransactionList data={data} isLoading={isLoading} error={error} /> */}

      {/* <Owner /> */}
</>

      )}
        {state.isLogin==true && state.user.listasid==2  &&(
<>
        <Col xs={4}>
          <Sidebar />
          <Row>
             <Button  onClick={getHouses => setPage(true)} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
        </Row>
        </Col>
        <Col>
          {page === true 
          ? 
          <CardList data={data} isLoading={isLoading} error={error} />
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={dataApi} isLoading={isLoading} error={error} />

        }
        </Col>
</>

      )}
      </Row>
    </div>
    </>

    // )}

  );
};

export default Home;
