import Button from './components/button';
import ResultComponent from './components/result';
import React, {useState} from 'react';
const AppHookCounter = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <ResultComponent count={count} />
            <Button type="button" click={() => setCount(count+1)}>+</Button>
            <Button type="button" click={() => setCount(count-1)}>-</Button>
        </>
    )
}

export default AppHookCounter;