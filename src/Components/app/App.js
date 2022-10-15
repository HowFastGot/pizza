import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Cart, MainPage, NotFoundPage } from "../Pages"

function App() {

     return (
          <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/cart" element={<Cart />} />
               <Route path='*' element={<NotFoundPage />} />
          </Routes>
     );
}

export default App;
