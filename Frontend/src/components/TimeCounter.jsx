const TimeCounter = (date) => {
    const currentDate = new Date;
    const currentSeconds = currentDate.getSeconds();
    const timeLimit = date.getSeconds() + 60;
    return (<div><p>Time remaining : {timeLimit - currentSeconds} seconds</p></div>)
}

export const timeRemaining = (date) => {
    const currentDate = new Date;
    const currentSeconds = currentDate.getSeconds();
    const timeLimit = date.getSeconds() + 60;
    return timeLimit - currentSeconds;
}

export default TimeCounter