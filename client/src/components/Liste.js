import React, { useState,Component } from "react";
import ReactDOM from "react-dom";
import data from "../data/fakeData";


// import "./styles.css";

class List extends Component{
  constructor(props) {
    super(props)
    this.state = {
      rent:"",
    bathroom: "",
    bedroom: "",
    amenities: "",
    price: "",
    
    
    data:data
        };
    const { value, setValue, changeRules } = this.props
    this.value = value
    this.setValue = setValue

    this.handleKeywordsChange = this.handleKeywordsChange.bind(this);
  }

  handleKeywordsChange(e) {
    
    const price = e.target.value;
    console.log(price);
    this.setState({ price: price });

    // console.log(1);
    // this.setState({
    //   value: e.target.value
    // });
}
render(){
  const rentToShow = this.state.data.filter(item => ( item.price === this.state.price));
  return (
    <div>
   <input type="text"  onChange={this.handleKeywordsChange} value={this.state.price} />

   {rentToShow.map(bed => (
     <p></p>
    //  <Card style={{ width: "18rem", marginBottom: "10px" }}>
    //   <Card.Img  variant="top" src={bed.image} height={200} style={{ objectFit: "cover" }}   />
    //   <Card.Body>
    //   <div class="card-img-overlay">
    //   <Card.Title style={{color:"black",textShadow:"2px, 2px"}}> {bed.amenities.map((amenity, index) => (
    //               <div className="room__amenity" key={index}>
    //                 {amenity}
    //               </div>
    //             ))}</Card.Title>
    //     </div>
    //     <Card.Title>Rp.{bed.price} / {bed.rent} </Card.Title>
    //     <Card.Text>{bed.bedroom} Beds,{bed.bedroom}bedroom,{bed.sqft} sqft</Card.Text>
    //     <Card.Text>{bed.location}</Card.Text>
    //   </Card.Body>
    // </Card>
        ))}
      
    </div>
  );
};
};



function Liste() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default Liste;