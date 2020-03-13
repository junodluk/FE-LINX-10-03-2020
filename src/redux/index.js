import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import initial states
import citiesState from './cities/store';
import forecastState from './forecast/store';

// Import reducers
import citiesReducer from './cities/reducer';
import forecastReducer from './forecast/reducer';

// Import sagas
import citiesSaga from './cities/saga';
import forecastSaga from './forecast/saga';

const initialState = {
    cities: citiesState,
    forecast: forecastState
};

const rootReducer = combineReducers({
    cities: citiesReducer,
    forecast: forecastReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, initialState, enhancers);

sagaMiddleware.run(citiesSaga);
sagaMiddleware.run(forecastSaga);

export default store;
