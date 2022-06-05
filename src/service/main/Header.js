import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';

import content from '../../assets/content.json';

import { color } from '../../config/theme';

const StyleLink = styled(Link)`
    text-decoration: none;
    color: ${color.primary};
    padding: 16px;
    width: auto;

    &:hover {
        background-color: ${color.primary};
        color: white;
    }
    @media (max-width: 576px) {
        width: 100vw;
    }
`;

const StyledTitle = styled(Text)`
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const MenuIcon = styled(Box)`
    padding: 16px;
    color: ${color.primary};
    &:hover {
        cursor: pointer;
    }
`;

const Menu = styled(Flex)`
    flex-direction: column;
    background-color: white;
    width: 100vw;
    position: fixed;
    top: 50px;
    border: 1px solid ${color.primary};
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
        setShowMenu(!showMenu);
    };

    return (
        <Box
            width="100%"
            minWidth="375px"
            height="50px"
            borderBottom={`1px solid ${color.primary}`}
        >
            <Flex justify="space-between" height="50px">
                <StyledTitle fontSize="24px" fontStyle="italic" padding="12px">
                    {content.header.title}
                </StyledTitle>
                <NormalMenu>
                    <StyleLink to="/">{content.header.home}</StyleLink>
                    <StyleLink to="/register">
                        {content.header.register}
                    </StyleLink>
                </NormalMenu>
                <MobileMenu>
                    <MenuIcon onClick={onClickMenu} className="fa fa-bars" />
                </MobileMenu>
                {showMenu && (
                    <Menu>
                        <StyleLink to="/">{content.header.home}</StyleLink>
                        <StyleLink to="/register">
                            {content.header.register}
                        </StyleLink>
                    </Menu>
                )}
            </Flex>
        </Box>
    );
};

export default Header;
