import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import StyledDetailItem from './DetailItem.styled';

export default ({ title, content }) => {
    return (
        <StyledDetailItem>
            <Row justifyContent>
                <Col col="4" style={{ textAlign: 'left' }} alignSelf="center" className="title">
                    <span>{title}</span>
                </Col>
                <Col col="8" style={{ textAlign: 'right' }} alignSelf="center" className="content">
                    <span>{content}</span>
                </Col>
            </Row>
        </StyledDetailItem>
    );
};
