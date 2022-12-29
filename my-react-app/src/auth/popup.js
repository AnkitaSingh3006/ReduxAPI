import React, { useState } from "react";
import './popup.css'
import { useDispatch } from "react-redux";
import UserService from "./userservice";
import config from "../config";

function Popup(props) {
    console.log('props', props)

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let { first_name, value } = e.target;
        setState({ ...state, [first_name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.updateUser(dispatch, config.userList);
        // UserService.updateUser(dispatch);
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={props.popupData.first_name} onChange={handleInputChange}></input><br />
                        <input type="text" value={props.popupData.last_name} onChange={handleInputChange}></input><br />
                        <input type="text" value={props.popupData.email} onChange={handleInputChange}></input><br />
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

export default Popup