import axios from 'axios';
import KEYS from './config.json';
import { xml2json } from 'xml-js';

const geoDBInstance = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
    headers: {
        common: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': KEYS.GeoDB
        }
    }
});

const openWeatherInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
});

const api = {
    fetchCities: (term, limit = 5) => {
        return geoDBInstance.get(
            `cities?namePrefix=${term}&limit=${limit}&types=CITY`
        );
    },
    fetchForecast: (city, country) => {
        return openWeatherInstance.get(
            `forecast/daily?q=${city},${country}&appid=${KEYS.OpenWeather}&cnt=7&units=metric`
        );
    },
    fetchCurrentWeather: (city, country) => {
        // Fui forçado a utilizar XML pois o objeto JSON provido pelo OpenWeatherMap
        // não retorna as informações de forma completa como o XML.
        // Isso apenas implicará em uma sanitização um pouco mais extensa dos dados do que o esperado.
        return openWeatherInstance
            .get(
                `weather?q=${city},${country}&appid=${KEYS.OpenWeather}&units=metric&mode=xml`
            )
            .then(response =>
                JSON.parse(xml2json(response.data, { compact: true }))
            );
    }
};

export default api;
