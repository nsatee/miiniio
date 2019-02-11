import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

class Mainpage extends Component {
    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        if (this.props.currentUser === null) {
            return <Redirect to="/signin" />;
        }
        
        return (
            <div>
                <h1>Main</h1>
                <a href="/logout" onClick={this.handleLogOut.bind(this)}>
                    logout
                </a>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { currentUser, isLoading } = user;
    return { currentUser, isLoading };
};

export default connect(mapStateToProps, {logout})(Mainpage);
