import axios from "axios";
import * as EmailValidator from "email-validator";
import {
    RECEIVED_VALUE,
    INVALID_VALUE,
    SUCCESS_SUBMITTING,
    IS_LOGED_IN,
    LOGOUT,
    LOGIN_FAILED,
    SUCCESS_LOGIN
} from "./types";

export const receivedValue = val => {
    return {
        type: RECEIVED_VALUE,
        payload: val
    };
};

export const signupNewUser = userInfo => {
    const {
        username,
        password,
        confirmPassword,
        email,
        firstname,
        lastname
    } = userInfo;

    return dispatch => {
        // helper validation function
        let error = [];
        const checkLength = (texts, minLength) => {
            return texts.length >= minLength ? true : false;
        };

        if (!checkLength(username, 6)) {
            console.log(error);
            error.push("At lease 6 characters for username");
        }
        if (!checkLength(password, 6)) {
            console.log(error);
            error.push("At lease 6 characters for password");
        }
        if (password !== confirmPassword) {
            console.log(error);
            error.push("Confirm password does not match with the password");
        }
        if (!EmailValidator.validate(email)) {
            console.log(error);
            error.push("Email is invalid");
        }
        if (firstname === "") {
            console.log(error);
            error.push("Please enter your firstname");
        }
        if (lastname === "") {
            console.log(error);
            error.push("Please enter your lastname");
        }

        if (error.length === 0) {
            console.log("yay");
            axios.post("/api/new_user", userInfo).then(res => {
                dispatch({ type: SUCCESS_SUBMITTING, payload: res });
            });
        } else {
            console.log(error.length);
            return dispatch({ type: INVALID_VALUE, payload: error });
        }
    };
};

export const signinUser = userInfo => {
    return (dispatch) => {
        axios.post("/api/login", userInfo).then((res) => {
            if (!res.data.success) {
                return dispatch({type: LOGIN_FAILED, payload: res.data});
            } else {
                window.location.replace("/");
                return dispatch({type: SUCCESS_LOGIN});
            } 
        });
    };
};

export const getUser = () => {
    return dispatch => {
        axios.get("/api/user").then(res => {
            return dispatch({ type: IS_LOGED_IN, payload: res });
        });
    };
};

export const logout = () => {
    return dispatch => {
        axios.post("/api/logout").then(res => {
            return dispatch({ type: LOGOUT });
        });
    };
};
