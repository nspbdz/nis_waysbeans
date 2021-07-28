
import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";

import not_found from "../assets/images/not_found.svg";
import BookingItem from "./BookingItem";
const BookingList = ({ data, loading,isLoadingFilter  }) => {
  if (isLoadingFilter) return <p>...loading</p>;
  if (loading) return <p>...loading</p>;
  console.log(data)
const item=data
  
  return (
<Row> 
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
{item?  <BookingItem  item={item}/>:null}
      {/* {item?  */}
       
          {/* <Col>
            <BookingItem  item={item}/>
          </Col> */}
      {/* } */}
    </Row>
  );
};

export default BookingList;
