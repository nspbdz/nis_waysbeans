import { ListGroup,Button,Col,Row } from "react-bootstrap";
import TypeRent from "./TypeRent"
import Date from "./Date"
import Bedroom from "./Bedroom"
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import Budget from "./Budget";
import {useState,useContext,useEffect} from "react"
import { FilterContext} from "../contexts/filterContext";

const Sidebar = (props) => {
  const [state,filterDispatch] = useContext(FilterContext)
// console.log(state);


  const [rent, setRent] = useState("day");
  const [bedroom, setBedroom] = useState(2);
  const [bathroom, setBathroom] = useState(1);
  const [amenities, setAmenities] = useState("Pet Allowed");
  const [budget, setBudget] = useState(1200000);

  const valrent = rent
  const valbedroom = bedroom
  const valbathroom = bathroom
  const valamenities = amenities
  const valbudget = budget

  console.log(valrent)
 
     
  useEffect(() => {
    filterDispatch({
          type: 'Filter',
          payload: {
            typeRent: rent,
            price:budget ,
            amenities:amenities ,
            bedroom:bedroom ,
            bathroom: bathroom,
          }
        })

  }, [rent,budget,amenities,bedroom,bathroom]);

let rentss=rent
  // console.log(rentss)   
  // console.log(rent)   
  // console.log(budget)   
  // console.log(bedroom)  
  // console.log(bathroom)  
  console.log(amenities)  
  
  return (
    <>
    
    <TypeRent  setRent={setRent} rent={rent}  />
    <Date />
    <Bedroom setBedroom={setBedroom} bedroom={bedroom}/>
    <Bathroom setBathroom={setBathroom} bathroom={bathroom}/>
    <Amenities setAmenities={setAmenities} amenities={amenities} />
    <Budget  setBudget={setBudget} budget={budget} />
    
      
    </>
   
  );
};

export default Sidebar;
