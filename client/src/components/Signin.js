import React, { Component } from 'react';
import Icon from '../svg';

class Signin extends Component {
    render() {
        return (
            <div className="signin-wrapper">
                <div className="signin-logo">
                    <Icon name="logo" fill="#d1d1d1"/>
                </div>
                <form 
                        // onSubmit={this.handleSubmit.bind(this)} 
                        className="form-container"
                    >

                        <div className="field-wrapper">
                            <input
                                type="text"
                                name="username"
                                className="field"
                                placeholder="Username"
                                // value={this.props.username}
                                // onChange={this.handleValChange.bind(this)}
                            />

                            <input
                                type="password"
                                name="password"
                                className="field"
                                placeholder="Password"
                                // value={this.props.password}
                                // onChange={this.handleValChange.bind(this)}
                            />

                            <button type="submit" className="btn blue auth-signin_btn">Login</button>
                        </div>
                        
                    </form>
                </div>
        )
    }
}

export default Signin;
