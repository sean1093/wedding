import styled from 'styled-components';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import Image from '../../components/Image';
import { LinkButton } from '../../components/Button';

import content from '../../assets/content.json';
import FlowerImageMain from '../../assets/images/flower-main.jpg';

const StyledImage = styled(Image)`
    position: fixed;
    z-index: -1;
    bottom: 0;
    width: 100vw;
    max-width: 550px;
`;

const Info = () => {
    return (
        <Flex direction="column">
            <Text
                color="black"
                fontSize="28px"
                fontStyle="italic"
                padding="20px"
            >
                {content.main.title_name}
            </Text>
            <Flex padding="20px">
                <Text color="black" fontSize="72px" fontStyle="italic">
                    {content.main.title_event_first}
                </Text>
                <Text color="black" fontSize="28px" fontStyle="italic" padding="40px 0px 12px">
                    {content.main.title_event}
                </Text>
            </Flex>
            <Text color="black" fontSize="16px" padding="16px 48px">{content.main.time}</Text>
            <Text color="black" fontSize="16px" padding="16px 48px">{content.main.location}</Text>
            <Text color="black" fontSize="16px" padding="16px 48px">{content.main.address}</Text>
            <Flex width="120px" margin="20px 120px">
                <LinkButton to="/register">
                    {content.main.button_register}
                </LinkButton>
            </Flex>
            <StyledImage src={FlowerImageMain}/>
        </Flex>
    )
};

export default Info;