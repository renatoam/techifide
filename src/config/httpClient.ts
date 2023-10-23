import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'https://restcountries.com/v3.1'
})

httpClient.interceptors.request.use(config => {
  if (!config.headers.Authorization)
  console.log('No auth configured.')

  return config
})

httpClient.interceptors.response.use(config => {
  return config
}, errorConfig => {
  return {
    status: errorConfig.response.status,
    message: errorConfig.response.data.message
  }
})

export default httpClient
