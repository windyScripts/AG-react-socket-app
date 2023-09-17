// get request result for rooms, if there are any, show them. Else redirect to create room
import { getOpenRooms } from "../../../Backend/controllers/room"
import GameListEntry from "./GameListEntry";

const GameList = () => {
    [rooms,setRooms] = useState(<p>No values</p>);
    useEffect(()=>{getOpenRooms().then(result => setRooms(result.map(e => {})))},[])
    return
}

export default GameList