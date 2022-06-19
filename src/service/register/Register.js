import React, { useState } from 'react';

import Header from '../main/Header';
import Content from './Content';
import Action from './Action';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import { BackgroundImages } from '../../components/Image';

import { PAGE } from '../../config/common';

const Register = () => {
    const [page, setPage] = useState(0);
    const [answer, setAnswer] = useState({});

    return (
        <>
            <Header service={PAGE.REGISTER.KEY} />
            <Flex height="calc(100vh - 128px)">
                <Box width="100vw" minWidth="225px">
                    <Content
                        page={page}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                </Box>
            </Flex>
            <BackgroundImages />
            <Action answer={answer} page={page} updatePage={setPage} />
        </>
    );
};

export default Register;
