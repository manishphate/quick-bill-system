<<<<<<< HEAD
import React from 'react'
import Home from './pages/home/Home'
import SignUp from './components/authentication/signup/SignUp'
import SignIn from './components/authentication/signin/SignIn'

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <SignUp/>
      <SignIn/>
    </div>
  )
}
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/LandingPage/Landing.jsx";
import LodingNavbar from "./pages/LandingPage/Components/LoadingNavBar/LodingNavbar.jsx";
import PartnerWithUs from "./pages/LandingPage/Components/PartnerWithUs/PartnerWithUs.jsx";

const App = () => {
  return (
    <>
      <Router>
        {/* <LodingNavbar /> */}
>>>>>>> ea9776e4bbd6593b66db1bd77abfe5025fd10340

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/loadingNavBar" element={<LodingNavbar />}/>
          <Route path="/solution"/>
          <Route path="/acountant" element={<PartnerWithUs/>}/>
          <Route path="/solution"/>

          <Route path="/invoice"/>
        
        </Routes>
      </Router>
    </>
  );
};

export default App;
