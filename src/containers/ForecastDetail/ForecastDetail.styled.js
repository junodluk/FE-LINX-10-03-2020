import styled from 'styled-components';
import * as Colors from '../../assets/colors';
import CloudBackground from '../../assets/cloud-background.png';

export default styled.div`
    position: relative;
    height: 100%;
    width: 590px;
    padding: 12px 0px;
    margin-right: -${props => (props.show ? 0 : 590)}px;
    opacity: ${props => (props.show ? 1 : 0)};
    transition: all ease 400ms;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background-color: ${Colors.WHITE};
        border-radius: 20px;
        background-image: url(${CloudBackground});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        padding: 52px 42px;

        h1,
        h2 {
            color: ${Colors.BLACK};
        }

        .details-center {
            text-align: center;

            .temperature {
                position: relative;
                font-size: 145px;
                line-height: 1.1em;
                font-weight: 700;
                color: ${Colors.BLACK};

                &:before {
                    position: absolute;
                    content: '°C';
                    font-size: 3rem;
                    font-weight: 700;
                    top: -3rem;
                    right: -3rem;
                }
            }

            .clouds,
            .timestamp {
                display: block;
                font-size: 19px;
                line-height: 1.5em;
                letter-spacing: 0.7px;
                font-weight: 600;
                color: ${Colors.PRIMARY_DARK};
                text-transform: capitalize;
            }
        }

        .details-bottom {
            position: relative;

            &:before {
                position: absolute;
                content: '';
                top: 0;
                left: -27px;
                right: -27px;
                height: 1px;
                background-color: ${Colors.LIGHT_GRAY};
            }

            > div > div:first-child {
                margin-top: 44px;
            }
        }
    }
`;
