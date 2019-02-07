import { RECEIVED_VALUE } from "../actions/types";

const initState = {
    username: "",
    password: "",
    email: ""
};

export default (state = initState, action) => {
    switch (action.type) {
        case RECEIVED_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};
