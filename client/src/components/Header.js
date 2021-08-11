import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserContext } from "../contexts/userContext";
import {Row,Col,Badge, Button,  FormControl,  InputGroup,  Form,  Navbar,  Nav,} from "react-bootstrap";
import {CartContext} from "../contexts/cartContext"
import ModalSignin from "./ModalSignin"; 
import ModalSignup from "./ModalSignup"; 
import icon from "../assets/images/Icon.svg";
import shopcart from "../assets/images/shopcart.svg";
import Dropd from "./Dropd";
import DropAdmin from "./DropAdmin";
import "../styles/customStyle.css";
import { setAuthToken } from "../config/api";
const Header = () => {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useContext(UserContext);

  // const { state, dispatch } = useContext(UserContext);
  const [showSignin, setshowSignin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const {state: cartState} = useContext(CartContext);
  console.log("user context state", state)
  console.log("cart context state", cartState)
console.log(state);
  useEffect(() => {
    if (!state.isLogin) {
      setshowSignin(true);
    }
    return () => {
      setshowSignin(false);
      setshowSignup(false);
    };
  }, [state]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSignout = (e) => {
    dispatch({
      type: "LOGOUT",
    });
    setAuthToken();
  };
// console.log(state.user.listasid)
  return (
    <Navbar expand="lg">
    
      <Link to="/" className="navbar-brand">
        <img src={icon} alt="brand" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
      
        {state.isLogin==true && state.user.listasid==1 &&(

          <>

           <Row>
             <Col sm="2" style={{paddingRight:"100px"}}>
            <DropAdmin />
             </Col>
             <Col sm="5"></Col>
             <Col sm="5"></Col>

           </Row>
            
          
          </>
        )}
         {state.isLogin==true && state.user.listasid==2 &&(

          <>
            <Row>
             <Col sm="2" style={{paddingRight:"100px"}}>
           
            <Link to="/cart" >  
            <Badge style={{marginRight:"10px"}} className="bg-secondary text-white">   {cartState.carts.length}</Badge>
            <img  src={shopcart} style={{width:"30px", height:"30px"}} /> {' '}
            {/* <img src={shopcart} style={{width:"30px", height:"30px"}} /> {' '}{cartState.carts.length} */}

            </Link>
            </Col>
            <Col sm="2">
             <Dropd />
             </Col>
             <Col sm="3"></Col>
             <Col sm="5"></Col>

           </Row>
          {/* <p>user</p> */}
            {/* <p className="nav-link">{state.user.fullname}</p>  */}
            
         
          </>
          )}
       {!state.isLogin && ( 
          <>
            <Button className="mr-3 my-2" onClick={() => setshowSignup(true)} variant="light">
              Register
            </Button>
            <Button className="my-2" onClick={() => setshowSignin(true)} style={{backgroundColor:"#613D2B"}}>
              Login
            </Button>
            <ModalSignin
              show={showSignin}
              handleClose={() => setshowSignin(false)}
              handleSignin={dispatch}
            />
            <ModalSignup
              show={showSignup}
              handleClose={() => setshowSignup(false)}
            />
          </>
         )}
      </Navbar.Collapse>
    </Navbar>
  );
};

// class Header extends Component {
//   constructor(props) {
//     super();
//     this.title = "Dumbways Batch 24"
//   }

//   render() {
//     return (
//       <header className="header">
//         <h1>{this.title}</h1>
//       </header>
//     )
//   }
// }

export default Header;
