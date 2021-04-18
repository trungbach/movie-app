import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchWeather = (props) => {
    return (
        <>
            <Search placeholder="name of city" 
                    enterButton="Search" size="large" loading={props.loading}
                    onSearch={city => props.search(city)} />
        </>
    );
}

export default SearchWeather;
