import React from 'react';
import Header from './Header';
import Info from './Info';

import { BackgroundImages } from '../../components/Image';

const Main = () => {
    return (
        <>
            <Header service="main" />
            <Info />
            <BackgroundImages />
        </>
    );
};

export default Main;
