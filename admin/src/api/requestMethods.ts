import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_ENDPOINT_ADMIN || "http://localhost:5000/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root") || '{}')?.user)?.currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzEwNzcwNjRiMmVmYjViNjJjZjViMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njg2NTk2MywiZXhwIjoxNjU3MTI1MTYzfQ.jlHLQPqsiXZEBW7nvwA22R-uE-2ISxvzhuLWSbIscAs"

console.log('TOKEN', TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})  
