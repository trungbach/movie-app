import React, {useState} from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Result from './components/Result';

const App = () => {

    const [valueA, setValueA] = useState();
    const [valueB, setValueB] = useState();
    const [valueC, setValueC] = useState();
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        value = Number.parseFloat(value);
        let name = e.target.name;
        if(name === 'a') setValueA(value);
        else if(name === 'b') setValueB(value);
        else setValueC(value);
    }

    const solveEquation = () => {
        let delta = valueB * valueB - 4 *  valueC * valueA;
        if(delta < 0) {
            setResult('pt vo nghiem!');
        }else if(delta === 0) {
            let x = - valueB / (2*valueA);
            setResult(`pt co ng kep x = ${x}`);
        } else if(delta > 0) {
            let x1 =  (-valueB + Math.sqrt(delta))/(2*valueA); 
            let x2 =  (-valueB - Math.sqrt(delta))/(2*valueA); 
            setResult(`pt co 2 nghiem: x1 = ${x1} va x2 = ${x2}`);
        }
    }

    return (
        <>
            <label>hs a</label> <Input type='text' value={valueA} name='a'  change={handleChange}/>   <br/>
            <label>hs b</label> <Input type='text' value={valueB} name='b' change={handleChange}/>   <br/>
            <label>hs c</label> <Input type='text'  value={valueC} name='c' change={handleChange}/>  <br/>
            <Button type="button" onClick={solveEquation}/>
            <Result result={result} /> 
        </>
    );
}

export default App;
