import axios from 'axios';
import {
    RECEIVED_VALUE
} from "./types";

export const receivedValue = val => {
    return {
        type: RECEIVED_VALUE,
        payload: val
    };
};


export const signupNewUser = userInfo => {
    return dispatch => {
        axios.post('/api/new_user', userInfo)
            .then(res => {
                console.log(res);
            });
    }

}