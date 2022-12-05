import config from '../config';
import axios from 'axios';


const Communication = {

    async getMethod(){
        const response = await axios.get(config.baseUrl);
        console.log(response.data);
        return response.data;
    }
};

export default Communication;