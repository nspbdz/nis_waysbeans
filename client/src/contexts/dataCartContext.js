import {createContext, useReducer} from 'react';

export const UserContext = createContext();

const initialState = {
  isClick: false,
  user: {
    price: '',
    qty: '',
  }
}
const reducer = (state, action) =>{
  // const { type, payload } = action
  switch (action.type) {
    case "LOGIN":
    // case "AUTH_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isClick: true,
        user: action.payload,
      };
    case "LOGOUT":
    // case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isClick: false,
        user: null,
      };
    default:
      throw new Error("unknown cases");
  }
};

//   switch(type){
//       case "LOGIN_SUCCESS":
//           return {
//             ...state,
//               isClick: true,
//               user: payload
//           }
//       case "LOGOUT":
//           return {
//             ...state,
//               isClick: false,
//               user: {},
              
//           }

//       default:
//           throw new Error();
//   }
// }

export const UserContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
      {children}
    </UserContext.Provider>
  )
}
