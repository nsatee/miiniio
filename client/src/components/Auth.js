import React, { Component } from "react";

import Signup from "./Signup";
import Signin from "./Signin";
import Icon from "../svg";
import ErrorAuth from "./ErrorsAuth";

class Auth extends Component {
    render() {
        return (
            <div className="container auth">
                <div className="wrapper full-width">
                    <ErrorAuth />
                    <div className="section auth-logo_container">
                        <div className="block w-height center">
                            <Icon name="logo" fill="#fff" />
                        </div>
                    </div>
                    <div className="section">
                        <div className="block auth-signin flex right">
                            <Signin />
                        </div>
                        <div className="block">
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
