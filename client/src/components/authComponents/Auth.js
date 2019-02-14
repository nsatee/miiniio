import React, { Component } from "react";
import { connect } from 'react-redux';

import Signup from "./Signup";
import Signin from "./Signin";
import Icon from "../../svg";
import ErrorAuth from "./ErrorsAuth";

class Auth extends Component {
    state = {
        isSignin: this.props.isSignin
    };

    handleAuthComponent() {
        if (this.props.isSignin) {
            return <Signin />;
        } else {
            return <Signup />;
        }
    }

    render() {
        if (this.props.isLoading) {
            return <div></div>
        }
        return (
            <div className="container auth">
                <div className="wrapper full-width">
                    <ErrorAuth />
                    <div className="section auth-logo_container">
                        <div className="block w-height center">
                            <Icon name="logo" fill="#fff" />
                        </div>
                    </div>
                    <div className="section flex center">
                        <div className="block">
                            {this.handleAuthComponent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ user }) => {
    const { isLoading } = user;
    return { isLoading };
};

export default connect(mapStateToProps)(Auth);
