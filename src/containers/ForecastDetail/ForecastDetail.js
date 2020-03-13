import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import StyledForecastDetail from './ForecastDetail.styled.js';
import DetailItem from './DetailItem/DetailItem';
import * as Colors from '../../assets/colors';
import {
    MistIcon,
    SnowIcon,
    ThunderStormIcon,
    SunIcon,
    RainSunIcon,
    RainIcon,
    CloudSunIcon,
    CloudIcon
} from '../../assets/icons/index.js';
import { connect } from 'react-redux';
import { objIsEmpty } from '../../utils/index.js';

const weatherIcons = {
    '01d': <SunIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '01n': <SunIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '02d': <CloudSunIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '03d': <CloudIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '04d': <CloudIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '09d': <RainIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '10d': <RainSunIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '11d': <ThunderStormIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '13d': <SnowIcon color={Colors.PRIMARY_LIGHT} width="90px" />,
    '50d': <MistIcon color={Colors.PRIMARY_LIGHT} width="90px" />
};

const ForecastDetail = ({ currentWeather }) => {
    return (
        <StyledForecastDetail show={!objIsEmpty(currentWeather)}>
            <Container fluid className="container">
                <Row justifyContent>
                    <Col col="8">
                        <h2>Today</h2>
                        <h1>{currentWeather.cityName}</h1>
                    </Col>
                    <Col col="4" style={{ textAlign: 'right' }}>
                        {weatherIcons[currentWeather.iconCode]}
                    </Col>
                </Row>

                <Row className="details-center">
                    <Col col="12">
                        <span className="temperature">
                            {currentWeather.temperature}
                        </span>
                    </Col>
                    <Col col="12">
                        <span className="clouds" style={{ marginTop: '15px' }}>
                            {currentWeather.cloudiness}
                        </span>
                        <span className="timestamp">{currentWeather.date}</span>
                    </Col>
                </Row>

                <Row className="details-bottom">
                    <Container fluid>
                        {currentWeather.wind && (
                            <DetailItem
                                title="Wind"
                                content={currentWeather.wind}
                            />
                        )}
                        {currentWeather.cloudiness && (
                            <DetailItem
                                title="Cloudiness"
                                content={currentWeather.cloudiness}
                            />
                        )}
                        {currentWeather.pressure && (
                            <DetailItem
                                title="Pressure"
                                content={currentWeather.pressure}
                            />
                        )}
                        {currentWeather.humidity && (
                            <DetailItem
                                title="Humidity"
                                content={currentWeather.humidity}
                            />
                        )}
                        {currentWeather.sunRise && (
                            <DetailItem
                                title="Sunrise"
                                content={currentWeather.sunRise}
                            />
                        )}
                        {currentWeather.sunSet && (
                            <DetailItem
                                title="Sunset"
                                content={currentWeather.sunSet}
                            />
                        )}
                        {currentWeather.coords && (
                            <DetailItem
                                title="Geo coords"
                                content={currentWeather.coords}
                            />
                        )}
                    </Container>
                </Row>
            </Container>
        </StyledForecastDetail>
    );
};

const mapStateToProps = state => ({
    currentWeather: { ...state.forecast.currentWeather }
});

export default connect(mapStateToProps)(ForecastDetail);
