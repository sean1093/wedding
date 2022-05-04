import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import { ActionButton, NormalButton, LinkButton } from '../../components/Button';

import { postRequest } from '../../utils/httpService';
import content from '../../assets/content.json';
import { useEffect, useState } from 'react';

const Container = styled(Box)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    min-width: 330px;
`;

const isEmpty = (str) => str === null || str === undefined || str === '';

const Action = ({ answer, page, setAnswer, updatePage }) => {
    const [isEnableNextButton, setIsEnableNextButton] = useState(false);
    const { join } = answer;

    useEffect(() => {
        let enableNextButton = false;
        const {
            name,
            relation,
            join,
            invitation,
            people,
            vegetarian,
            child,
            tel
        } = answer;
        if (page === 0) {
            enableNextButton = (!isEmpty(name) && !isEmpty(relation) && !isEmpty(join) && !isEmpty(invitation)) || false;
        } else if (page === 1) {
            enableNextButton = (!isEmpty(people) && !isEmpty(vegetarian) && !isEmpty(child) && tel?.length === 10) || false;
        }
        setIsEnableNextButton(enableNextButton);
    }, [page, answer]);

    return (
        <Container>
            <Flex justify="space-between" padding="20px 16px">
                <Box>
                { 
                    (page === 1 || page === 2) && (
                        <ActionButton onClick={() => {
                            if (!join && page === 2) {
                                updatePage(0);
                            } else {
                                updatePage(--page);
                            }
                        }}>
                            {content.register.action.previous}
                        </ActionButton>
                    )
                }
                </Box>
                <Box>
                {
                    (page === 0 || page === 1) && (
                        <ActionButton
                            disabled={!isEnableNextButton}
                            onClick={() => {
                                if (isEnableNextButton) {
                                    if (!join && page === 0) {
                                        updatePage(2);
                                    } else {
                                        updatePage(++page);
                                    }
                                }
                            }}
                        >
                            {content.register.action.next}
                        </ActionButton>
                    )
                }
                {
                    page === 2 && (
                        <NormalButton
                            onClick={async () => {
                                updatePage(++page);
                                const result = await postRequest({ data: answer });
                                if (result?.status === 500) {
                                    updatePage(4);
                                }
                            }}
                        >
                            {content.register.action.button_finish}
                        </NormalButton>
                    )
                }
                {
                    (page === 3 || page === 4) && (
                        <Flex>
                            <LinkButton to="/">
                                {content.register.action.button_home}
                            </LinkButton>
                            <NormalButton
                                margin="0px 0px 0px 8px"
                                onClick={() => {
                                    setAnswer({});
                                    updatePage(0);
                                }}
                            >
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

Action.propTypes = {
    answer: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    setAnswer: PropTypes.func.isRequired,
    updatePage: PropTypes.func.isRequired
};

export default Action;