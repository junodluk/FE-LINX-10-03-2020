import constants from './constants';

const { FETCH_AUTOCOMPLETE_CITIES, FETCHED_AUTOCOMPLETE_CITIES, FETCHING_AUTOCOMPLETE_CITIES } = constants;

export const fetchCities = term => ({
    type: FETCH_AUTOCOMPLETE_CITIES,
    payload: term
});

export const fetchedCities = (results = []) => ({
    type: FETCHED_AUTOCOMPLETE_CITIES,
    payload: results
});

export const fetchingCities = status => ({
    type: FETCHING_AUTOCOMPLETE_CITIES,
    payload: status
});
