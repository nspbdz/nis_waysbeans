import { InputGroup,FormControl } from "react-bootstrap";
import {useState} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'

function Bedroom({ bedroom, setBedroom}) {
  
  const [colors, setColors] = useState({
    v1:1,
    v2:"",
    v3:"",
    v4:"",
    v5:"",
  });
  
const handle1  = (e) => {
setColors({
  v1:1,
  v2:"",
  3:"",
  v4:"",
  v5:"",
})
}
const handle2  = (e) => {
  setColors({
  v1:"",
  v2:2,
  v3:"",
  v4:"",
  v5:"",
  })
  }
  const handle3  = (e) => {
    setColors({
      v1:"",
      v2:"",
      v3:3,
      v4:"",
      v5:"",
    })
    }
    const handle4  = (e) => {
      setColors({
        v1:"",
        v2:"",
        v3:"",
        v4:4,
        v5:"",
      })
      }
      const handle5  = (e) => {
        setColors({
          v1:"",
          v2:"",
          v3:"",
          v4:"",
          v5:5,
        })
        }
    let btn_1= colors.v1 ? "blueButton" : "whiteButton";
    let btn_2 = colors.v2 ? "blueButton" : "whiteButton";
    let btn_3 = colors.v3 ? "blueButton" : "whiteButton";
    let btn_4 = colors.v4 ? "blueButton" : "whiteButton";
    let btn_5 = colors.v5 ? "blueButton" : "whiteButton";

    const handleDuratuionChange = useCallback(event => {
      setBedroom(event.target.value)
    }, [setBedroom])
  
        return (
            <>
        <p className="h5 text-left font-weight-bold">Type Of bedroom</p>

        <form >
            <label onClick={handle1} class={btn_1}  id="btnd" style={{ borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              1
              <input   
              style={{display:"none"}}
                value="1"
                checked={bedroom === 1}
                // onChange={() => setBedroom(bedroom:"1")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label onClick={handle2}  class={btn_2} id="btnd" style={{ borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              2
              <input   
              style={{display:"none"}}
                value="2"
                checked={bedroom === 2}
                // onChange={() => setBedroom(bedroom:"2")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label onClick={handle3}  class={btn_3} id="btnd" style={{ borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              3
              <input   
              style={{display:"none"}}
                value="3"
                checked={bedroom === 3}
                // onChange={() => setBedroom(bedroom:"3")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label onClick={handle4}  class={btn_4} id="btnd" style={{ borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              4
              <input   
              style={{display:"none"}}
                value="4"
                checked={bedroom === 4}
                // onChange={() => setBedroom(bedroom:"4")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label onClick={handle5}  class={btn_5} id="btnd" style={{ borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              5+
              <input   
              style={{display:"none"}}
                value="5"
                checked={bedroom === 5}
                // onChange={() => setBedroom(bedroom:"5")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
        </form>
            </>

        )
    
}
  
  export default Bedroom;
