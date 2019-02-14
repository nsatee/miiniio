import React, { Component } from "react";
import { connect } from "react-redux";
import { receivedValue, signupNewUser } from "../../actions";
import { Link } from "react-router-dom";

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
        console.log(this.props)
        return (
            <div className="auth-form">
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
                            value={this.props.lastname}
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

                    <div className="field-wrapper flex center wrap column">
                        <button
                            type="submit"
                            className="btn blue auth-signup_btn"
                        >
                            Register
                        </button>
                        <Link
                            to="/"
                            className="extra-link"
                        >
                            Already had an account? Signin
                        </Link>
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
