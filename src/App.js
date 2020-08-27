import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup go in here (unmounting)...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>", user);

  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
