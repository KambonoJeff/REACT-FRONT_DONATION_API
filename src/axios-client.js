import axios from "axios";
const BASEURL = 'http://localhost:8000'
const axiosClient = axios.create({
    baseURL: `${BASEURL}/api`
})
axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    
    return config;
})
axiosClient.interceptors.response.use((response)=>{
    return response;
},
(error)=>{
    const {response} = error;
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN')
    }else{
        throw error;
    }
})
export default axiosClient;