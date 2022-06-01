import Header from "./Header";
import Info from "./Info";

import Flex from '../../components/Flex';
import { BackgroundImages } from '../../components/Image';

const Main = () => {
    return (
        <>
            <Header />
            <Flex>
                <Info />
            </Flex>
            <BackgroundImages />
        </>
    )
};

export default Main;