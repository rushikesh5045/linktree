import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://linktree-l6jp.onrender.com/api',
});

export default instance;
