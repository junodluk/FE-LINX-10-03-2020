import styled from 'styled-components';
import * as Colors from '../../assets/colors';

export default styled.div`
    width: calc(100% - 105px - ${props => (props.expand ? 0 : 590)}px);
    padding: 0 65px;
    transition: all ease 400ms;

    h1,
    h2 {
        color: ${Colors.WHITE};
    }

    .search-input {
        margin-top: 31px;
    }

    p {
        margin-top: 49px;
        margin-bottom: 30px;
        color: ${Colors.WHITE};
        letter-spacing: 2.35px;
        font-weight: 600;
    }
`;
