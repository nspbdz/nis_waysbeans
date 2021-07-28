import {createContext, useReducer} from 'react';

export const UserRegist = createContext();

const initialState = {
  isLogin: false,
  user: {
    id: null,
    name: '',
    email: '',
    password: '',
  }
}

const userReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
        isLogin: true
      }

    case 'LOGOUT':
      return {
        ...state,
        user: {
          id: null,
          name: '',
          email: '',
          password: '',
        },
        isLogin: false
      }
    default:
      throw new Error('case unknown');
  }
}

export const UserRegistProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserRegist.Provider value={{ state, dispatch }}>
      {children}
    </UserRegist.Provider>
  )
}
