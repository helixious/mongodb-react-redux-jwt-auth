import React, { useState, useRef } from "react";
// import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button, Alert, Breadcrumb, Card, Form, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

//   const onChangeConfirmPassword = (e) => {
//       const confirmPassword = e.target.value;
//       setConfirmPassword(confirmPassword);
//   }

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    console.log(username, password);
    // AuthService.login(username, password).then(
    //     () => {
    //         props.history.push("/profile");
    //         window.location.reload();
    //     },
    //     (error) => {
    //         const resMessage =
    //             (error.response &&
    //                 error.response.data &&
    //                 error.response.data.message) ||
    //             error.message ||
    //             error.toString();

    //         setLoading(false);
    //         setMessage(resMessage);
    //     }
    // );
  };

  return (
      <Container>
          <Form className="card col-12 col-lg-4 mt-2 hv-center align-items-center" onSubmit={handleLogin} ref={form}>
              <Row className="p-4">
                  <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={username} onChange={onChangeUsername}></Form.Control>
                      <Form.Text className="muted">We'll never share your email with anyone else.</Form.Text>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="Password" placeholder="Password" value={password} onChange={onChangePassword}></Form.Control>
                  </Form.Group>
              </Row>

              <Button className="mb-2" variant="primary" type="submit" size="sm" ref={checkBtn}>Login</Button>
          </Form>
      </Container>
    //   <div className="card col-12 col-lg-4 mt-2 hv-center align-items-center">
          
          

    //       {/* <Card style={{ color: 'black', height: 200, width: 200 }}>
    //           <Card.Title>Hello world</Card.Title>
    //           <Card.Img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"></Card.Img>
    //       </Card> */}
    //   </div>

    // <div className="col-md-12">
    //   <div className="card card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //       alt="profile-img"
    //       className="profile-img-card"
    //     />

    //     <Form onSubmit={handleLogin} ref={form}>
    //       <div className="form-group">
    //         <label htmlFor="username">Username</label>
    //         <Input
    //           type="text"
    //           className="form-control"
    //           name="username"
    //           value={username}
    //           onChange={onChangeUsername}
    //           validations={[required]}
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <Input
    //           type="password"
    //           className="form-control"
    //           name="password"
    //           value={password}
    //           onChange={onChangePassword}
    //           validations={[required]}
    //         />
    //       </div>

    //       <div className="form-group">
    //         <button className="btn btn-primary btn-block" disabled={loading}>
    //           {loading && (
    //             <span className="spinner-border spinner-border-sm"></span>
    //           )}
    //           <span>Login</span>
    //         </button>
    //       </div>

    //       {message && (
    //         <div className="form-group">
    //           <div className="alert alert-danger" role="alert">
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <CheckButton style={{ display: "none" }} ref={checkBtn} />
    //     </Form>
    //   </div>
    // </div>
  );
};

export default Login;