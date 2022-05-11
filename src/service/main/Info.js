import styled from 'styled-components';

import Box from '../../components/Box';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import Image from '../../components/Image';
import { LinkButton } from '../../components/Button';

import content from '../../assets/content.json';
import FlowerImageMain from '../../assets/images/flower-main.jpg';
import ImageMain from '../../assets/images/main.jpeg';

const StyledImage = styled(Image)`
    position: fixed;
    z-index: -2;
    bottom: 0;
    width: 100vw;
    max-width: 550px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledMainImage = styled(Image)`
    position: absolute;
    top: 150px;
    right: 80px;
    width: 450px;
    height: 380px;

    @media (max-width: 900px) {
        width: 350px;
        height: 300px;
    }

    @media (max-width: 780px) {
        width: 300px;
        height: 250px;
    }

    @media (max-width: 768px) {
        position: relative;
        top: 0px;
        right: 0px;
        width: 300px;
        height: 280px;
    }
`;

const StyledBackground = styled(Box)`
    position: absolute;
    top: 100px;
    right: 40px;
    width: 450px;
    height: 380px;
    z-index: -1;
    background-color: #F7EFE9;

    @media (max-width: 900px) {
        width: 350px;
        height: 300px;
    }

    @media (max-width: 780px) {
        width: 300px;
        height: 250px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const InfoSection = styled(Flex)`
    @media (max-width: 768px) {
        justify-content: center;
        width: 100vw;
    }
`;

const StyledInfoText = styled(Text)`
    color: black;
    font-size: 16px;
    padding: 16px 48px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 36px;
    }
`;

const StyledTitle = styled(Text)`
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const StyledTitleEventFirst = styled(Text)`
    @media (max-width: 768px) {
        font-size: 52px;
        padding-left: 16px;
    }
`;

const StyledTitleEvent = styled(Text)`
    padding: 40px 0px 12px;
    @media (max-width: 768px) {
        font-size: 20px;
        padding: 30px 0px 12px;
    }
`;

const Info = () => {
    return (
        <Flex direction="column" minWidth="375px" >
            <StyledTitle
                color="black"
                fontSize="28px"
                fontStyle="italic"
                padding="20px"
            >
                {content.main.title_name}
            </StyledTitle>
            <Flex justify="center" width="100vw">
                <StyledBackground />
                <StyledMainImage src={ImageMain}/>
            </Flex>
            <InfoSection>
                <Flex direction="column">
                    <Flex padding="20px">
                        <StyledTitleEventFirst color="black" fontSize="72px" fontStyle="italic">
                            {content.main.title_event_first}
                        </StyledTitleEventFirst>
                        <StyledTitleEvent color="black" fontSize="28px" fontStyle="italic" >
                            {content.main.title_event}
                        </StyledTitleEvent>
                    </Flex>
                    <StyledInfoText>{content.main.time}</StyledInfoText>
                    <StyledInfoText>{content.main.location}</StyledInfoText>
                    <StyledInfoText>{content.main.address}</StyledInfoText>
                    <Flex width="120px" margin="20px 120px">
                        <LinkButton to="/register">
                            {content.main.button_register}
                        </LinkButton>
                    </Flex>
                    <StyledImage src={FlowerImageMain}/>
                </Flex>
            </InfoSection>
        </Flex>
    )
};

export default Info;