import styled from 'styled-components';
import { Link } from "react-router-dom";

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';

import content from '../../assets/content.json';

const StyleLink = styled(Link)`
    text-decoration: none;
    color: #E4B392;
    padding: 16px;
`;

const Header = () => {
    return (
        <Box
            width="100%"
            minWidth="375px"
            height="50px"
            borderBottom="1px solid #E4B392"
        >
            <Flex justify="space-between" height="50px">
                <Text fontSize="24px" fontStyle="italic" padding="12px">
                    {content.header.title}
                </Text>
                <Flex>
                    <StyleLink to="/">{content.header.home}</StyleLink>
                    <StyleLink to="/register">{content.header.register}</StyleLink>
                </Flex>
            </Flex>
        </Box>
    )
};

export default Header;