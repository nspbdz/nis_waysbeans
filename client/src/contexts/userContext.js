import {createContext, useReducer} from 'react';

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {
    email: '',
    password: '',
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
        isLogin: true,
        user: action.payload,
      };
    case "LOGOUT":
    // case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
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
//               isLogin: true,
//               user: payload
//           }
//       case "LOGOUT":
//           return {
//             ...state,
//               isLogin: false,
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
