import validator from 'validator'

const validate = (data)=>{
    if(!validator.isEmail(data.email)){
        throw new Error("Invalid Email")
    }

    if(!validator.isStrongPassword(data.password)){
        throw new Error("Weak password")
    }
}

export default validate