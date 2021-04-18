import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    console.log('btn components da duoc render');
    return (
        <button type={props.type} onClick={props.onClick}
        >
            Solve
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default React.memo(Button);
// export default Button;
