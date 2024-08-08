import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://linktree-l6jp.onrender.com',
});

export default instance;
