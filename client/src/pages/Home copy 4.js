import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
import { FilterContext} from "../contexts/filterContext";
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";

const Home = () => {
  const [dataApi, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const contextValue = useContext(FilterContext);
  // console.log(contextValue)
  // console.log(contextValue[0].data.amenities)
  const amenities= contextValue[0].data.amenities
  const typeRent= contextValue[0].data.typeRent
  const price= contextValue[0].data.price
  const bedroom= contextValue[0].data.bedroom
  const bathroom= contextValue[0].data.bathroom
  console.log(typeRent)

  const { isLoading, data, error } = useQuery("houses", async () => {
    const response = await API.get("/houses");
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
    return response.data.data;
  });
  console.log(data);
  const [filters, setFilter] = useState(false);

    const getProduct = async () => {
      // const response = await API.get(`/houses`);
      const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      console.log(response);
      console.log(dataApi);
      setData(response.data.data);
      setLoading(false);
    };
    const [page, setPage] = useState(true)
    console.log(loading)
    return (
    <div>   
      <Row>
        <Col xs={4}>
          <Sidebar />
          {/* <p></p> */}
          <Row>
            {/* <Button  onClick={() => setPage("about")} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
             */}
             <Button  onClick={getProduct => setFilter(true)} isLoading={isLoading} error={error} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
        </Row>
        </Col>
        <Col>
          {filters === true ?
          <>
          {/* if (loading) return <p>loading...</p>; */}

          <CardList data={dataApi} isLoading={isLoading} error={error} />
          </>
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={data} isLoading={isLoading} error={error} />

        }
        </Col>
      </Row>
    </div>
  );
};

export default Home;
