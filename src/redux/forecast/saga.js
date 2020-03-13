import { takeLatest, put, call, all } from 'redux-saga/effects';
import constants from './constants';
import api from '../../api';

import { fetchedForecast, selectedCity } from './actions';
import * as moment from 'moment';

const { SELECT_CITY } = constants;

export default function* watchSaga() {
    yield takeLatest(SELECT_CITY, forecastCitySaga);
}

export function* forecastCitySaga({ payload: city }) {
    yield put(selectedCity(city));

    if (!city) {
        yield put(fetchedForecast({}, {}));
        return;
    }

    try {
        const [
            { data: weekForecast },
            { current: currentWeather }
        ] = yield all([
            call(api.fetchForecast, city.name, city.countryCode),
            call(api.fetchCurrentWeather, city.name, city.countryCode)
        ]);
        const weekForecastData = sanitizeWeekForecast(weekForecast.list);
        const currentWeatherData = sanitizeCurrentForecast(currentWeather);
        yield put(fetchedForecast(weekForecastData, currentWeatherData));
    } catch (err) {
        yield put({ type: 'ACTION_FAIL', err });
    }
}

function sanitizeWeekForecast(list) {
    return list.map(({ dt, temp: { min, max }, weather, speed, clouds }) => ({
        id: dt,
        date: moment.unix(dt).toDate(),
        temperature: ((min + max) / 2).toFixed(1),
        iconCode: weather[0].icon,
        windSpeed: speed,
        clouds
    }));
}

function sanitizeCurrentForecast(data) {
    const {
        city: {
            _attributes: { name: cityName },
            coord: {
                _attributes: { lat: latitude, lon: longitude }
            },
            sun: {
                _attributes: { rise: sunRise, set: sunSet }
            }
        },
        temperature: {
            _attributes: { value: temperature }
        },
        clouds: {
            _attributes: { name: cloudiness }
        },
        weather: {
            _attributes: { icon: iconCode }
        },
        wind: {
            speed: {
                _attributes: {
                    value: windSpeed,
                    unit: windSpeedUnit,
                    name: windSpeedName
                }
            },
            direction: {
                _attributes: { value: windDirection, name: windDirectionName }
            }
        },
        pressure: {
            _attributes: { value: pressureValue, unit: pressureUnit }
        },
        humidity: {
            _attributes: { value: humidity }
        }
    } = data;
    return {
        cityName,
        temperature: Number.parseFloat(temperature).toFixed(1),
        cloudiness,
        iconCode: iconCode.replace('n', 'd'),
        date: moment().format('HH:mm MMM DD'),
        wind: `${windSpeedName}, ${windSpeed} ${windSpeedUnit}, ${windDirectionName} (${windDirection})`,
        pressure: `${pressureValue} ${pressureUnit}`,
        humidity: `${humidity}%`,
        sunRise: moment(sunRise).format('HH:mm'),
        sunSet: moment(sunSet).format('HH:mm'),
        coords: `[${latitude}, ${longitude}]`
    };
}
