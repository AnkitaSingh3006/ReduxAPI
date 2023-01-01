import React, { useState, useCallback, memo, useEffect } from "react";
import './popup.css'
import { useDispatch } from "react-redux";
import UserService from "./userservice";
import config from "../config";

function Popup(props) {
    console.log('props', props)

    const [userData, setUserData] = useState(props.popupData)

    useEffect(() => {
        setUserData(props.popupData);
    },[props.popupData])

    const dispatch = useDispatch();

    const handleInputChange = useCallback((e) => {
        let { value } = e.target;
        setUserData({ ...userData, [name]: value })
    },[userData])

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.updateUser(dispatch, config.userList + '/' + userData.id);
        // UserService.updateUser(dispatch);
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="first_name" value={userData.first_name} onChange={handleInputChange}></input><br />
                        <input type="text" name="last_name" value={userData.last_name} onChange={handleInputChange}></input><br />
                        <input type="text" name="email" value={userData.email} onChange={handleInputChange}></input><br />
                        <button type="Submit">Update</button>
                    </form>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th> 
                                <th>Avatar</th>   
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{props.popupData.id}</td>
                              <td>{props.popupData.first_name}</td>
                              <td>{props.popupData.email}</td> 
                              <td><img src={props.popupData.avatar} alt="loading"/></td>   
                           </tr>  
                        </tbody>
                    </table> */}

                </div>
            </div>
        </div>
    ) : "";
}

export default memo (Popup)