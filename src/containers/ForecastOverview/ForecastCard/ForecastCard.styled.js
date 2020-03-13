import styled from 'styled-components';
import * as Colors from '../../../assets/colors';

export default styled.div`
    position: relative;
    height: 230px;
    margin-bottom: 32px;
    padding: 25px 8px 0 8px;
    background-color: transparent;
    border: 1px solid ${Colors.PRIMARY_LIGHT};
    box-shadow: 0px 0px 0px 0px ${Colors.PRIMARY_DARKER};
    border-radius: 35px;
    cursor: pointer;
    transition: all ease 200ms;

    &:hover {
        background-color: ${Colors.PURPLE_DARK};
        border: 1px solid ${Colors.PURPLE_DARKER};
        box-shadow: 0px 0px 19px 0px ${Colors.PRIMARY_DARKER};
        transform: translate3d(0, -12px, 0);

        &:after {
            width: calc(100% - 70px);
        }
    }

    &:after {
        position: absolute;
        content: '';
        width: 30%;
        height: 4px;
        bottom: -2px;
        left: 30px;
        background: ${Colors.ORANGE};
        background: linear-gradient(
            90deg,
            ${Colors.ORANGE} 0%,
            ${Colors.YELLOW} 100%
        );
        box-shadow: 0 0 2px ${Colors.ORANGE}, 0 0 2px ${Colors.YELLOW};
        border-radius: 1px;
        transition: width ease 200ms;
    }

    .weekday {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: bolder;
        letter-spacing: 2.35px;
        color: ${Colors.PRIMARY_LIGHTER};
    }

    .forecast-stats {
        color: ${Colors.PRIMARY_LIGHTER};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        span {
            line-height: 1.6em;
        }

        .temperature {
            margin-top: 52px;
            color: ${Colors.WHITE};
            font-size: 23px;
            font-weight: 800;
            letter-spacing: 2.1px;
        }

        .wind-velocity {
            letter-spacing: 1px;
        }
    }
`;
