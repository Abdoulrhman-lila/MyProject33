import './Properties.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";



const data = [
  {
    id:1,
    imgSrc: "banner-02.jpg",
    title: "Luxury House",
    location: "Location: Qudsaya suburb",
    space:" Space:80m",
    price: "Price: 500.000.000 SYP",
    features: [
      "Beds: 3",
      "Baths: 3",
      "Garages: 1"
    ],
    
  },
  {
    id:2,
    imgSrc: "banner-01.jpg",
    title: "Luxury House",
    location: "Location: Qudsaya suburb",
    price: "Price: 500.000.000 SYP",
    space:"Space:80m",
    features: [
      "Beds: 1",
      "Baths: 2",
      "Garages: 1"
    ],
    
  },
  {
    id:3,
    imgSrc: "banner-01.jpg",
    title: "Luxury House",
    location: "Location: Al-Assad suburb",
    price: "Price: 500.000.000 SYP",
    space:"Space:100m",
    features: [
      "Beds: 1",
      "Baths: 2",
      "Garages: 1"
    ],
    
  },
  {
    id:4,
    imgSrc: "banner-01.jpg",
    title: "Luxury House",
    location: "Location: Al-Assad suburb",
    price: "Price: 500.000.000 SYP",
    space:"Space:100m",
    features: [
      "Beds: 1",
      "Baths: 2",
      "Garages: 1"
    ],
    
  },
  {
    id:5,
    imgSrc: "banner-01.jpg",
    title: "Luxury House",
    location: "Location: Al-Assad suburb",
    price: "Price: 500.000.000 SYP",
    space:"Space:180m",
    features: [
      "Beds: 1",
      "Baths: 2",
      "Garages: 1"
    ],
    
  },
  {
    id:6,
    imgSrc: "banner-01.jpg",
    title: "Luxury House",
    location: "Location: Qudsaya suburb",
    price: "Price: 500.000.000 SYP",
    space:"Space:100m",
    features: [
      "Beds: 1",
      "Baths: 2",
      "Garages: 1"
    ],
    
  },
];

function Property() {
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [spaceFilter, setSpaceFilter] = useState("");
 

  const filteredData = data.filter((item) => {
    return (
      (locationFilter === "" || item.location === locationFilter) &&
      (priceFilter === "" || item.price === priceFilter) &&
      (spaceFilter === "" || item.space === spaceFilter)
    );
  });

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSpaceFilterChange = (event) => {
    setSpaceFilter(event.target.value);
  };



  
  return (
    <div className="property">
      <div className="image-container">
        <img src="page-heading-bg.jpg" alt="" />
        <span className="image-text2">PROPERTIES</span>
        <button className='image-text2'><Link to="/add">To add a property click here</Link></button>
      </div>
      <div className="option">
  
      </div>
      <div>
      <div className="search-container">
        <div className="search-box">
          <select value={locationFilter} onChange={handleLocationFilterChange}>
            <option value="">Select Location</option>
            {data.map((item) => (
              <option key={item.id} value={item.location}>
                {item.location}
              </option>
            ))}
          </select>

          <select value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="">Select Price</option>
            {data.map((item) => (
              <option key={item.id} value={item.price}>
                {item.price}
              </option>
            ))}
          </select>

          <select value={spaceFilter} onChange={handleSpaceFilterChange}>
            <option value="">Select Space</option>
            {data.map((item) => (
              <option key={item.id} value={item.space}>
                {item.space}
              </option>
            ))}
          </select>
          <button>Search</button>
        </div>
      </div>
      </div>
      {filteredData.length>0 ? (
      <section className="cardsss flex">
  {filteredData.map((item, index) => (
    <article className="card122" key={index} id={`card-${index}`}>
      <img src={item.imgSrc} alt="" />
      <div className='flex'>
      <h3 className="title3">{item.title}</h3>
      <label className='heart'><CiHeart/></label>
      </div>
      <p className="location">{item.location}</p>
      <p className="space">{item.space}</p>
      <h5 className="price">{item.price}</h5>

      <div className="views">
        <Link to="/view"><button className="view">click her to view</button></Link>
      
      </div>
      
      <div className="dropdown1 flex">
  <button className="dropdown1-toggle">Features</button>
  <ul className="dropdown1-menu">
    {item.features.map((feature, featureIndex) => (
      <li key={featureIndex}>{feature}</li>
    ))}
  </ul>
</div>
    </article>
  ))}
</section>
) : (
  <p className='result'>No results found.</p>
)}
    </div>
  );
}

export default Property;