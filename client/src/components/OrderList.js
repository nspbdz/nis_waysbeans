
import { Col, Row } from "react-bootstrap";
import OrderItem from "./OrderItem";

import not_found from "../assets/images/not_found.svg";
const OrderList = ({ data, loading,  }) => {
  // if (loading) return <p>...loading</p>;
  // console.log(data)
  return (

<Row>
  
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data?.length > 0 &&
        data?.map((item, index) => (
          <>
            <OrderItem item={item} />
            </>
        ))}
    </Row>
  );
};

export default OrderList;
