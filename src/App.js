import React from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotDetails from "./pages/forgotPassword/ForgotDetails";
import ResetPassword from "./components/ResetPassword";
import DashBoard from "./components/DashBoard";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={withRouter(Login)} />
                <Route exact path="/login" component={withRouter(Login)} />
                <Route exact path="/signup" component={withRouter(Signup)} />

                <Route exact path="/forgotDetails" component={withRouter(ForgotDetails)} />
                <Route exact path="/resetpassword/:id" component={withRouter(ResetPassword)} />

                <Route exact path="/dashBoard" component={withRouter(DashBoard)} />
            </Switch>
        </Router>
    );
}

export default App;
