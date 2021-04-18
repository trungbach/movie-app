import React, {useContext} from 'react';
import {Card} from 'antd'
import WeatherContext from '../context/weather-context'

const OtherWeather = () => {

    const context  = useContext(WeatherContext);
    const info = context.dataWeathers;

    return (
        <>
            <Card title="Du bao thoi tiet" bordered={true}>
                <p>- Suc gio: {info.wind.speed} </p>
                <p>- Tam nhin xa: {info.wind.deg}</p>
                <p>- Luong mua: {info.timezone}</p>
            </Card>
        </>
    );
}

export default OtherWeather;
