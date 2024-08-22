import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Begning from "./Components/1-Begning/Begning";
import CreateAccount from "./Components/2-CreateAccount/CreateAccount";
import Login from './Components/3-Login/Login';
import Home from "./Components/4-Home/Home";
import Home2 from './Components/5-Home2/Home2';
import Properties from './Components/7-Properties/Properties';
import Footer from './Components/10-Footer/Footer'
import Testimonials from './Components/8-Testimonials/Testimonials';
import AddPro from './Components/AddPro/AddPro';
import View from './Components/View/View';
import About from './Components/6-About/About';
import Appointments from './Components/Appointments/Appointments';
import Buy from './Components/Buy/Buy';
import Rating from './Components/Rating/Rating';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Begning />
          <Footer/>
          </>
      } />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <>
            <Home />
            <Home2/>
            <Footer/>
          </>
        } />
           <Route path="/properties" element={
          <>
            <Home />
            <Properties/>
            <Footer/>
          </>
        } />
   <Route path="/about" element={
          <>
            <Home />
            <About/>
            <Footer/>
          </>
        } />

        <Route path='/testimonials' element={<Testimonials/>}/>
        < Route path='/add' element={<AddPro/>}/>
        <Route path='/view' element={<View/>  }/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/rating' element={<Rating/>}/>
      </Routes>
    </Router>
  );
}

export default App;