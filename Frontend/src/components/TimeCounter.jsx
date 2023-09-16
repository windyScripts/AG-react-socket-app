const TimeCounter = (date) => {
    const currentDate = new Date;
    const currentSeconds = currentDate.getSeconds();
    const timeLimit = date.getSeconds() + 60;
    return (<div><p>Time remaining : {timeLimit - currentSeconds} seconds</p></div>)
}

export default TimeCounter