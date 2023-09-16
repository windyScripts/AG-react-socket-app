import Room from '../models/roomModel'

export const getAvailableRooms = async (findParams, sortParams=null,limit=null) => {
    return Room.find(findParams).sort(sortParams).limit(limit);
}

export const createRoom = async (params, session = null) => {
  const room = new Room(params);
  return room.save({session})
}

export const addRoomCreator = async (id,room,session = null) => {
room.creatorId = id;
return room.save({session})
}

export const deleteRoom = async (params, session = null) => {
    return Room.deleteOne(params, { session });
  };