  
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://18.233.67.251:3333/'
})

export default api