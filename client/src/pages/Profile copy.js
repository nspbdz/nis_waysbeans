import { useContext,useState } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
// import userData from '../data/User'

function Profile() {
  constructor(props) {
    super(props);
    this.state = {
      data:userData

    };
console.log(this.state.userData)
  const {state} = useContext(UserContext);
  const [userData] = useState();
  const contextValue = useContext(UserContext);
  console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.name
  console.log(userlogin);
  console.log(userData);
 
  // <p className='h2'>{contextValue[0].user.name}</p>

  // const priceToShow = state.userData.filter(item => ( item.price === this.state.price));

  return (
    <>

      <p className='h2'>{contextValue[0].user.name}</p>
      <p className='h2'>{contextValue[0].user.username}</p>
      <p className='h2'>{contextValue[0].user.password}</p>

      {/* <p className='h1'>{state.user.name}</p>
      <p className='h2'>{state.user.email}</p>
      <p className='h3'>{state.user.password}</p> */}
    </>
  )
}

export default Profile;
