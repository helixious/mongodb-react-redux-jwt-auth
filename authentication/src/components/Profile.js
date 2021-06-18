import React, { useState, useRef } from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button, Alert, Breadcrumb, Card, Form, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from "../services/auth.service";


const Profile = (props) => {
    // const [auth, setAuth] = useState(false);
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [id, setId] = useState("");

    const [user, setUser] = useState(false);

    // AuthService.profile().then(res => {
    //     console.log('trigger');
    //     console.log(res.data);
    //     if (res.data) {
    //         // setUser(res.data);

    //     }
        
    //     // setUser(res.data);
    // })

    console.log(props.currentUser)
    return (
        <div>

        </div>
    )

};

export default Profile;