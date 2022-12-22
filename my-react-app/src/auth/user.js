import React, { useEffect } from "react";
import UserService from "./userservice";
import { useDispatch, useSelector } from 'react-redux'

export const Users = () => {

    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.userData);
    console.log(userInfo);

    useEffect (() => {
        UserService.loadUsers(dispatch);
    },[dispatch])

    const errorConainer = () => {
        return <div>Error in API</div>
    };

    const renderData = (userInfo) => {

        return userInfo.error ? (
            errorConainer()
        ) : (
            <div>
                <div>
                    <div>ID</div>
                    <div>EMAIL</div>
                    <div>FIRST NAME</div>
                    <div>LAST NAME</div>
                    <div>LAST NAME</div>
                </div>
                {userInfo.userList.map((user, index) => (
                    <div key={index}>
                        <div>{user.id} </div>
                        <div>{user.email}</div>
                        <div>{user.first_name} </div>
                        <div>{user.last_name} </div>
                        <div>{user.avatar} </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default Users