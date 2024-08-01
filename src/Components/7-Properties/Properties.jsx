import './Properties.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';



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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
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
    images: [
      "property-01.jpg",
      "banner-02.jpg",
      "banner-03.jpg"
    ]
  },
];

function Property() {
  const [showPopup, setShowPopup] = useState(Array(data.length).fill(false));
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [spaceFilter, setSpaceFilter] = useState("");
  const [rating, setRating] = useState(0);

  const handleViewClick = (index) => {
    const updatedShowPopup = [...showPopup];
    updatedShowPopup[index] = !updatedShowPopup[index];
    setShowPopup(updatedShowPopup);
  };

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

  const handleChange = (newRating) => {
    setRating(newRating);
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
      <h3 className="title3">{item.title}</h3>
      <p className="location">{item.location}</p>
      <p className="space">{item.space}</p>
      <h5 className="price">{item.price}</h5>

      <div className="views">
        <button
          className="view"
          onClick={() => handleViewClick(index)}
        >
          {showPopup[index] ? 'Click here to hide' : 'Click here to view'}
        </button>
        {showPopup[index] && (
          <div className="popup">
            <div className="popup-content">
              {item.images.map((image, imageIndex) => (
                <div key={imageIndex} className="popup-card ">
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className='butt-buy'>
        <button className='buy'><a href="">Buy</a></button>
      </div>
      <div className="dropdown1">
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