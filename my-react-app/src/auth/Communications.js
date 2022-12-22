import config from '../config';
import axios from 'axios';
import { configuration } from '../config';


const Communication = {

    async postMethod(_data){
        const response = await axios.post(config.baseUrl,_data);
        return response.data;
    },

    async getMethod(userData){
        const result = await axios.get(configuration.baseUrl,userData);
        console.log('result from user list',result.data.data);
        return result.data.data;
    }
};

export default Communication;