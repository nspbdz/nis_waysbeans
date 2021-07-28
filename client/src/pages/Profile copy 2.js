import { useContext, } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
import { Card,Jumbotron,Row,Col } from "react-bootstrap";

// import userData from '../data/User'

function Profile() {
  const {state} = useContext(UserContext);
  const contextValue = useContext(UserContext);
  console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.username
  console.log(userlogin);

  // <p className='h2'>{contextValue[0].user.name}</p>

  const priceToShow = userData.filter(item => ( item.username === userlogin ));
  console.log(priceToShow);
  console.log(userData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <>
 {priceToShow.map( item => {
      
    
      //  console.log(Fur)
        return <div>
           <p>{item.address}</p>
      
           <Jumbotron style={{marginBottom: "20px"}}>
       
       <Jumbotron className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
       <Row>
        <Col sm={6}>   
        <h1>Personal Info</h1>
        
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
      </p>
      </Col>
        <Col sm={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="{item.image}" />
          </Card>
      </Col>
      </Row>
   
   
    </Jumbotron>

    </Jumbotron>
            </div>
    })
}
      {/* <p className='h2'>{contextValue[0].user.name}</p>
      <p className='h2'>{contextValue[0].user.username}</p>
      <p className='h2'>{contextValue[0].user.password}</p> */}

      {/* <p className='h1'>{state.user.name}</p>
      <p className='h2'>{state.user.email}</p>
      <p className='h3'>{state.user.password}</p> */}
    </>
  )
}

export default Profile;
