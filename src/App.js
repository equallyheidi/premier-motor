
import React from 'react'
import { Routes, Route } from 'react-router';

import Navigation from './components/routes/navigation/navigation.component';
import Home from './components/routes/home/home.component';
import SignIn from './components/routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
