import React from 'react';
import Products from './Components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
