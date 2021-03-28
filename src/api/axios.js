import axios from 'axios'
const cors = 'https://cors-wei-anywhere.herokuapp.com/'
const url = 'https://www.travel.taipei/open-api/'

// base url
const instance = axios.create({
  baseURL: `${cors}${url}`,
})

export default instance
