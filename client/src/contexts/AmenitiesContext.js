import {createContext, useReducer} from 'react';

export const AmenitiesContext = createContext();

const initialState = {
  isAmenities: false,
  data: {
    
    amenities:"",
  
  }
}
const reducer = (state, action) =>{
  // const { type, payload } = action
  switch (action.type) {
    case "Amenitiesed":
      return {
        ...state,
        isAmenities: true,
        data: action.payload,
      };
    case "notAmenitiesed":
      return {
        ...state,
        isAmenities: false,
        data: null,
      };
    default:
      throw new Error("unknown cases");
  }
};


export const AmenitiesContextProvider = ({children}) => {
  const [state, AmenitiesDispatch] = useReducer(reducer, initialState);

  return (
    <AmenitiesContext.Provider value={[ state, AmenitiesDispatch ]}>
      {children}
    </AmenitiesContext.Provider>
  )
}
