const GameListEntry = ({key,name}) => {
    const joinRoomHandler = () => {
        // add user's socket id to room, change user's view to game, start timer for both users
    }
    return (<div id={`Room${key}`}>
<div>{name}</div><button onClick={joinRoomHandler}>Join Room</button>
    </div>)
}

export default GameListEntry