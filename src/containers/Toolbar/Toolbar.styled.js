import styled, { keyframes } from 'styled-components';
import * as Colors from '../../assets/colors';

const blink = keyframes`
  to {
    visibility: hidden;
  }
`;

export default styled.div`
    width: 105px;
    min-width: 105px;
    height: calc(100vh - 30px);
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 22px;

    .logo {
        width: 100%;
        margin: 26px 0;
        text-align: center;

        img {
            width: 65px;
        }
    }

    .home-button {
        height: 57px;
        width: 57px;
        background: transparent;
        border: none;
        border-radius: 5px;
        transition: all ease 200ms;
        cursor: pointer;

        &:hover {
            background: ${Colors.PURPLE_DARKER};
            svg {
                path {
                    fill: ${Colors.LIGHT_GRAY} !important;
                }
            }
        }
    }

    .current-time {
        width: 100%;
        margin: 35px 0;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .date {
            color: ${Colors.WHITE};
            font-weight: 600;
        }

        .time {
            color: ${Colors.PRIMARY_LIGHTER};

            .time-separator {
                animation: ${blink} 2s steps(10, start) infinite;
            }
        }
    }
`;
