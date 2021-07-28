import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

/**
 * Wrapper component to protect particular route
 * we use conditional rendering base on state to check
 * if there is user login or not
 * if login: render Component
 * if not: redirect to home path
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(UserContext);
  const contextValue = useContext(UserContext);
  console.log(contextValue[0])
  const isLogin=contextValue[0].isLogin
  console.log(isLogin)

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
};

export default PrivateRoute;
