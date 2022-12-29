import React, { useEffect, useState } from "react";
import UserService from "./userservice";
import { useDispatch, useSelector } from 'react-redux'
import Popup from "./popup";
import config from "../config";

export const Users = () => {

    const [buttonPopup, setButtonPopup] = useState(false)

    const [modeldata, setModeldata] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
    })

    const showDetail = (user) => {
        setModeldata(user);
        setButtonPopup(true);
    }

    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.userData);
    console.log(userInfo);

    useEffect(() => {
        UserService.loadUsers(dispatch, config.userList);
    }, [dispatch])

    const deleteUser = (id) => {
        alert(id);
        if (window.confirm("Are you sure wanted to delete the user?")) {
            UserService.deleteUser(dispatch, config.userList + '/' + id);
        }
    }

    const errorConainer = () => {
        return <div>Error in API</div>
    };

    const renderData = () => {
        console.log('renderData', userInfo);

        return userInfo?.error ? (
            errorConainer()
        ) : (
            <div style={{ display: "flex", justifyContent: "center", padding: "20px"}}>
                <table style={{ height: "100%", width: "100%"}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    {userInfo?.userList.map((user, index) => (
                        <tbody>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name} </td>
                                <td>{user.last_name} </td>
                                <td><img src={user.avatar} alt="loading" /></td>
                                <td><button className="namePopup" onClick={() => { showDetail(user) }}>Update</button></td>
                                <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        </tbody>))}
                </table>

                <Popup trigger={buttonPopup} popupData={modeldata} setTrigger={setButtonPopup}>
                </Popup>
            </div>
        )
    }

    return renderData();

}

export default Users