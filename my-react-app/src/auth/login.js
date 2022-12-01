import React from 'react'
import { useState } from 'react'
import { loginUSer } from '../redux/authSlice'
import { useDispatch } from 'react-redux'

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();

    const loginHandle = () => {
        console.log(email, password);
        dispatch(loginUSer({ email, password }))
    }

    return (
        <div>
            <div className='flex flex-column align-items-center'>
                <h3>Login</h3>
                <label>Email</label>
                <input type="email" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} /><br />
                <label>Password</label>
                <input type="password" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} /><br />
                <button onClick={loginHandle} className='mt-3'>Login</button>
            </div>
        </div>
    )
}

export default Login