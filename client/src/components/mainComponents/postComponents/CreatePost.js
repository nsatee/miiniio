import React, { Component } from "react";

class CreatePost extends Component {
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
        return (
            <div>
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

                    <div className="field-wrapper flex center wrap column">
                        <button
                            type="submit"
                            className="btn blue auth-signin_btn"
                        >
                            Login
                        </button>
                        <a href="/signup" className="extra-link">
                            Create an acount
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePost;
