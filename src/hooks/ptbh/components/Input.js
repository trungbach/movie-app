import React from 'react';
import PropTypes from 'prop-types';


const Input = (props) => {
    return (
        <input type={props.type} 
               name={props.name}
               defaultValue={props.value} 
               onChange={props.change}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
}

export default Input;
