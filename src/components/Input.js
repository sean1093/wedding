import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleInput = styled.input`
    height: ${({ height }) => height || '38px'};
    width: ${({ width }) => width || '90%'};
    margin: ${({ margin }) => margin || '0px'};
    border-radius: 4px;
    border: 1px solid
        ${({ borderColor, theme }) => borderColor || '#cccccc' };
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
