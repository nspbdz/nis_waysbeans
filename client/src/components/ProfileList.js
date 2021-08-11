
import { Col, Row } from "react-bootstrap";
import OrderItem from "./OrderItem";

import not_found from "../assets/images/not_found.svg";
const ProfileList = ({ data, loading,  }) => {
  if (loading) return <p>...loading</p>;
  const item=data
  console.log(data)
  return (
    <Row>
      {data?.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
{item ? 

          <>
    <Col xs={8}>
          <div>
            <h4 style={{paddingTop:"70px"}}>My Profile</h4>
            {item.image? <img src={item.image} width="300" height="280"/> :null}
    {/* <img  width="300" height="280" src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2020/06/17/mark-zuckerberg-has-been-strongly-criticized-for-facebooks.jpg" />  */}

    </div>
    </Col>
    <Col xs={4}> 
    <br></br>
    <br></br> 
    <h5 style={{paddingTop:"70px"}}> Full Name   </h5>
    <p>   {item.fullname}    </p>
    <h5> Email </h5>
    <p>   {item.email}    </p>
     </Col>

    </>

  :null}
        
    </Row>

  //   <Row>
  //   <Col xs={8}>
  //   <div>
  //   <img  width="250" src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2020/06/17/mark-zuckerberg-has-been-strongly-criticized-for-facebooks.jpg" /> 

  //   </div>
  //   </Col>
  //   <Col xs={4}>xs=6</Col>
  // </Row>
  );
};

export default ProfileList;
