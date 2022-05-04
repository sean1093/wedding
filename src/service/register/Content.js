import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from 'react-select'

import Box from '../../components/Box';
import Input, { StyleTextarea } from '../../components/Input';
import Flex from '../../components/Flex';
import Text from '../../components/Text';

import {
    RELATION,
    JOIN,
    INVITE,
    PEOPLE,
    VEGETARIAN,
    CHILD
} from '../../config/register';

import content from '../../assets/content.json';

const InputBlock = styled(Flex)`
    padding: ${({ padding }) => padding || '28px 8px'};

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const InputTitle = styled(Box)`
    width: 150px;

    @media (max-width: 576px) {
        padding-bottom: 8px;
    }
`;

const Content = ({ page, answer, setAnswer }) => {
    const [validName, setValidName] = useState(true);

    const onSelect = (newValue, actionMeta) => {
        const { name } = actionMeta;
        setAnswer({
            ...answer,
            [name]: newValue?.value
        });
    };

    const onInput = (e) => {
        const { name, value } = e?.target;
        setAnswer({
            ...answer,
            [name]: value
        });
    };

    const onInputName = (e) => {
        const { name, value } = e?.target;
        const formattedValue = value?.trim();

        setValidName(!(formattedValue.length === 0));
        setAnswer({
            ...answer,
            [name]: formattedValue
        });
    };

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

    return (
        <Flex justify="center" direction="column" padding="16px">
            {
                page === 0 && (
                    <>
                        <InputBlock padding={validName ? '28px 8px' : '28px 8px 11px'}>
                            <InputTitle>
                                {content.register.content.title_name}
                            </InputTitle>
                            <Box>
                                <Input
                                    name="name"
                                    value={name}
                                    width="250px"
                                    onChange={onInputName}
                                    borderColor={validName ? '#cccccc' : 'red'}
                                />
                                {
                                    !validName && <Text color="red">{content.register.validation.invalid_name}</Text>
                                }
                            </Box>
                        </InputBlock>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_relation}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="relation"
                                    value={RELATION.find(r => r.value === relation)}
                                    options={RELATION}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_join}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="join"
                                    value={JOIN.find(r => r.value === join)}
                                    options={JOIN}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_invitation}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="invitation"
                                    value={INVITE.find(r => r.value === invitation)}
                                    options={INVITE}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>                   
                    </>
                )
            }
            {
                page === 1 && (
                    <>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_people}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="people"
                                    value={PEOPLE.find(r => r.value === people)}
                                    options={PEOPLE}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_vegetarian}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="vegetarian"
                                    value={VEGETARIAN.find(r => r.value === vegetarian)}
                                    options={VEGETARIAN}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_child}
                            </InputTitle>
                            <Box width="250px">
                                <Select
                                    name="child"
                                    value={CHILD.find(r => r.value === child)}
                                    options={CHILD}
                                    onChange={onSelect}
                                />
                            </Box>
                        </InputBlock>          
                    </>
                )
            }
            {
                page === 2 && (
                    <>
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_tel}
                            </InputTitle>
                            <Box width="250px">
                                <Text>{content.register.content.title_tel_example}</Text>
                                <Input
                                    name="tel"
                                    value={tel}
                                    width="250px"
                                    onChange={onInput}
                                />
                            </Box>
                        </InputBlock>    
                        <InputBlock>
                            <InputTitle>
                                {content.register.content.title_notes}
                            </InputTitle>
                            <Box>
                                <StyleTextarea width="270px" height="200px" onChange={onInput} name="notes"/>
                            </Box>
                        </InputBlock>
                    </>      
                )
            }
            {
                page === 3 && (
                    <InputBlock>
                        <Text fontSize="24px" padding="12px">{content.register.content.final_content}</Text>
                    </InputBlock>
                )
            }
            {
                page === 4 && (
                    <Flex direction="column">
                        <Text fontSize="24px" padding="12px">{content.register.content.error_title}</Text>
                        <Text fontSize="16px" padding="12px">{content.register.content.error_content}</Text>
                    </Flex>
                )
            }
        </Flex>
    )
};

Content.propTypes = {
    answer: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    setAnswer: PropTypes.func.isRequired
};

export default Content;