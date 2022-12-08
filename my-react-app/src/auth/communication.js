import config from '../config';
import axios from 'axios';


const Communication = async (email,password) => {

    return axios.post(config.baseUrl+"LOGIN",{
        email,
        password
    }).then((response)=>{
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data
    })

};

export default Communication;