import {React} from "react"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { BsCalendar } from 'react-icons/bs';
import { setAuthToken } from "../config/api";

import {Dropdown} from "react-bootstrap"
import { useContext,useState } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
import { Card,Jumbotron,Row,Col,Button,DropdownButton,Image } from "react-bootstrap";
import { BsPeopleCircle,BsEnvelope,BsLock,BsFillHouseFill,BsGeoAlt } from 'react-icons/bs';
import { BiReceipt } from "react-icons/bi";
import { ImExit } from "react-icons/im";

import ModalChangePassword from '../components/ModalChangePassword'
// import userData from '../data/User'
import Profile from "../pages/Profile";

function Dropd(){
  const [state, dispatch] = useContext(UserContext);
const handleSignout = (e) => {
    dispatch({
      type: "LOGOUT",
    });
    setAuthToken();
  };
  const contextValue = useContext(UserContext);
  // console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.username
  // console.log(userlogin);
  // console.log(state);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // <p className='h2'>{contextValue[0].user.name}</p>

  const userFilter = userData.filter(item => ( item.username === userlogin ));
  // console.log(userFilter);
  // console.log(userData);
  
//   const [appUserConfig, setAppUserConfig] = useContext(UserContext);
//   const logout = () => {
//       setAppUserConfig({});
//   };

    return (
        <> 
<div>
 <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:"transparent",border:'none'}} id="dropdown-basic" >
 <Image style={{width:"50px"}} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />

  </Dropdown.Toggle>

  <Dropdown.Menu style={{width:"220px"}}>

    <Dropdown.Item >
    <Row>
        <Col sm="2"> <BsPeopleCircle style={{color:"blue"}} /> </Col>
        <Col sm="2">
    <Link to="/profile" style={{backgroundColor:"transparent"}} className="btn btn-light">profile</Link>
          
        </Col>
      </Row>
        </Dropdown.Item>
        <Dropdown.Item >
        <Row>
        <Col sm="2"> <BsCalendar style={{color:"blue"}} /> </Col>
        <Col sm="2">
    <Link to="/MyBooking" style={{backgroundColor:"transparent"}} className="btn btn-light">MyBooking</Link>
          
        </Col>
      </Row>
        </Dropdown.Item>
        
        <Dropdown.Item >
        <Row>
        <Col sm="2"> <BiReceipt style={{color:"blue"}} /> </Col>
        <Col sm="2">
    <Link to="/MyBookingHistory" style={{backgroundColor:"transparent"}} className="btn btn-light">MyBookingHistory</Link>
          
        </Col>
      </Row>
        </Dropdown.Item>
        {/* <Dropdown.Item >
    <Link to="/MyBookingPending" style={{backgroundColor:"transparent"}} className="btn btn-light">MyBookingPending</Link>
        </Dropdown.Item> */}
        
    <Dropdown.Divider />
    <Dropdown.Item >
    <Row>
        <Col sm="2"> <ImExit style={{color:"blue"}} /> </Col>
        <Col sm="2">
    <Link to="/" onClick={handleSignout} style={{backgroundColor:"transparent"}} className="btn btn-light">Logout</Link>
          
        </Col>
      </Row>
        </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
        </>
    )
}
export default Dropd;