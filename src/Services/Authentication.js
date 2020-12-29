import axios from "axios"

const baseUrl = "http://localhost:8080"
let token

let getRole = async () => {
    let header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    return new Promise((resolve, reject) => {
        axios.get(baseUrl + "/api/user/role", {
            headers: header
        }).then(response => {
            console.log(response.data.role)
            // localStorage.setItem("role", response.data.role)
            resolve(response.data.role)
        })
            .catch(err => reject(err))
    })
}

async function Login(username, password) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + "/api/user/login", {
            username: username,
            password: password
        }).then(async response => {
            token = response.data.token
            console.log(token)
            localStorage.setItem("username", username)
            localStorage.setItem("token", token)
            let role = await getRole()
            console.log(role)
            localStorage.setItem("role", "" + role)
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