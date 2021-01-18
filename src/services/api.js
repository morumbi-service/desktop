  
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://3.22.224.109:3333'
})

export default api