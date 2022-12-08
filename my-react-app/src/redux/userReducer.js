import { SET_MESSAGE } from "../auth/type";

const initialState = {};

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        default:
            return state;
    }
}
