import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://linktree-l6jp.onrender.com/api',
});

export default instance;
