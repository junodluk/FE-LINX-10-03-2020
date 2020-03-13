import { fetchCities, fetchedCities, fetchingCities } from './actions';
import citiesReducer from './reducer';
import contants from './constants';

describe('fetchCities', () => {
    test('returns an action with correct type and search term', () => {
        const action = fetchCities('São Paulo');
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCH_AUTOCOMPLETE_CITIES);
        expect(action.payload).toBe('São Paulo');
    });
});

describe('fetchedCities', () => {
    describe('if there is an array as parameter', () => {
        test('returns an action with correct type and autocomplete options', () => {
            const action = fetchedCities([1, 2, 3, 4, 5]);
            expect(action).toBeTruthy();
            expect(action.type).toBe(contants.FETCHED_AUTOCOMPLETE_CITIES);
            expect(action.payload).toBeTruthy();
            expect(action.payload.length).toBe(5);
        });
    });

    describe('if there is no parameter', () => {
        test('returns an action with correct type and an empty array', () => {
            const action = fetchedCities();
            expect(action).toBeTruthy();
            expect(action.type).toBe(contants.FETCHED_AUTOCOMPLETE_CITIES);
            expect(action.payload).toBeTruthy();
            expect(action.payload.length).toBe(0);
        });
    });
});

describe('fetchingCities', () => {
    test('returns an action with correct type and payload (true or false)', () => {
        let action = fetchingCities(true);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCHING_AUTOCOMPLETE_CITIES);
        expect(action.payload).toBe(true);

        action = fetchingCities(false);
        expect(action).toBeTruthy();
        expect(action.type).toBe(contants.FETCHING_AUTOCOMPLETE_CITIES);
        expect(action.payload).toBe(false);
    });
});

describe('citiesReducer', () => {
    let initialState = {
        cant_touch_this: 'hammer'
    };
    let state;
    beforeEach(() => {
        state = citiesReducer(initialState, {});

        expect(state).toBeTruthy();
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
    });

    test('receive a KNOWN action, update state while not overriding previous state', () => {
        state = citiesReducer(state, fetchedCities([1, 2, 3, 4, 5]));

        expect(state).toBeTruthy();
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
        expect(state.autocompleteOptions).toBeTruthy();
    });

    test('receive a UNKNOWN action and does not override previous state', () => {
        const prevState = { ...state };

        state = citiesReducer(state, {
            type: 'NOT_AN_ACTION',
            payload: 'nail'
        });

        expect(state).toEqual(prevState);
        expect(state.cant_touch_this).toBeTruthy();
        expect(state.cant_touch_this).toBe('hammer');
    });
});
