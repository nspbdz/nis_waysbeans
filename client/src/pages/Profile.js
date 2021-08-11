import { useContext,useState,useEffect } from "react"
import {UserContext} from "../contexts/userContext";
import { Card,Jumbotron,Row,Col,Button,Form } from "react-bootstrap";
import { BsPeopleCircle,BsEnvelope,BsLock,BsFillHouseFill,BsGeoAlt } from 'react-icons/bs';
import { FaTransgender,FaPhone } from 'react-icons/fa';
import ModalChangePassword from '../components/ModalChangePassword'
import { API } from "../config/api";
import OrderList from "../components/OrderList";
import ProfileList from "../components/ProfileList";
import axios from 'axios';
import { useHistory,Router,Link } from "react-router-dom";

function Profile() {
  const router = useHistory();
  
  const {state} = useContext(UserContext);
  const contextValue = useContext(UserContext);
  const userlogin=contextValue[0].user.username
  const userid=contextValue[0].user.id
  const [loading, setLoading] = useState(true);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  
  const [dataUpdate, setDataUpdate] = useState([])
  const handleChange = (e) => {
    console.log(e.target.value)
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
  // const [dataUser, setDataUser] = useState(null);
  const [dataApi, setData] = useState(null);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [dataProfile, setDataProfile] = useState(null);
  var token= localStorage.getItem("token")

  const getTransactions = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:5000/api/v1/mytransaction",
      headers: {Authorization: "Bearer " +token, },
    })
      console.log(response);
      setDataTransaction(response.data.data.transactions);
      setDataProfile(response.data.data.users);
      setLoadingTransaction(false);
    };
  
    useEffect(() => {
      getTransactions();
      // return () => {
      //   setDataTransaction(null);
      // };
    }, []);
//  console.log(data)
 console.log(dataProfile)
 


  // if (loading) return <p>loading...</p>;
console.log(dataTransaction)

const handleUpdateProfile = async (e) => {
  e.preventDefault();
  console.log("clicked")
  
  // try {
    const formData = new FormData();
    // formData.set("status", "Pending");
    formData.append("imageFile", dataUpdate.imageFile, dataUpdate.imageFile.name);
    axios({
      method: "patch",
      url: "http://localhost:5000/api/v1/user",
      data: formData,
      headers: { "Content-Type": "multipart/form-data",Authorization: "Bearer " +token, },
    })
      .then(function (response) {
        //handle success
        alert("berhasil update foto")
        router.push("/");

        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    }
  


  return (
    <>
     <div>
     <Row >
    <Col >
      <>
        <ProfileList data={dataProfile} />
      <div style={{marginTop:"10px"}}>
        
     <Form  >
        <Form.Group>
          
          <Form.Control
            name="imageFile"
            type="file"
          onChange={handleChange}
            required
          />
        </Form.Group>
        <Button style={{width:"213px",height:"50px",backgroundColor:"#613D2B"}} onClick={handleUpdateProfile} >
          choose your photo
        </Button>
      </Form>
      </div>
      </>
        
    </Col>
    <Col xs={1}></Col>
  <Col xs={6}  >
    <>
    <h4 style={{paddingTop:"70px"}}>My Transaction</h4>

   <OrderList data={dataTransaction} loading={loading}  />
   </>
    </Col>

     </Row>
  </div>
    
    </>
  )
}

export default Profile;
