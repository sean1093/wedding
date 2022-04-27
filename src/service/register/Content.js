import styled from 'styled-components';

import Select from 'react-select'

import Box from '../../components/Box';
import Input from '../../components/Input';
import Flex from '../../components/Flex';

import { RELATION, JOIN, INVITE } from '../../config/register';

import content from '../../assets/content.json';

const InputBlock = styled(Flex)`
    padding: 28px 8px;

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

const Content = ({ answer, setAnswer }) => {

    const onSelect = (newValue, actionMeta) => {
        console.log(actionMeta);
        const { name } = actionMeta;
        setAnswer({
            ...answer,
            [name]: newValue?.value
        })
    };

    return (
        <Flex justify="center" direction="column" padding="16px">
            <InputBlock>
                <InputTitle>
                    {content.register.content.title_name}
                </InputTitle>
                <Box>
                    <Input width="250px"/>
                </Box>
            </InputBlock>
            <InputBlock>
                <InputTitle>
                    {content.register.content.title_relation}
                </InputTitle>
                <Box width="250px">
                    <Select options={RELATION} onChange={onSelect} name="relation" />
                </Box>
            </InputBlock>
            <InputBlock>
                <InputTitle>
                    {content.register.content.title_join}
                </InputTitle>
                <Box width="250px">
                    <Select options={JOIN} onChange={onSelect} name="join" />
                </Box>
            </InputBlock>
            <InputBlock>
                <InputTitle>
                    {content.register.content.title_invite}
                </InputTitle>
                <Box width="250px">
                    <Select options={INVITE} onChange={onSelect} name="invite" />
                </Box>
            </InputBlock>
        </Flex>
    )
};

export default Content;