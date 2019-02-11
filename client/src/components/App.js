import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Mainpage from "./Mainpage";
import Auth from "./Auth";


class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Mainpage} />
                        <Route exact path="/signin" render={() => <Auth isSignin={true} />}  />
                        <Route exact path="/signup" render={() => <Auth isSignin={false} />}  />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(
    mapStateToProps,
    { getUser }
)(App);
