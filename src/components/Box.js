import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleDiv = styled.div`
    margin: ${({ margin }) => margin || '0px'};
    padding: ${({ padding }) => padding || '0px'};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    background-color: ${({ bgColor }) => bgColor || 'inherit'};
    overflow-y: ${({ overflowY }) => overflowY || 'visible'};
`;

const Box = ({
    margin,
    padding,
    width,
    height,
    bgColor,
    children,
    ...props
}) => {
    return (
        <StyleDiv
            margin={margin}
            padding={padding}
            width={width}
            height={height}
            bgColor={bgColor}
            {...props}
        >
            {children}
        </StyleDiv>
    );
};

Box.propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Box;
