import React from 'react';

const Button = (props) => {
    return (
        <>
            <button
                type={props.type}
                onClick={props.click}
            >
                {props.children}    
            </button>   
        </>
    );
}

// Button.propTypes = {
//     type: propTypes.string,
//     children: propTypes.node
// }
export default Button;
