import React, { useEffect, useState } from "react";
import UserService from "./userservice";
import { useDispatch, useSelector } from 'react-redux'
import './user.css';
import Popup from "./popup";

export const Users = () => {

    const [buttonPopup, setButtonPopup] = useState(false)

    const [modeldata,setModeldata] = useState({
        id:'',
        first_name:'',
        email:'',
        avatar:''
     })

     const showDetail = (user) =>
     { 
        setModeldata(user)
     }

    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.userData);
    console.log(userInfo);

    useEffect(() => {
        UserService.loadUsers(dispatch);
    }, [dispatch])

    const errorConainer = () => {
        return <div>Error in API</div>
    };

    const renderData = () => {
        console.log('renderData', userInfo);

        return userInfo?.error ? (
            errorConainer()
        ) : (
            <div style={{ display:"flex", justifyContent:"center", padding:"20px"}}>
                <table style={{height:"100%", width:"100%"}}>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                    {userInfo?.userList.map((user, index) => (<tr key={index}>
                        <td><button className="namePopup" onClick={() => { setButtonPopup(true); showDetail(user) }}>{user.id}</button></td>
                        <td>{user.email}</td>
                        <td>{user.first_name} </td>
                        <td>{user.last_name} </td>
                        <td><img src={user.avatar} alt="loading"/></td>
                    </tr>))}
                </table>

                <Popup trigger={buttonPopup} popupData={modeldata} setTrigger={setButtonPopup}>
            </Popup>
            </div>
        )
    }

    return renderData();

}

export default Users