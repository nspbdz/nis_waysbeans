import {createContext, useState,useReducer} from 'react';

const CartContext = createContext({});

const CartProvider = props => {

  const [cart, setCart] = useState([]);
  
  const CartContext = {
    cartContext: cart,
    feedCart: arrayFromAPI => {
      setCart([...arrayFromAPI]);
    }
  };


  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };