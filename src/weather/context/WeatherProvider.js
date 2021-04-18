import React, {useState} from 'react';
import SearchWeather from '../components/Search';
import {apiWeather} from '../services/api';
import {Row, Col} from 'antd';
import WeatherContext from './weather-context';
import {helper} from '../helper/common';

const WeatherProvider = (props) => {
   
    const [loading, setLoading] = useState(false);
    const [dataWeathers, setDataWeathers] = useState({});

    const getDataFromApi = async (city='') => {
        setLoading(true);
        const data = await apiWeather.getDateWeatherCity(city);
        console.log(data);
        if(!helper.isEmptyObject(data)) {
            if(data.cod === 200) {
                setDataWeathers(data);
            }
        }
        setLoading(false);
    }
    return (
        <>
            <Row style={{marginTop: '20px'}}>
                <Col span={16} offset={4}>
                    <SearchWeather 
                        loading={loading}
                        search={getDataFromApi}
                    />
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col span={20} offset={2}>
                    <WeatherContext.Provider value={{loading, dataWeathers}}>
                        {props.children}
                    </WeatherContext.Provider>
                </Col>
            </Row>
        </>
    )
}

export default WeatherProvider;