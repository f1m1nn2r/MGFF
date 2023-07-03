import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// page
import MainPage from './pages/MainPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TourPage from './pages/TourPage.jsx';
import MusicPage from './pages/MusicPage.jsx';

// css
import './assets/scss/App.css';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/About' element={<AboutPage/>}></Route>
                <Route path='/Tour' element={<TourPage/>}></Route>
                <Route path='/Music' element={<MusicPage/>}></Route>
            </Routes>
        </>  
    );
}

export default App;
