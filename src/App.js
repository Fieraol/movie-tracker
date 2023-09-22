import * as React from 'react';
// import CameraIcon from '@mui/icons-material/PhotoCamera';

import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Home />
    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={Home()}/>
    //       <Route path="/login" element={SignIn()}/>
    //       <Route path="/signup" element={SignUp()}/>
    //     </Routes>
    //   </BrowserRouter>
  );
}
