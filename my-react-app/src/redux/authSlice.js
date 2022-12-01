import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const loginUSer = createAsyncThunk('loginUser', async (body) => {
    const res = await fetch("https://reqres.in/api/login", {
        method: 'post',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await res.JSON();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token = null;
            localStorage.clear();
        }
    },
    extraReducers: {
        [loginUSer.pending]: (state, action) => {
            state.loading = true
        },
        [loginUSer.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.msg = msg;
                state.token = token;
                state.user = user;
                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
            }
        },
        [loginUSer.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer