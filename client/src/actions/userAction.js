import axios from "axios";
import * as EmailValidator from 'email-validator';
import { RECEIVED_VALUE, INVALID_VALUE, SUCCESS_SUBMITTING } from "./types";

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
            console.log('yay');
            axios.post('/api/new_user', userInfo)
            .then(res => {
                dispatch({type: SUCCESS_SUBMITTING, payload: res});
            });
        } else {
            console.log(error.length);
            return dispatch({type: INVALID_VALUE, payload: error})
        }
    };
};

export const signinUser = userInfo => {
    return () => {
        axios.post('/api/login', userInfo)
    .then(() => {
        console.log('yay');
    });
    }
}
