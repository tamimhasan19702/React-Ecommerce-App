import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';

const Hatspage = () => {
  <div className="">
    <h1>Hats Page</h1>
  </div>
}


function App () {
  
    return (
      <div>
        <Routes >
            <Route path='/'  element={<Homepage />} /> 
            <Route path='/hats' element={<Hatspage />} /> 
        </Routes>
        {/* <Homepage /> */}
            </div>
    );
}

export default App;
