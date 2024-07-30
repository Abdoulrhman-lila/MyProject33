import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Begning from "./Components/1-Begning/Begning";
import CreateAccount from "./Components/2-CreateAccount/CreateAccount";
import Login from './Components/3-Login/Login';
import Home from "./Components/4-Home/Home";
import Home2 from './Components/5-Home2/Home2';
import Properties from './Components/7-Properties/Properties';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Begning />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <>
            <Home />
            <Home2/>
          </>
        } />
           <Route path="/properties" element={
          <>
            <Home />
            <Properties/>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;