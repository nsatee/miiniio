import React, { Component } from "react";
import { connect } from "react-redux";
import { receivedValue, signupNewUser } from "../actions";

class Signup extends Component {
    handleValChange = e => {
        this.props.receivedValue(e.target);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, email } = this.props;
        this.props.signupNewUser({ username, password, email });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.props.username}
                        onChange={this.handleValChange.bind(this)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        onChange={this.handleValChange.bind(this)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.props.password}
                        onChange={this.handleValChange.bind(this)}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { username, password, email } = user;
    return { username, password, email };
};

export default connect(
    mapStateToProps,
    { receivedValue, signupNewUser }
)(Signup);
