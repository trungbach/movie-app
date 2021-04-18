import React, {useContext} from 'react';
import {Card} from 'antd';
import WeatherContext from '../context/weather-context'

const MainWeather = () => {

    const context  = useContext(WeatherContext);
    const info = context.dataWeathers.main;
    return (
        <>
            <Card title="Du bao thoi tiet" bordered={true}>
                <p>- Nhiet do: {info.temp_min}</p>
                <p>- Ap suat: {info.pressure}</p>
                <p>-Do am: {info.humidity}</p>
            </Card>
        </>
    );
}

export default MainWeather;
