import config from '../config';
import axios from 'axios';


const Communication = async (email,password) => {

    const response = await axios.post(config.baseUrl, {
        email,
        password
    });
    console.log(response.data);
    return response.data;
};

export default Communication;