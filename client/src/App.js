import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";
import { UserContextProvider,UserContext } from "./contexts/userContext";
import { FilterContextProvider } from "./contexts/filterContext";
import { AmenitiesContextProvider } from "./contexts/AmenitiesContext";

import PrivateRoute from "./components/route/PrivateRoute";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import MyBooking from "./pages/MyBooking";
import Profile from "./pages/Profile";
import MyBookingPending from "./pages/MyBookingPending";
import MyBookingHistory from "./pages/MyBookingHistory";
import History from "./pages/AdminHistory";
import AddProperty from "./pages/AddProperty";

// MyBooking
// import DetailProduct from "./pages/DetailProduct";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import House from "./pages/House";


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
        <FilterContextProvider>
        {/* <AmenitiesContextProvider> */}
       
          <Router>
            <Header />
            <Container fluid="lg">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/houses" component={House} />
                <Route exact path="/product/:id" component={DetailProduct} />
                <Route exact path="/Profile" component={Profile} />
                {/* <Route exact path="/MyBooking" component={MyBooking} /> */}
                <PrivateRoute exact path="/MyBooking" component={MyBooking} />
                <Route exact path="/MyBookingPending" component={MyBookingPending} />
                <Route exact path="/MyBookingHistory" component={MyBookingHistory} />
                <Route exact path="/History" component={History} />
                <Route exact path="/AddProperty" component={AddProperty} />
                
                {/* <PrivateRoute exact path="/house/:id" component={DetailHouse} /> */}
                {/* <PrivateRoute exact path="/product/:id" component={DetailProduct} /> */}
              </Switch>
            </Container>
          </Router>
          {/* </AmenitiesContextProvider> */}
        
        </FilterContextProvider>
      </UserContextProvider>

    </QueryClientProvider>
  );
};

export default App;
