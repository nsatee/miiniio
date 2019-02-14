import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { receivedValue, signinUser } from "../../actions";

class Signin extends Component {
    handleValChange = e => {
        this.props.receivedValue(e.target);
    };

    handleSubmit(e) {
        e.preventDefault();
        const { usernameSignin, passwordSignin } = this.props;
        const info = {
            username: usernameSignin,
            password: passwordSignin
        };
        this.props.signinUser(info);
    }

    render() {
        if (this.props.currentUser !== null) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-form">
                <h1 className="header">sign In</h1>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="form-container"
                >
                    <div className="field-wrapper">
                        <input
                            type="text"
                            name="usernameSignin"
                            className="field"
                            placeholder="Username"
                            value={this.props.usernameSignin}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>
                    <div className="field-wrapper">
                        <input
                            type="password"
                            name="passwordSignin"
                            className="field"
                            placeholder="Password"
                            value={this.props.passwordSignin}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>
                    <div className="field-wrapper flex center wrap column">
                        <button
                            type="submit"
                            className="btn blue auth-signin_btn"
                        >
                            Login
                        </button>
                        <Link to="/signup" className="extra-link">
                            Create an acount
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { usernameSignin, passwordSignin, currentUser } = user;
    return { usernameSignin, passwordSignin, currentUser };
};

export default connect(
    mapStateToProps,
    { receivedValue, signinUser }
)(Signin);
