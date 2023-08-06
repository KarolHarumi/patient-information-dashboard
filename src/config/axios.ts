import axios from 'axios'

const URL = "http://localhost:4000/";

export const axiosConfig = axios.create({
  baseURL: URL,
})
