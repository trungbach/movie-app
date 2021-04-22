import React from 'react';
import MasterLayoutMovie from '../../components/master-layout';

const PopularMoviePage = () => {
    return (
        <MasterLayoutMovie>
            <h1>This is popular pages</h1>
        </MasterLayoutMovie>
    );
}

export default React.memo(PopularMoviePage);
