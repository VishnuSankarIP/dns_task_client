import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dns-task-server-1.onrender.com',
 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export default instance;