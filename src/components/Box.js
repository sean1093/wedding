import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleDiv = styled.div`
    margin: ${({ margin }) => margin || '0px'};
    padding: ${({ padding }) => padding || '0px'};
    width: ${({ width }) => width || 'auto'};
    min-width: ${({ minWidth }) => minWidth || 'auto'};
    height: ${({ height }) => height || 'auto'};
    background-color: ${({ bgColor }) => bgColor || 'inherit'};
    overflow-y: ${({ overflowY }) => overflowY || 'visible'};
    border: ${({ border }) => border || 'none'};
    border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
`;

const Box = ({
    margin,
    padding,
    width,
    minWidth,
    height,
    bgColor,
    border,
    borderBottom,
    children,
    ...props
}) => {
    return (
        <StyleDiv
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
            height={height}
            bgColor={bgColor}
            border={border}
            borderBottom={borderBottom}
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
    minWidth: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    border: PropTypes.string,
    borderBottom: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Box;
