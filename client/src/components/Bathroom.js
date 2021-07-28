import { InputGroup,FormControl } from "react-bootstrap";
import {useState} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'

function Bathroom({ bathroom, setBathroom}) {
  

    const handleBathroom = useCallback(event => {
      setBathroom(event.target.value)
    }, [setBathroom])
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
        return (
            <>
        <p className="h5 text-left font-weight-bold">Type Of bathroom</p>

        <form >
            <label class={btn_1} onClick={handle1} id="btnd" style={{borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              1
              <input   
              style={{display:"none"}}
                value="1"
                checked={bathroom === "1"}
                // onChange={() => setBathroom(bathroom:"1")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label class={btn_2} onClick={handle2} id="btnd" style={{borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              2
              <input   
              style={{display:"none"}}
                value="2"
                checked={bathroom === "2"}
                // onChange={() => setBathroom(bathroom:"2")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label class={btn_3} onClick={handle3} id="btnd" style={{borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              3
              <input   
              style={{display:"none"}}
                value="3"
                checked={bathroom === "3"}
                // onChange={() => setBathroom(bathroom:"3")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label class={btn_4} onClick={handle4} id="btnd" style={{borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              4
              <input   
              style={{display:"none"}}
                value="4"
                checked={bathroom === "4"}
                // onChange={() => setBathroom(bathroom:"4")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label class={btn_5} onClick={handle5} id="btnd" style={{borderRadius: "8px", border:"1px solid #CCC",width:"40px",margin:"15px" ,textAlign:"center"}}>
              5+
              <input   
              style={{display:"none"}}
                value="5"
                checked={bathroom === "5"}
                // onChange={() => setBathroom(bathroom:"5")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
        </form>
            </>

        )
    
}
  
  export default Bathroom;
