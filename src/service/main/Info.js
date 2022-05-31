import styled from 'styled-components';
import FadeIn from 'react-fade-in';

import Box from '../../components/Box';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import Image from '../../components/Image';
import { LinkButton } from '../../components/Button';

import { color } from '../../config/theme';
import content from '../../assets/content.json';
import FlowerImageMain from '../../assets/images/background-image.jpeg';
import ImageMain from '../../assets/images/main.png';

const StyledImage = styled(Image)`
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    opacity: .8;
`;

const StyledMainImage = styled(Image)`
    width: 400px;
    height: 300px;

    @media (max-width: 900px) {
        width: 350px;
        height: 262px;
    }

    @media (max-width: 780px) {
        width: 300px;
        height: 225px;
    }

    @media (max-width: 768px) {
        width: 250px;
        height: 187px;
    }
`;

const StyledInfoText = styled(Text)`
    color: ${color.font};
    font-size: 16px;
    padding: 12px 28px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 36px;
    }
`;

const StyledContentBlock = styled(Flex)`
    justify-content: center;
    width: 100vw;
`;

const StyledTitle = styled(Text)`
    padding: 16px 0 0;
    font-size: 32px;
`;

const StyledTitleEventFirst = styled(Text)`
    @media (max-width: 768px) {
        font-size: 52px;
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
        <Flex justify="center" minWidth="375px" width="100vw">
            <Flex direction="column" minWidth="375px">
                <StyledContentBlock>
                    <FadeIn>
                        <StyledTitle fontStyle="italic">
                            {content.main.title_name}
                        </StyledTitle>
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock padding="16px 0 0">
                    <FadeIn delay={500} transitionDuration={1000}>
                        <StyledMainImage src={ImageMain}/>
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock margin="4px 0">
                    <FadeIn delay={1000}>
                        <StyledTitleEventFirst color={color.font} fontSize="72px" fontStyle="italic">
                            {content.main.title_event_first}
                        </StyledTitleEventFirst>
                    </FadeIn>
                    <FadeIn delay={1000}>
                        <StyledTitleEvent color={color.font} fontSize="28px" fontStyle="italic" >
                            {content.main.title_event}
                        </StyledTitleEvent>
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock>
                    <Box>
                        <FadeIn delay={1500} transitionDuration={500}>
                            <StyledInfoText>{content.main.time}</StyledInfoText>
                        </FadeIn>
                        <FadeIn delay={1800} transitionDuration={500}>
                            <StyledInfoText>{content.main.location}</StyledInfoText>
                        </FadeIn>
                        <FadeIn delay={2100} transitionDuration={500}>
                            <StyledInfoText>{content.main.address}</StyledInfoText>
                        </FadeIn>
                    </Box>
                </StyledContentBlock>
                <StyledContentBlock margin="36px 0">
                    <LinkButton to="/register">
                        {content.main.button_register}
                    </LinkButton>
                </StyledContentBlock>
            </Flex>
            <StyledImage src={FlowerImageMain}/>
        </Flex>
    )
};

export default Info;