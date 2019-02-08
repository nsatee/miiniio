import axios from "axios";
import * as EmailValidator from 'email-validator';
import { RECEIVED_VALUE, INVALID_VALUE } from "./types";

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
            error.push({username: "At lease 6 characters for username"});
        } 
        if (!checkLength(password, 6)) {
            console.log(error);
            error.push({password: "At lease 6 characters for password"});
        }
        if (password !== confirmPassword) {
            console.log(error);
            error.push({confirmPassword: "Confirm password does not match with the password"});
        }
        if (!EmailValidator.validate(email)) {
            console.log(error);
            error.push({email: "Email is invalid"});
        }
        if (firstname === "") {
            console.log(error);
            error.push({firstname: "Please enter your firstname"});
        }  
        if (lastname === "") {
            console.log(error);
            error.push({lastname: "Please enter your lastname"});
        }  


        if (!error) {
            axios.post('/api/new_user', userInfo)
            .then(res => {
                console.log(res);
            });
        } else {
            return dispatch({type: INVALID_VALUE, payload: error})
        }
    };
};
