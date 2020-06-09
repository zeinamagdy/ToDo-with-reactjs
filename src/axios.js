import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://todo-31dc6.firebaseio.com/'
})

export default axiosInstance