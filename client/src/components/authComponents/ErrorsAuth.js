import React, { Component } from "react";
import { connect } from "react-redux";

class ErrorAuth extends Component {
    render() {
        const isError = this.props.error.length > 0;
        return (
            <div className={`section auth-error ${isError ? "error" : ""}`}>
                <div className="block">
                    <ul>
                        {this.props.error.map((item, index ) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { error } = user;
    return { error };
};

export default connect(mapStateToProps)(ErrorAuth);
