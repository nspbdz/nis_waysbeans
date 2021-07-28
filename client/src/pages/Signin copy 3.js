import React from 'react';
import myUser from './User'
import { users } from '../data/User';
// import './App.css';


class Siginin extends React.Component{

constructor(){


super()
this.state={userName:"",password:"",message:false} //myUser:[]
this.eventHandler=this.eventHandler.bind(this)
this.postDetails=this.postDetails.bind(this)
}

eventHandler(event){

const {name,value}=event.target



this.setState({[name]:value})


}

postDetails() {
  const isUserValid = users.some(user => {
      const username = this.state.userName;
      const password = this.state.password;
      return user.name === username && user.password === password;
  });
  this.setState({ message: isUserValid });
};


render(){
return(
  <div className="main-div">
    <h1>{this.state.message===true?"Success":"Try again"}</h1>
    <form>
     
      <input type="text" placeholder="enter name" name="userName"  onChange={this.eventHandler} />
      <br />
      <br />
      <input type="password" placeholder="enter password" name="password"  onChange={this.eventHandler} />
      <br />
      <br/>
      <button value="submit" onClick={this.postDetails}>Submit</button>

    </form>
  
   
  </div>



)
}
}

export default Siginin;