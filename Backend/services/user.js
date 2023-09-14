import User from '../models/userModel'

export const createUser = (params) => {
const user = new User(params);
return user.save();
}

export const findOneUser = (params) => {
    return User.findOne(params);
}

export const getUserGameScore = (params) => {
    
}

export const saveUser = (user,session=null) => {
    return user.save({session})
}

export const getUserSocketId = () => {
    
}