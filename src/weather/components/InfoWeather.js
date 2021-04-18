import React, {useContext} from 'react';
import {Card} from 'antd'
import WeatherContext from '../context/weather-context'

const InfoWeather = () => {

    const context  = useContext(WeatherContext);
    const info = context.dataWeathers;
    return (
        <>
            <Card title="Du bao thoi tiet" bordered={true}>
                <p>- Thoi tiet: {info.clouds.all}</p>
                <p>- Chi tiet: {info.name}</p>
            </Card>
        </>
    );
}

export default InfoWeather;
