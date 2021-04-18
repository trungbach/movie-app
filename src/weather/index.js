import React, {useContext} from 'react';
import WeatherProvider from './context/WeatherProvider';
import InfoWeather from './components/InfoWeather'
import MainWeather from './components/MainWeather'
import OtherWeather from './components/Other'
import WeatherContext from './context/weather-context';
import {helper} from './helper/common';

const App = () => {
    return (
        <WeatherProvider>
            <WeatherContext.Consumer> 
                {context => {
                    console.log(context);
                    if(!helper.isEmptyObject(context.dataWeathers)) {
                        return (
                            <>
                                <MainWeather />
                                <InfoWeather />
                                <OtherWeather />
                            </>
                        )
                    }
                }}
            </WeatherContext.Consumer>

        </WeatherProvider>
    );
}

export default App;
