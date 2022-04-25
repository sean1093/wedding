import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const StyleFlex = styled(Box)`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'start'};
    align-items: ${({ align }) => align || 'flex-start'};
    flex-wrap: ${({ flexWrap }) => flexWrap || 'nowarp'}; ;
`;

const Flex = ({ direction, justify, align, flexWrap, children, ...props }) => {
    return (
        <StyleFlex
            direction={direction}
            justify={justify}
            align={align}
            flexWrap={flexWrap}
            {...props}
        >
            {children}
        </StyleFlex>
    );
};

Flex.propTypes = {
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    flexWrap: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Flex;
