import React, { useState, useEffect } from 'react';
import ToolbarStyled from './Toolbar.styled';
import logo from '../../assets/logo.png';
import { HomeIcon } from '../../assets/icons';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../../redux/forecast/actions';

const Toolbar = ({ actions: { selectCity } }) => {
    const [time, setTime] = useState(Date.now);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setTime(Date.now);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const homeButtonClickHandler = () => {
        selectCity(null);
    };

    return (
        <ToolbarStyled role="toolbar">
            <a
                className="logo"
                title="Go to Linx website"
                href="https://www.linx.com.br/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img src={logo} alt="Linx logo" />
            </a>

            <button className="home-button" onClick={homeButtonClickHandler}>
                <HomeIcon />
            </button>
            <div className="current-time">
                <span className="date">{moment(time).format('DD/MM')}</span>
                <span className="time">
                    {moment(time).format('hh')}
                    <span className="time-separator">:</span>
                    {moment(time).format('mmA')}
                </span>
            </div>
        </ToolbarStyled>
    );
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ selectCity }, dispatch)
});

export default connect(null, mapDispatchToProps)(Toolbar);
