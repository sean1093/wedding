import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from './service/main/Main';
import Register from './service/register/Register';
import Search from './service/search/Search';

import ImageMain from './assets/images/main.png';
import ImageFinished from './assets/images/finished.png';

import './App.css';

const preloadImages = [{ src: ImageMain }, { src: ImageFinished }];

function App() {
    useEffect(() => {
        // preloading image
        preloadImages.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }, []);
    return (
        <HashRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
