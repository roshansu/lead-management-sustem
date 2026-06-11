
export function setUserData(data){
    JSON.parse(localStorage.setItem("user", data.user))
    localStorage.setItem('token', data.token)
}