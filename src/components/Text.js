import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const StyleText = styled(Box)`
    font-size: ${({ fontSize }) => fontSize || '14px'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    color: ${({ color }) => color || '#E4B392'};
`;

const Text = ({ fontSize, color, textAlign, lang, children, ...props }) => {
    return (
        <StyleText
            fontSize={fontSize}
            textAlign={textAlign}
            color={color}
            lang={lang}
            {...props}
        >
            {children}
        </StyleText>
    );
};

Text.propTypes = {
    fontSize: PropTypes.string,
    textAlign: PropTypes.string,
    color: PropTypes.string,
    lang: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Text;
