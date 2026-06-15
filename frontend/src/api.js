import axios from "axios";

// Menggunakan path relatif '/api'. 
// Vercel otomatis akan mengarahkannya ke backend Anda sendiri tanpa localhost!
const api = axios.create({
  baseURL: "/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("medis_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;