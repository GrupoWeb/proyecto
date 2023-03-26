import axios from 'axios'
// import { useUserStore } from "@/store";

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
axios.defaults.headers.common.Accept = 'application/json'

//axios.defaults.headers.Authorization = 'Bearer ' + sessionStorage.access_token

// const store = useUserStore();

axios.interceptors.request.use(config => {
    // store.isLoader = true;
    config.headers.Authorization = 'Bearer ' + sessionStorage.access_token
    return config
}, (error) => {
    // store.isLoader = false;
    Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    // store.isLoader = false;
    return response
}, (error) => {
    // store.isLoader = false;
    if (error.response.status === 403) {
        //window.location.href = "/"
    }

    if (error.response.status !== 401) {
        return Promise.reject(error)
    }

    const originalRequestConfig = error.config
    return axios.post('/api/v1/f/refresh')
        .then((response) => {
            sessionStorage.access_token = response.data.access_token
            originalRequestConfig.headers.Authorization = 'Bearer ' + response.data.access_token
            return axios.request(originalRequestConfig)
        })
        .catch(error => {
            Promise.reject(error)
        })
})
export default axios