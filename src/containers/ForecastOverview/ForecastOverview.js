import React from 'react';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import { MagnifyingGlassIcon } from '../../assets/icons';
import StyledForecastOverview from './ForecastOverview.styled.js';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import ForecastCard from './ForecastCard/ForecastCard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../../redux/cities/actions';
import { selectCity } from '../../redux/forecast/actions';
import { objIsEmpty } from '../../utils';

const ForecastOverview = ({ cities, forecast: { selectedCity, weekForecast, currentWeather }, actions }) => {
    return (
        <StyledForecastOverview expand={objIsEmpty(currentWeather)}>
            <Container fluid>
                <Row>
                    <Col col="12">
                        <h2 style={{ marginTop: '65px' }}>Welcome</h2>
                    </Col>
                </Row>
                <Row>
                    <Col col="12">
                        <h1>Select a City</h1>
                    </Col>
                </Row>

                <Row>
                    <Col col="12">
                        <Autocomplete
                            id="search-input"
                            className="search-input"
                            placeholder="Search by city"
                            value={selectedCity}
                            change={actions.selectCity}
                            filter={actions.fetchCities}
                            options={cities.autocompleteOptions}
                            icon={<MagnifyingGlassIcon width="35px" />}
                        />
                    </Col>
                </Row>

                {weekForecast && weekForecast.length > 0 && (
                    <React.Fragment>
                        <Row>
                            <Col col="12">
                                <p>Forecast for the week:</p>
                            </Col>
                        </Row>

                        <Row>
                            {weekForecast.map(item => (
                                <Col key={item.id} col="3">
                                    <ForecastCard {...item} />
                                </Col>
                            ))}
                        </Row>
                    </React.Fragment>
                )}
            </Container>
        </StyledForecastOverview>
    );
};

const mapStateToProps = state => ({
    cities: { ...state.cities },
    forecast: { ...state.forecast }
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCities, selectCity }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastOverview);
