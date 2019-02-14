import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./authComponents/Auth";
import CreatePost from "./mainComponents/postComponents/CreatePost";

class Mainpage extends Component {
    render() {
        // check if user is already signin
        if (this.props.currentUser === null) {
            return <Auth isSignin={true} />;
        }

        return (
            <div className="main-container">
                <CreatePost />
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { currentUser, isLoading } = user;
    return { currentUser, isLoading };
};

export default connect(mapStateToProps)(Mainpage);
