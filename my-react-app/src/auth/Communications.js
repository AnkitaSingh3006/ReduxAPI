import config from '../config';
import axios from 'axios';

const Communication = {

    async postMethod(_data, path) {
        const response = await axios.post(config.baseUrl + path, _data);
        return response.data;
    },

    async getMethod(path) {
        const result = await axios.get(config.baseUrl + path);
        console.log('result from user list', result.data.data);
        return result.data.data;
    },

    async putMethod(_data, path) {
        const response = await axios.put(config.baseUrl + path, _data);
        return response.data;
    },

    async deleteMethod(_data, path) {
        const response = await axios.delete(config.baseUrl + path);
        return response.data;
    },

};

export default Communication;