import styled from 'styled-components';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import { ActionButton, NormalButton, LinkButton } from '../../components/Button';

import content from '../../assets/content.json';

const Container = styled(Box)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    min-width: 330px;
`;

const Action = ({ page, updatePage }) => {
    return (
        <Container>
            <Flex justify="space-between" padding="20px 16px">
                <Box>
                { 
                    (page === 1 || page === 2) && (
                        <ActionButton onClick={() => { updatePage(--page); }}>
                            {content.register.action.previous}
                        </ActionButton>
                    )
                }
                </Box>
                <Box>
                {
                    (page === 0 || page === 1) && (
                        <ActionButton onClick={() => { updatePage(++page); }}>
                            {content.register.action.next}
                        </ActionButton>
                    )
                }
                {
                    page === 2 && (
                        <NormalButton onClick={() => { updatePage(++page); }}>
                            {content.register.action.button_finish}
                        </NormalButton>
                    )
                }
                {
                    page === 3 && (
                        <Flex>
                            <LinkButton to="/">
                                {content.register.action.button_home}
                            </LinkButton>
                            <NormalButton margin="0px 0px 0px 8px" onClick={() => { updatePage(0); }}>
                                {content.register.action.button_retry}
                            </NormalButton>
                        </Flex>
                    )
                }
                </Box>
            </Flex>
        </Container>
    )
};


export default Action;