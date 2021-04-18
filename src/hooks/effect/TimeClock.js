import React, {useEffect, useState} from 'react';

const TimeClock = () => {

    const [timeString, setTimeString] = useState(null);

    useEffect(() => {
        let intervalTime = setInterval(() => {
            const now = new Date();
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const seconds = `0${now.getSeconds()}`.slice(-2);
            const currentTime = `${hours}:${minutes}:${seconds}`;
            setTimeString(currentTime);
        },1000)
        return () => {
            clearInterval(intervalTime);
        }
    }, []);

    return (
        <h1>
           Current time: {timeString} 
        </h1>
    );
}

export default TimeClock;
