import constants from './constants';
import initialState from './store';

const { FETCHED_AUTOCOMPLETE_CITIES, FETCHING_AUTOCOMPLETE_CITIES } = constants;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_AUTOCOMPLETE_CITIES:
            return {
                ...state,
                fetchingCities: action.payload
            };
        case FETCHED_AUTOCOMPLETE_CITIES:
            return {
                ...state,
                autocompleteOptions: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
