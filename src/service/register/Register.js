import { useState } from 'react';

import Header from '../main/Header';
import Content from './Content';
import Action from './Action';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Image from '../../components/Image';

// images
import FlowerImage0 from '../../assets/images/flower-0.png';
import FlowerImage1 from '../../assets/images/flower-1.png';
import FlowerImage2 from '../../assets/images/flower-2.png';
import FlowerImage3 from '../../assets/images/flower-3.png';

const Register = () => {
    const [page, setPage] = useState(0);
    const [answer, setAnswer] = useState({});

    return (
        <>
            <Header />
            <Flex height="calc(100vh - 128px)">
                <Box width="70%" minWidth="225px">
                    <Content
                        page={page}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                </Box>
                <Box width="30%" minWidth="150px" height="inherit">
                    <Flex justify="center" direction="column" height="inherit">
                        {
                            page === 0 && <Image width="200px" src={FlowerImage0}/>
                        }
                        {
                            page === 1 && <Image width="200px" src={FlowerImage1}/>
                        }
                        {
                            page === 2 && <Image width="200px" src={FlowerImage2}/>
                        }
                        {
                            page === 3 && <Image width="200px" src={FlowerImage3}/>
                        }
                    </Flex>
                </Box>
            </Flex>
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