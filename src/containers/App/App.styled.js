import styled from 'styled-components';
import * as Colors from '../../assets/colors';

export default styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background: ${Colors.PRIMARY};
    background: linear-gradient(
        180deg,
        ${Colors.PRIMARY} 0%,
        ${Colors.PRIMARY_DARKER} 100%
    );
`;
