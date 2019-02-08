import React, { Component } from "react";
import { connect } from "react-redux";
import { receivedValue, signupNewUser } from "../actions";

class Signup extends Component {
    handleValChange = e => {
        this.props.receivedValue(e.target);
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            username,
            password,
            email,
            firstname,
            lastname,
            confirmPassword
        } = this.props;
        this.props.signupNewUser({
            username,
            password,
            email,
            firstname,
            lastname,
            confirmPassword
        });
    };

    render() {
        return (
            <div className="signup-wrapper">
                <h1 className="header">sign up</h1>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="form-container"
                >
                    <div className="field-wrapper">
                        <input
                            type="text"
                            name="firstname"
                            className="field"
                            placeholder="Firstname"
                            value={this.props.firstname}
                            onChange={this.handleValChange.bind(this)}
                        />

                        <input
                            type="text"
                            name="lastname"
                            className="field"
                            placeholder="Lastname"
                            value={this.props.fastname}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>

                    <div className="field-wrapper">
                        <input
                            type="text"
                            name="username"
                            className="field"
                            placeholder="Username"
                            value={this.props.username}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>

                    <div className="field-wrapper">
                        <input
                            type="text"
                            name="email"
                            className="field"
                            placeholder="Email"
                            value={this.props.email}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>
                    <div className="field-wrapper">
                        <input
                            type="password"
                            name="password"
                            className="field"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>

                    <div className="field-wrapper">
                        <input
                            type="password"
                            name="confirmPassword"
                            className="field"
                            placeholder="Confirm password"
                            value={this.props.confirmPassword}
                            onChange={this.handleValChange.bind(this)}
                        />
                    </div>

                    <div className="field-wrapper flex center">
                        <button
                            type="submit"
                            className="btn blue auth-signup_btn"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const {
        username,
        password,
        email,
        firstname,
        lastname,
        confirmPassword
    } = user;
    return { username, password, email, firstname, lastname, confirmPassword };
};

export default connect(
    mapStateToProps,
    { receivedValue, signupNewUser }
)(Signup);
