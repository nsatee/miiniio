import React, { Component } from "react";
import Signup from "./Signup";
import { connect } from 'react-redux';
import { receivedValue } from "../actions";

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <Signup/>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { receivedValue })(App);
