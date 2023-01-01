const initialState = {
    userList: [],
    loading: true,
    error: false,
};


export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_USERS':
            console.log('LOAD_USERS', state);
            return { ...state, error: false, loading: true }

        case 'GET_USERS':
            console.log('GET_USERS', state);
            return { ...state, userList: action.payload, error: false, loading: false }

        case 'ERROR_USERS':
            console.log('ERROR_USERS', state);
            return { ...state, userList: [], error: true, loading: false }

        case 'DELETE_USER':
            console.log('DELETE_USER', state);
            return { ...state, error: false, loading: false }

        case 'UPDATE_USER':
            console.log('UPDATE_USER', state);
            return { ...state, error: false, loading: false }

        default:
            return state;
    }
};
