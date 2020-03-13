import React from 'react';
import AppStyled from './App.styled.js';

import Toolbar from '../Toolbar/Toolbar.js';
import ForecastOverview from '../ForecastOverview/ForecastOverview';
import ForecastDetail from '../ForecastDetail/ForecastDetail';

export default () => {
    return (
        <AppStyled>
            <Toolbar></Toolbar>
            <ForecastOverview />
            <ForecastDetail />
        </AppStyled>
    );
};
