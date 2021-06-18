import React, { useState, useRef } from "react";

import AuthService from "../services/auth.service";

const SignOut = (props) => {

    AuthService.signOut().then(result => {
        props.onChange(0);
        props.history.push("/signin");
    })

    return (
        <div>Logging Off</div>
    );
};

export default SignOut;