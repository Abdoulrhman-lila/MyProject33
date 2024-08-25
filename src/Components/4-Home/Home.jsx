import "./Home.css"
import { MdRealEstateAgent } from "react-icons/md";
import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Home() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
    <div className="home ">
      <section className="firset-section flex ">
      <Link to="/home"> <label><MdRealEstateAgent /> ESTATE <span>&nbsp; ZEN</span></label></Link>
        <ul className="nav flex ">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/properties">Properties</a></li>
              <li className="dropdown">
        <a href="#" className="dropdown-toggle" onClick={toggleDropdown}>
          Pages<b className="caret"></b>
        </a>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li><a href="/testimonials">testimonials</a></li>
            <li><a href="/manager">Manager</a></li>
            <li><a href="/admine">Admine</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        )}
      </li>
          <li><a href="">Contact us</a></li>
        </ul>
      </section>
      
    </div>
    </>
  )
}

export default Home