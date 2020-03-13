import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import StyledForecastCard from './ForecastCard.styled.js';
import {
    MistIcon,
    SnowIcon,
    ThunderStormIcon,
    SunIcon,
    RainSunIcon,
    RainIcon,
    CloudSunIcon,
    CloudIcon
} from '../../../assets/icons/index.js';
import * as moment from 'moment';

const weatherIcons = {
    '01d': <SunIcon width="43px" />,
    '02d': <CloudSunIcon width="43px" />,
    '03d': <CloudIcon width="43px" />,
    '04d': <CloudIcon width="43px" />,
    '09d': <RainIcon width="43px" />,
    '10d': <RainSunIcon width="43px" />,
    '11d': <ThunderStormIcon width="43px" />,
    '13d': <SnowIcon width="43px" />,
    '50d': <MistIcon width="43px" />
};

export default ({ date, iconCode, temperature, windSpeed, clouds }) => {
    return (
        <StyledForecastCard>
            <Container>
                <Row>
                    <Col col="6">
                        {weatherIcons[iconCode]}
                    </Col>
                    <Col col="6" className="weekday">
                        <span>{moment(date).format('ddd')}</span>
                    </Col>
                </Row>
                <Row>
                    <Col col="12" className="forecast-stats">
                        <span className="temperature">{temperature}°C</span>
                        <span className="wind-velocity">{windSpeed} m/s</span>
                        <span className="clouds">clouds: {clouds} %</span>
                    </Col>
                </Row>
            </Container>
        </StyledForecastCard>
    );
};
