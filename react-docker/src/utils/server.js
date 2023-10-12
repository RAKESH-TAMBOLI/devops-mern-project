import axios from 'axios'
export const server = axios.create({

    //developer mode 
    baseURL: 'http://192.168.0.119:5000/',
    responseType: 'json',
    headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // // Authorization: `Bearer ${localStorage.getItem("token")}`,
        // 'Content-Type': 'application/json',
    },
});