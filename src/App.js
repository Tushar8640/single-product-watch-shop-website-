import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ExploreMore from "./Pages/ExploreMore/ExploreMore";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Registration from "./Pages/Registration/Registration";
import SingleProducts from "./Pages/SingleProducts/SingleProducts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
    <Router>
      
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/login">
          <Login />
        </Route>
        <Route  path="/registration">
          <Registration />
        </Route>
        <PrivateRoute  path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        
        <Route  path="/exploremore">
          <ExploreMore />
        </Route>
        <PrivateRoute  path="/singleproducts/:id">
          <SingleProducts/>
        </PrivateRoute>


        

        <Route  path="*">
          <NotFound />
        </Route>

      </Switch>
      
    </Router>
    </AuthContextProvider>
  );
}

export default App;
