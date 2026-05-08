import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://kb-figma-2-unch.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
