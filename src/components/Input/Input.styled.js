import styled from 'styled-components';
import * as Colors from '../../assets/colors';

export default styled.div`
    position: relative;
    display: -webkit-box;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    height: 97px;

    label {
        color: ${Colors.PRIMARY_LIGHTER};
        position: absolute;
        left: 30px;
        padding: 0px 5px;
        transition: all cubic-bezier(0.09, 0.37, 0.9, 0.58) 200ms;
        opacity: 0.5;
        font-size: 1.7rem;
        pointer-events: none;
    }

    input {
        display: block;
        width: 100%;
        height: 100%;
        padding: 8px 88px 8px 33px;
        line-height: 1.25;
        background-color: transparent;
        background-image: none;
        background-clip: padding-box;
        color: ${Colors.WHITE};
        border: 1px solid ${Colors.PRIMARY_LIGHT};
        border-radius: 35px;
        transition: border-color ease-in-out 200ms, box-shadow ease-in-out 200ms;
        font-size: 1.7em;

        &:hover {
            border-color: ${Colors.PRIMARY_LIGHTER};
        }

        &:focus {
            border-color: ${Colors.WHITE};
            outline: 0;
        }

        &:valid + label,
        &:disabled + label {
            font-size: 1em;
            transform: translate3d(0, -140%, 0);
            opacity: 1;
        }

        &:focus + label {
            font-size: 1em;
            transform: translate3d(0, -140%, 0);
            opacity: 1;
            color: ${Colors.WHITE};
        }
    }

    .icon {
        position: absolute;
        right: 33px;
        margin-top: 3px;

        &.clickable-icon {
            cursor: pointer;

            &:before {
                position: absolute;
                content: '';
                opacity: 0;
                width: 59px;
                height: 59px;
                top: -12px;
                left: -12px;
                background-color: ${Colors.PRIMARY_LIGHT};
                z-index: -1;
                border-radius: 50%;
                transition: all linear 200ms;
            }

            &:hover:before {
                opacity: 1;
            }
        }
    }
`;
