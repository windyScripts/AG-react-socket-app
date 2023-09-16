import User from '../models/userModel'

export const createUser = async (params) => {
const user = new User(params);
return user.save();
}

export const findOneUser = async (params) => {
    return User.findOne(params);
}

export const getUserGameScore = async (params) => {
    
}

export const saveUser = async (user,session=null) => {
    return user.save({session})
}

export const getUserSocketId = async (userId) => {
    return User.findOne({userId}).currentSocketId
}