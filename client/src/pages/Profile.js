import { useContext,useState,useEffect } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
import { Card,Jumbotron,Row,Col,Button } from "react-bootstrap";
import { BsPeopleCircle,BsEnvelope,BsLock,BsFillHouseFill,BsGeoAlt } from 'react-icons/bs';
import { FaTransgender,FaPhone } from 'react-icons/fa';
import ModalChangePassword from '../components/ModalChangePassword'
// import userData from '../data/User'

function Profile() {
  const {state} = useContext(UserContext);
  const contextValue = useContext(UserContext);
  console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.username
  console.log(userlogin);
  const [loading, setLoading] = useState(true);


  const [dataUser, setDataUser] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var token= localStorage.getItem("token")

  
  const MakeTransaction = () => {
    fetch('http://localhost:5000/api/v1/user', {
      method: 'GET',
      headers: {
          'Authorization':`Bearer ${token}`
      },
     
    })
      .then((res) => res.json() )
      .then((res) => {
       console.log(res)
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        setDataUser(res.data.myData);
        setLoading(false);
        // alert("kamu berhasil membuat transaksi")
        // router.push(`/mybooking`);
       }
       console.log(res.status)
     }) 
      .catch((err) => console.log('error'))
  }


  useEffect(() => {
    MakeTransaction();
  }, []);
  console.log(dataUser)
  const item=dataUser
console.log(item)
  // console.log(dataUser.myData)
  // const item=dataUser.myData
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   MakeTransaction() 
  // }
  





  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  if (loading) return <p>loading...</p>;

  return (
    <>
     <div>
         
      
           <Jumbotron style={{marginBottom: "20px"}}>
       
       <Jumbotron className="col-lg-8 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center" style={{backgroundColor:"white"}}>
     <Row>
    <Col>
       <h6>{item.email}</h6>  
        <p> Email</p> 

      <h6>{item.fullname}</h6>  
        <p> Full Name</p> 
     
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2020/06/17/mark-zuckerberg-has-been-strongly-criticized-for-facebooks.jpg" /> 
      </Card>
    </Col>

    <Col>
    
    </Col>

     </Row>
    </Jumbotron>

    </Jumbotron>
            </div>
    

    
    </>
  )
}

export default Profile;
