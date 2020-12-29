import axios from "axios"

const baseUrl = "http://localhost:8080"
let token

async function Login(username, password) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + "/api/user/login", {
            username: username,
            password: password
        }).then(response => {
            token = response.data.token
            console.log(token)
            localStorage.setItem("username", username)
            localStorage.setItem("token", token)
            resolve()
        }).catch(err => {
            reject(err)
        })
    })
}

async function Register(username, password) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + "/api/user/register", {
            username: username,
            password: password
        }).then(response => {
            token = response.data.token
            console.log(token)
            localStorage.setItem("username", username)
            localStorage.setItem("token", token)
            resolve()
        }).catch(err => {
            reject(err)
        })
    })
}

export { Login, Register, token }