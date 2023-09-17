import { Router } from "express";
import { addRoom, getOpenRooms, joinRoom, endGame, setExpiry} from "../controllers/room.js";
import { getScores } from "../controllers/user.js";
const router = Router();

router.post('/room',addRoom);
router.get('/rooms',getOpenRooms);
router.put('/join',joinRoom);
router.post('/end',endGame);
router.get('/scores',getScores)
router.post('/expiry',setExpiry)

export default router;