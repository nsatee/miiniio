import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../../svg";
import { logout } from "../../actions";

class MainNav extends Component {
    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    showDropdown(e) {
        e.target.parentElement.parentNode.classList.toggle("show-dropdown");
    }

    clickDropdown(e) {
        document.querySelector('.show-dropdown').classList.remove('show-dropdown');
    }

    render() {
        return (
            <nav className="nav container">
                <div className="nav-wrapper wrapper space-between v-center">
                    <div className="nav-logo">
                        <Link to="/">
                            <Icon name="logo" width="100px" />
                        </Link>
                    </div>
                    <div className="nav-menu">
                        <ul className="nav-menu_wrapper flex center">
                            <li>
                                <Link to="/post">post</Link>
                            </li>
                            <li>
                                <button
                                    className="user-thumbnail_container"
                                    onClick={this.showDropdown.bind(this)}
                                >
                                    <div className="user-thumbnail_wrapper flex center">
                                        NS
                                    </div>
                                </button>
                                <ul className="nav-dropdown" onClick={this.clickDropdown.bind(this)}>
                                    <li>
                                        <Link
                                            to="/userinfo"
                                        >
                                            User info
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="/logout"
                                            onClick={this.handleLogOut.bind(
                                                this
                                            )}
                                            className="logout"
                                        >
                                            logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(
    null,
    { logout }
)(MainNav);
