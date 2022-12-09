import config from '../config';
import axios from 'axios';


const Communication = {

    async postMethod(endpoint,_data){
        const response = await axios.get(config.baseUrl + endpoint);
        return response.data;
    }
};

export default Communication;