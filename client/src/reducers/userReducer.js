import { RECEIVED_VALUE, INVALID_VALUE } from "../actions/types";

const initState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
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
        default:
            return state;
    }
};
