import { put, call, debounce } from 'redux-saga/effects';
import constants from './constants';
import { fetchedCities } from './actions';

import api from '../../api';

const { FETCH_AUTOCOMPLETE_CITIES } = constants;

export function* fetchCities({ payload }) {
    const preparedValue = payload.trim().replace(' ', '+');

    if (preparedValue.length < 3) {
        yield put(fetchedCities());
        return;
    }

    try {
        const {
            data: { data }
        } = yield call(api.fetchCities, preparedValue);
        
        const cities = data.map(
            ({ id, city, country, region, countryCode }) => ({
                geoDbId: id,
                name: city,
                countryCode,
                label: `${city}, ${region}, ${country}`
            })
        );
        yield put(fetchedCities(cities));
    } catch (err) {
        yield put({ type: 'ACTION_FAIL', err });
    }
}

export default function* debounceAutocomplete() {
    yield debounce(500, FETCH_AUTOCOMPLETE_CITIES, fetchCities);
}
