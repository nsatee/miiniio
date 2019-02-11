import {
    RECEIVED_VALUE,
    INVALID_VALUE,
    SUCCESS_SUBMITTING,
    IS_LOGED_IN,
    LOGOUT,
    LOGIN_FAILED,
    SUCCESS_LOGIN
} from "../actions/types";

const initState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    usernameSignin: "",
    passwordSignin: "",
    email: "",
    confirmPassword: "",
    error: [],
    currentUser: null,
    isLoading: true
};

export default (state = initState, action) => {
    switch (action.type) {
        case RECEIVED_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case INVALID_VALUE:
            console.log(action.payload);
            return { ...state, error: action.payload };
        case SUCCESS_SUBMITTING:
            return { ...initState };
        case SUCCESS_LOGIN:
            return { ...state, isLoading: false };
        case IS_LOGED_IN:
            return { ...state, currentUser: action.payload.data.currentUser, isLoading: false };
        case LOGOUT:
            return { ...initState, isLoading: false };
        case LOGIN_FAILED:
            return { ...state, error: [action.payload.message] };
        default:
            return state;
    }
};
