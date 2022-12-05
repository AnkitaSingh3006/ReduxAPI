import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: '',
    token: '',
    loading: false
}

export const LoginUser = createAsyncThunk('user', async (body) => {
    let res = await fetch("https://reqres.in/api/login", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.JSON();
})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        }
    },
    extraReducers: {
        [LoginUser.pending]: (state, action) => {
            state.loading = true
        },
        [LoginUser.fulfilled]:(state,{payload:{user,token}})=>{
            state.loading= false
            state.token = token;
            state.user = user
            localStorage.setItem("token",JSON.stringify(token))
            localStorage.setItem("token",JSON.stringify(user))
        },
        [LoginUser.rejected]:(state,action)=>{
            state.loading = true
        },

    }
})

export const {addToken,addUser} = authSlice.actions;
export default authSlice.reducer;