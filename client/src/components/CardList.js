
import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";

import not_found from "../assets/images/not_found.svg";
const CardList = ({ data, loading,isLoadingFilter  }) => {
  if (isLoadingFilter) return <p>...loading</p>;
  if (loading) return <p>...loading</p>;
  // console.log(data.length)
  return (

<Row>
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data?.length > 0 &&
        data?.map((item, index) => (
          <Col key={index}>
            <CardItem item={item} />
          </Col>
        ))}
    </Row>
  );
};

export default CardList;
