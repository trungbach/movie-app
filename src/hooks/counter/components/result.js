import React from 'react';

const ResultComponent = (props) => {
    return (
        <>
            <h1>{props.count}</h1> 
        </>
    );
}

// ResultComponent.propTypes = {
//     count: PropTypes.number
// }

export default ResultComponent;
