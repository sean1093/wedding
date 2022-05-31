import { useState } from 'react';
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

const StyledTitle = styled(Text)`
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const MenuIcon = styled(Box)`
    padding: 16px;
    &:hover {
        cursor: pointer
    }
`;

const Menu = styled(Flex)`
    flex-direction: column;
    background-color: white;
    width: 100vw;
    position: fixed;
    top: 50px;
    border: 1px solid #E4B392;
`;

const NormalMenu = styled(Flex)`
    @media (max-width: 576px) {
        display: none;
    }
`;

const MobileMenu = styled(Flex)`
    display: none;
    @media (max-width: 576px) {
        display: block;
    }
`;

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const onClickMenu = () => {
        console.log('click');
        setShowMenu(!showMenu);
    };

    return (
        <Box
            width="100%"
            minWidth="375px"
            height="50px"
            borderBottom="1px solid #E4B392"
        >
            <Flex justify="space-between" height="50px">
                <StyledTitle fontSize="24px" fontStyle="italic" padding="12px">
                    {content.header.title}
                </StyledTitle>
                <NormalMenu>
                    <StyleLink to="/">{content.header.home}</StyleLink>
                    <StyleLink to="/register">{content.header.register}</StyleLink>
                </NormalMenu>
                <MobileMenu>
                    <MenuIcon onClick={onClickMenu} className="fa fa-bars" />
                </MobileMenu>
                {
                    showMenu && (
                        <Menu>
                            <StyleLink to="/">{content.header.home}</StyleLink>
                            <StyleLink to="/register">{content.header.register}</StyleLink>
                        </Menu>
                    )
                }
            </Flex>
        </Box>
    )
};

export default Header;