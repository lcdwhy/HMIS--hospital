import axios from 'axios'
import store from '../store'


let instance = axios.create({
    // baseURL:"http://localhost:3000/",
    timeout:5000,
    // headers:{'Authentication-Token':store.state.token}
})

instance.interceptors.request.use(config => {
    config.headers['Authentication'] = sessionStorage.getItem("token")
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(result => {
    return result.data
}, err => {
    return Promise.reject(err)
})



export default instance;
