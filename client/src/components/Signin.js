import React, { Component } from "react";
import Icon from "../svg";
import { connect } from "react-redux";
import { receivedValue, signinUser } from '../actions'

class Signin extends Component {
    handleValChange = e => {
        this.props.receivedValue(e.target);
    };

    handleSubmit(e) {
        e.preventDefault();
        const {usernameSignin, passwordSignin} = this.props;
        const info = {
            username: usernameSignin,
            password: passwordSignin
        }
        console.log(info)
        this.props.signinUser(info);
    }

    render() {
        return (
            <div className="signin-wrapper">
                <div className="signin-logo">
                    <Icon name="logo" fill="#d1d1d1" />
                </div>
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

                        <input
                            type="password"
                            name="passwordSignin"
                            className="field"
                            placeholder="Password"
                            value={this.props.passwordSignin}
                            onChange={this.handleValChange.bind(this)}
                        />

                        <button
                            type="submit"
                            className="btn blue auth-signin_btn"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { usernameSignin, passwordSignin } = user;
    return { usernameSignin, passwordSignin };
};

export default connect(mapStateToProps, {receivedValue, signinUser})(Signin);
