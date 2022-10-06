import React from 'react';
import './Main.css'
import Title from './components/Title';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import PhotoWall from './components/PhotoWall';
import AddPhoto from './components/AddPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Single from './components/Single';


const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div>
                    <Title title='PhotoWall' />
                    <PhotoWall />
                </div>}>
                </Route>
                <Route path='/addphoto' element={<AddPhoto />} />
                <Route path='/single/:id' element={<Single />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
