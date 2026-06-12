
export function setUserData(data){
    console.log(data.user)
    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem('token', data.token)
}

export function getLocalData(){
    return JSON.parse(localStorage.getItem('user'))
}