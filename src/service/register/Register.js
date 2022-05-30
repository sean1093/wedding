import { useState } from 'react';
import styled from 'styled-components';

import Header from '../main/Header';
import Content from './Content';
import Action from './Action';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Image from '../../components/Image';

// images
import FlowerImageMain from '../../assets/images/background-image.jpeg';

const StyledImage = styled(Image)`
    position: fixed;
    z-index: -1;
    width: 100vw;
    top: 50px;
    height: calc(100vh - 114px);
    opacity: .8;
`;

const Register = () => {
    const [page, setPage] = useState(0);
    const [answer, setAnswer] = useState({});

    return (
        <>
            <Header />
            <Flex height="calc(100vh - 128px)">
                <Box width="100vw" minWidth="225px">
                    <Content
                        page={page}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                </Box>
            </Flex>
            <StyledImage src={FlowerImageMain}/>
            <Action
                answer={answer}
                page={page}
                setAnswer={setAnswer}
                updatePage={setPage}
            />
        </>
    )
};

export default Register;