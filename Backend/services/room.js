import Room from '../models/roomModel'

export const getAvailableRooms = (findParams, sortParams=null,limit=null) => {
    return Room.find(findParams).sort(sortParams).limit(limit);
}