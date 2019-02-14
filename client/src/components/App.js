import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Mainpage from "./Mainpage";
import Auth from "./authComponents/Auth";
import UserInfo from "./mainComponents/UserInfo";
import MainNav from "./mainComponents/MainNav";

class App extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    isLogedIn() {
        if (this.props.currentUser !== null) {
            return <MainNav />;
        }
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        {this.isLogedIn()}
                        <Switch>
                            <Route exact path="/" component={Mainpage} />
                            <Route
                                exact
                                path="/signup"
                                render={() => <Auth isSignin={false} />}
                            />
                            <Route
                                exact
                                path="/userinfo"
                                render={() =>
                                    this.props.currentUser !== null ? (
                                        <UserInfo />
                                    ) : (
                                        <Redirect to="/" />
                                    )
                                }
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { currentUser } = user;
    return { currentUser };
};

export default connect(
    mapStateToProps,
    { getUser }
)(App);
