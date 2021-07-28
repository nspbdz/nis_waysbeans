import { InputGroup,FormControl } from "react-bootstrap";
import {useState,useRef,useEffect} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'
import  "./customBtn.css"
import "../styles/customBtn.css";

function TypeRent({ rent, setRent}) {
  const [clicked, setClicked] = useState();
  const elemRef = useRef(null);
  const [colors, setColors] = useState({
    day:"day",
    month:"",
    year:"",
  });
  
const handleDay  = (e) => {
setColors({
  day:"day",
  month:"",
  year:"",
})
}
const handleMonth  = (e) => {
  setColors({
    day:"",
    month:"month",
    year:"",
  })
  }
  const handleYear  = (e) => {
    setColors({
      day:"",
      month:"",
      year:"year",
    })
    }

    const handleDuratuionChange = useCallback(event => {
      // const targets=event.target.value
      setRent(event.target.value)
      setClicked(event.target.value)
    }, [setRent])
  
    let btn_day = colors.day ? "blueButton" : "whiteButton";
    let btn_month = colors.month ? "blueButton" : "whiteButton";
    let btn_year = colors.year ? "blueButton" : "whiteButton";
console.log(btn_day)
console.log(colors.day)
console.log(colors.month)
        return (
            <>
        <p className="h5 text-left font-weight-bold">Type Of Rent</p>

        
        <form >
            <label ref={elemRef} class={btn_day} id="day" onClick={handleDay} name="day" value="day"  style={{borderRadius: "8px", textAlign:"center", border:"1px solid #CCC",width:"80px",margin:"15px",height:"30px"}}>
            day
              <input      
              style={{display:"none"}}
              // class="activee"
                value="day"
                name="day"
                // checked={rent === rento ? true : false}

                // checked={rento==rent}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label ref={elemRef} class={btn_month} id="month" onClick={handleMonth} name="month" value="month"  style={{borderRadius: "8px", textAlign:"center", border:"1px solid #CCC",width:"80px",margin:"15px",height:"30px"}}>
            month
              <input      
              style={{display:"none"}}
              // class="activee"
                value="month"
                name="month"
                // checked={rent === rento ? true : false}

                // checked={rento==rent}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label ref={elemRef} class={btn_year} id="year" onClick={handleYear} name="year" value="year"  style={{borderRadius: "8px", textAlign:"center", border:"1px solid #CCC",width:"80px",margin:"15px",height:"30px"}}>
            year
              <input      
              style={{display:"none"}}
              // class="activee"
                value="year"
                name="year"
                // checked={rent === rento ? true : false}

                // checked={rento==rent}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
        </form>
        {/* {rents.map((rento, index) => (
            <label ref={elemRef} class="hah" id={rento} onClick={Clicked} name={rento} value={rento} key={index} style={{borderRadius: "8px", textAlign:"center", border:"1px solid #CCC",width:"80px",margin:"15px",height:"30px"}}>
              {rento}
              <input      
              style={{display:"none"}}
              // class="activee"
                value={rento}
                name={rento}
                checked={rent === rento ? true : false}

                // checked={rento==rent}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
          ))}
        </form> */}
           
            </>

        )
    
}
  
  export default TypeRent;
