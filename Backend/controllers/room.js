import { createRoom, addRoomCreator, deleteRoom, getAvailableRooms } from "../services/room";
import { createScore } from "../services/score";

export const addRoom = async (req,res) => {
    let room = null;
  let name;
  let userId;
  try {
    const creatorId = req.user.id;
    userId = req.user.id;
    name = req.body.name;
    room = await createRoom({ creatorId, name });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const creatorId = req.user.id;
    await addRoomCreator(creatorId, group, session);
    await session.commitTransaction();
    await session.endSession();
    return res.status(200).json({ message: `group ${name} created successfully.` });
  } catch (err) {
    const p1 = session.abortTransaction();
    const p2 = deleteRoom(room);
    const p3 = session.endSession();
    await Promise.all([p1, p2]);
    await p3;
    console.log(err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

export const getOpenRooms = async (req,res) => {
    try {
        const roomCap = 10;
        return await getAvailableRooms({participantId:undefined},{sort:{date:-1}},roomCap);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
      }
}

export const endGame = (req,res) => {
// remove users from room, save scores, redirect users to result page.
}

const saveRoomScores = async (req,res) => {
 try{
    // set up values, first figure out payload from client
    await createScore()
} catch(err){
    console.log(err);
    return res.status(500).json({message: 'Something went wrong'})
}
}

export const joinRoom = (req,res) => {
    // join empty room
    // add second person to room
    // start game, set timer for 65 seconds from point of initialization.
}

export const setExpiry = (req,res) => {
    
}