import {
    selectCity,
    selectedCity,
    fetchedForecast,
    fetchingForecast
} from './actions';
import forecastReducer from './reducer';
import contants from './constants';

const defaultCity = {
    geoDbId: 9499,
    name: 'Blumenau',
    countryCode: 'BR',
    label: 'Blumenau, Santa Catarina, Brazil'
};

describe('selectCity', () => {
    test('returns an action with correct type and payload', () => {
        const action = selectCity(defaultCity);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.SELECT_CITY);
        expect(action.payload).toBeTruthy();
        expect(action.payload.name).toBe('Blumenau');
        expect(action.payload.countryCode).toBe('BR');
    });
});

describe('selectedCity', () => {
    test('returns an action with correct type and payload', () => {
        const action = selectedCity(defaultCity);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.SELECTED_CITY);
        expect(action.payload).toBeTruthy();
        expect(action.payload.name).toBe('Blumenau');
        expect(action.payload.countryCode).toBe('BR');
    });
});

describe('fetchingForecast', () => {
    test('returns an action with correct type and payload (true or false)', () => {
        let action = fetchingForecast(true);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCHING_FORECAST);
        expect(action.payload).toBe(true);
        
        action = fetchingForecast(false);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCHING_FORECAST);
        expect(action.payload).toBe(false);
    });
});

describe('fetchedForecast', () => {
    test('returns an action with correct type and payload', () => {
        const action = fetchedForecast({}, {});
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCHED_FORECAST);
        expect(action.payload).toBeTruthy();
        expect(action.payload.weekForecastData).toBeTruthy();
        expect(action.payload.currentWeatherData).toBeTruthy();
    });
});

describe('forecastReducer', () => {
    let initialState = {
        cant_touch_this: 'hammer'
    };
    let state;
    beforeEach(() => {
        state = forecastReducer(initialState, {});

        expect(state).toBeTruthy();
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
    });

    test('receive a KNOWN action, update state while not overriding previous state', () => {
        state = forecastReducer(state, selectedCity(defaultCity));

        expect(state).toBeTruthy();
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
        expect(state.selectedCity).toBeTruthy();
    });

    test('receive a UNKNOWN action and does not override previous state', () => {
        const prevState = { ...state };

        state = forecastReducer(state, {
            type: 'NOT_AN_ACTION',
            payload: 'nail'
        });

        expect(state).toEqual(prevState);
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
    });
});
