import styled from 'styled-components';
import { Link } from "react-router-dom";
import Box from './Box';

const BaseButton = styled(Box)`
    &:hover {
        cursor: pointer;
    }
    padding: 4px;
    text-align: center;
    width: 108px;
    height: 30px;
`;


export const ActionButton = styled(BaseButton)`
`;

export const NormalButton = styled(BaseButton)`
    background: #F7EFE9;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 4px;
    width: 108px;
    height: 30px;
    color: #000000;
    background: #F7EFE9;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;