import React, {useState} from 'react';
import TimeClock from './TimeClock';

const App = () => {

    const [showTime, setShowTime] = useState(true);
    
    const showHideTime = () => {
        setShowTime(false)
    }
    return (
        <>
           {showTime && <TimeClock />}
            <button onClick={()=>showHideTime()}>Remove Clock</button>
        </>
    );
}

export default App;
