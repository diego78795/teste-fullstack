import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3333/"
})

const loginApi = async (user) => {
    const data = await api.post("/auth/login", user)
return data
}

const registerApi = async (user) => {
    const data = await api.post("/auth/register",user)
return data
}

const getUserApi = async (id) => {
    const data = await api.get("/users/"+{id})
return data
}

const editUserApi = async (user,id) => {
    const data = await api.put("/users/"+{id},user)
return data
}

const modifyPasswordApi = async (passwords,id) => {
    const data = await api.patch("/users/"+{id},passwords)
return data
}

const deleteUserApi = async (id) => {
    const data = await api.delete("/users/"+{id})
return data
}

export{ api, loginApi, registerApi, getUserApi, editUserApi, modifyPasswordApi, deleteUserApi }