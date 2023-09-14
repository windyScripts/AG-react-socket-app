import { Router } from "express";
import { addRoom, getOpenRooms, saveRoomScores } from "../controllers/room.js";

const router = Router();

router.post('/room',addRoom);
router.get('/rooms',getOpenRooms);
router.post('/score',saveRoomScores)

export default router;