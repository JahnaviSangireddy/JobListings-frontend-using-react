import axios from "axios"

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const getAllJobs = () => apiClient.get('/posts')

export const hireSomeOne = (jobPost) => apiClient.post('/post',jobPost)