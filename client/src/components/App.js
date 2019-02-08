import React, { Component } from "react";
import { connect } from 'react-redux';
import { receivedValue } from "../actions";
import Auth from "./Auth";

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <Auth />
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { receivedValue })(App);
