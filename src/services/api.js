import axios from "axios";

const api = axios.create({
	baseURL: process.env.apiBaseURL || "http://192.168.0.19:3333"
});

export default api;
