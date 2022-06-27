import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from './Box';
import { color } from '../config/theme';
import content from '../assets/content.json';

const BaseButton = styled(Box)`
    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
    color: ${({ disabled }) => (disabled ? color.disable : color.black)};
    padding: 4px;
    text-align: center;
    width: 108px;
    height: 30px;
`;

export const ActionButton = styled(BaseButton)``;

export const NormalButton = styled(BaseButton)`
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: ${({ padding }) => (padding ? padding : '4px')};
    width: ${({ width }) => (width ? width : '120px')};
    height: ${({ height }) => (height ? height : '30px')};
    color: ${color.black};
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
`;

const LinkOuterButton = styled.a`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    padding: 8px;
    width: 100px;
    height: 35px;
    color: ${color.black};
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
`;

export const ReportButton = () => (
    <LinkOuterButton
        href="https://github.com/sean1093/wedding/issues/new"
        target="_blank"
        rel="noreferrer"
    >
        {content.register.content.error_report}
    </LinkOuterButton>
);
