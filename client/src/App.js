import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";
import { UserContextProvider,UserContext } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

import PrivateRoute from "./components/route/PrivateRoute";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import AddPropertyForm from "./pages/AddProduct";

// MyBooking
// import DetailProduct from "./pages/DetailProduct";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import House from "./pages/House";
import Checkout from "./pages/Checkout";


if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}
const tokens=localStorage.getItem("token");
console.log(tokens);
console.log(setAuthToken);
const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
       <UserContextProvider>
        <CartContextProvider>
       
          <Router>
            <Header />
            <Container fluid="lg">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/houses" component={House} />
                <Route exact path="/product/:id" component={DetailProduct} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/cart" component={Cart} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                {/* <Route exact path="/MyBooking" component={MyBooking} /> */}
                <Route exact path="/AddProduct" component={AddPropertyForm} />
                
                {/* <PrivateRoute exact path="/house/:id" component={DetailHouse} /> */}
                {/* <PrivateRoute exact path="/product/:id" component={DetailProduct} /> */}
              </Switch>
            </Container>
          </Router>
        
        </CartContextProvider>
      </UserContextProvider>

    </QueryClientProvider>
  );
};

export default App;
