import styled from 'styled-components';
import * as Colors from '../../assets/colors';

export default styled.ul`
    position: absolute;
    z-index: 99999;
    width: calc(100% - 30px);
    height: ${props => 30 + props.optionsCount * 40 }px;
    opacity: 0;
    visibility: hidden;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    margin-top: 5px;
    border: 1px solid ${Colors.PRIMARY_LIGHT};
    border-radius: 10px;
    background-color: ${Colors.WHITE};
    transition: all ease-in-out 300ms;
    pointer-events: none;

    &.show {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    li {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 33px;
        font-size: 1.2rem;
        color: ${Colors.PRIMARY_DARKER};
        cursor: pointer;

        &:hover {
            background-color: ${Colors.LIGHT_GRAY};
        }
    }
`;
