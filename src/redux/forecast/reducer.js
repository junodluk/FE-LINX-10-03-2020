import constants from './constants';
import initialState from './store';

const {
    FETCHING_FORECAST,
    FETCHED_FORECAST,
    SELECTED_CITY,
    ACTIVE_FORECAST_DETAIL
} = constants;

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_FORECAST:
            return {
                ...state,
                fetchingForecast: payload
            };
        case SELECTED_CITY:
            return {
                ...state,
                selectedCity: payload
            };
        case FETCHED_FORECAST:
            return {
                ...state,
                weekForecast: payload.weekForecastData,
                currentWeather: payload.currentWeatherData
            };
        case ACTIVE_FORECAST_DETAIL:
            return {
                ...state,
                forecastData: payload
            };
        default:
            return state;
    }
};

export default reducer;
