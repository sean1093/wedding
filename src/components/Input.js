import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyleTextarea = styled.textarea`
    height: ${({ height }) => height || '150px'};
    width: ${({ width }) => width || '250px'};
    margin: ${({ margin }) => margin || '0px'};
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({ borderColor }) => borderColor || '#cccccc'};
    resize: none;
`;

const StyleInput = styled.input`
    height: ${({ height }) => height || '38px'};
    width: ${({ width }) => width || '90%'};
    margin: ${({ margin }) => margin || '0px'};
    border-radius: 4px;
    border: 1px solid ${({ borderColor }) => borderColor || '#cccccc'};
`;

const Input = ({ width, height, margin, borderColor, ...props }) => {
    return (
        <StyleInput
            height={height}
            width={width}
            margin={margin}
            borderColor={borderColor}
            {...props}
        />
    );
};

Input.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    margin: PropTypes.string,
    borderColor: PropTypes.string
};

export default Input;
