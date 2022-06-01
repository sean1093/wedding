import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from './Box';

const BaseButton = styled(Box)`
    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
    color: ${({ disabled }) => (disabled ? '#DFDFDF' : 'black')};
    padding: 4px;
    text-align: center;
    width: 108px;
    height: 30px;
`;

export const ActionButton = styled(BaseButton)``;

export const NormalButton = styled(BaseButton)`
    background: #f7efe9;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 4px;
    width: 120px;
    height: 30px;
    color: #000000;
    background: #f7efe9;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;
