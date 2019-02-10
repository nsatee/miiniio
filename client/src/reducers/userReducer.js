import { RECEIVED_VALUE, INVALID_VALUE, SUCCESS_SUBMITTING } from "../actions/types";

const initState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    usernameSignin: "",
    passwordSignin: "",
    email: "",
    confirmPassword: "",
    error: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case RECEIVED_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case INVALID_VALUE:
            console.log(action.payload);
            return { ...state, error: action.payload}
        case SUCCESS_SUBMITTING:
            return {...initState};
        default:
            return state;
    }
};
