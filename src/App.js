import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './service/main/Main';
import Register from './service/register/Register';
import Search from './service/search/Search'
import './App.css';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Main />}>
            </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
