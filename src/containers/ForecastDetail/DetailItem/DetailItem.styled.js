import styled from 'styled-components';
import * as Colors from '../../../assets/colors';

export default styled.div`
    font-size: 19px;
    line-height: 1.1em;
    margin-top: 16px;
    letter-spacing: 0.7px;

    .title {
        color: ${Colors.PRIMARY_DARKER};
        font-weight: 600;
    }

    .content {
        color: ${Colors.GRAY};
        text-transform: capitalize;
    }
`;
