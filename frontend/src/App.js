import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Players from "./pages/Players";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import GroupForm from "./components/GroupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginService from "./services/login";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    LoginService.isLoggedIn()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <Router>
      <Switch>
        <ProtectedRoute
          path="/home"
          component={Home}
          authenticated={{ authenticated }}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          authenticated={{ authenticated }}
        />
        <ProtectedRoute
          path="/players"
          component={Players}
          authenticated={{ authenticated }}
        />
        <ProtectedRoute
          path="/groups"
          component={Groups}
          authenticated={{ authenticated }}
        />
        <ProtectedRoute
          path="/groupForm"
          component={GroupForm}
          authenticated={{ authenticated }}
        />
        <Route exact path="/">
          <Landing authenticated={authenticated} />
        </Route>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default App;
