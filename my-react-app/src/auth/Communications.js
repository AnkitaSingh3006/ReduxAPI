import config from '../config';
import axios from 'axios';


const Communication = {

    async postMethod(_data){
        const response = await axios.post(config.baseUrl,_data);
        return response.data;
    }
};

export default Communication;