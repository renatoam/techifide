import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'https://restcountries.com/v3.1/'
})

httpClient.interceptors.request.use(config => {
  console.log('[token]: ', config.headers.Authorization ?? 'No auth configured.')
  console.log(config.baseURL, { config })

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
