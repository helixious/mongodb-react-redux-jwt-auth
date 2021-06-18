import React, { useState, useEffect } from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {NavDropdown, Navbar, Nav} from "react-bootstrap";
// import Cookies from "js-cookie";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import SignOut from "./components/Logout";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

const App = () => {
  const [loginState, setLoginState] = useState(0);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);


  useEffect(() => {
    console.log('use-effect triggered');
    const user = AuthService.getCurrentUser();
    AuthService.isLoggedIn().then(result => {
      setLoginState(result.active);
    });
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // };

  return (
    <BrowserRouter>
    
    <div>
      <Navbar collapseOnSelect expand="lg" className="px-3" variant="dark" bg="secondary" sticky="top">
        <Navbar.Brand as={Link} eventKey={0} to="/home">Helixious</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsivenavbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            {loginState ? (
              <Nav className="justify-content-end" style={{width:"100%"}}>
                <Nav.Link as={Link} eventKey={1} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} eventKey={3} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} eventKey={2.2} to="/signout">Sign Out</Nav.Link>
              </Nav>
            ) : (
                <Nav className="justify-content-end" style={{width:"100%"}}>
                  <Nav.Link as={Link} eventKey={2.1} to="/signin">Sign In</Nav.Link>
                </Nav>
            )}
        </Navbar.Collapse>
      </Navbar>
      <Switch>Signup
          <Route exact path="/signin" render={(props) => <Login {...props} onChange={setLoginState} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/signout" render={(props) => <SignOut {...props} onChange={setLoginState} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/signup" render={(props) => <Signup {...props} onChange={setLoginState} setCurrentUser={setCurrentUser}/>} />
          <Route exact path="/profile" render={(props) => <Profile {...props} currentUser={currentUser}/>} />
          {/* <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;