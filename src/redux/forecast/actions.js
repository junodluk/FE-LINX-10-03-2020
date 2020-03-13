import constants from './constants';

const {
    FETCHING_FORECAST,
    FETCHED_FORECAST,
    SELECT_CITY,
    SELECTED_CITY
} = constants;

export const selectCity = city => ({
    type: SELECT_CITY,
    payload: city
});

export const selectedCity = city => ({
    type: SELECTED_CITY,
    payload: city
});

export const fetchingForecast = status => ({
    type: FETCHING_FORECAST,
    payload: status
});

export const fetchedForecast = (weekForecastData, currentWeatherData) => ({
    type: FETCHED_FORECAST,
    payload: { weekForecastData, currentWeatherData }
});
