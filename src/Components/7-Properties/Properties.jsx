import './Properties.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Properties() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [data, setData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [spaceFilter, setSpaceFilter] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // حالة لرسالة الخطأ

  // جلب البيانات من API عند تحميل المكون
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/popertyInformation')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the property data:', error);
      });
  }, []);

  // تصفية البيانات
  const filteredData = data.filter((item) => {
    return (
      (locationFilter === "" || item.location === locationFilter) &&
      (priceFilter === "" || item.sale_price === parseFloat(priceFilter)) &&
      (spaceFilter === "" || item.area === parseFloat(spaceFilter))
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

  const handleViewMore = (id) => {
    localStorage.setItem('p_id', JSON.stringify(id));
    navigate('/view');
  };

  const Handle_Add_Property = () => {
    if (user && user.can_add === 0) {
      navigate('/add');
    } else {
      navigate('/not-allowed');
    }
  };

  const Add_To_Favorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      axios.delete("http://127.0.0.1:8000/api/delete_from_favorite", {
        data: { user_id: user.id, property_id: id }
      })
      .then(response => {
        console.log('Property removed from favorites:', response.data);
      })
      .catch(error => {
        console.error('Error removing property from favorites:', error);
      });
    } else {
      setFavorites([...favorites, id]);
      axios.post("http://127.0.0.1:8000/api/add_to_favorite", { user_id: user.id, property_id: id })
      .then(response => {
        console.log('Property added to favorites:', response.data);
      })
      .catch(error => {
        console.error('Error adding property to favorites:', error);
      });
    }
  };

  return (
    <div className="property">
      <div className="image-container">
        <img src="page-heading-bg.jpg" alt="Page Heading" />
        <span className="image-text2">PROPERTIES</span>
       <Link to="/add"><button onClick={Handle_Add_Property} className="image-text2">To add a property click here</button></Link>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* عرض رسالة الخطأ */}
      </div>
      <div className="option"></div>
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
                <option key={item.id} value={item.sale_price}>
                  {item.sale_price}
                </option>
              ))}
            </select>

            <select value={spaceFilter} onChange={handleSpaceFilterChange}>
              <option value="">Select Area</option>
              {data.map((item) => (
                <option key={item.id} value={item.area}>
                  {item.area}
                </option>
              ))}
            </select>
            <button>Search</button>
          </div>
        </div>
      </div>
      
      {filteredData.length > 0 ? (
        <section className="cardsss flex">
          {filteredData.map((item, index) => (
            <article className="card122" key={index} id={`card-${index}`}>
              <div className="card-image-container">
                <img src={'../../../public/' + item.main_image_url} width={'100%'} height={'250px'} alt="Property" />
                <button
                  className={`favorite-btn ${favorites.includes(item.id) ? 'favorited' : ''}`}
                  onClick={() => Add_To_Favorite(item.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <h5>Location :</h5>
              <p className="space"><span style={{color:"grey",fontSize:12}}>{item.location}</span></p>
              <h5>View</h5>
              <p className="space"><span style={{color:"grey",fontSize:12}}>{item.view}</span></p>
              <h5>Area</h5>
              <p className="space">{item.area}<span style={{color:"grey",fontSize:12}}> FT </span></p>
              
              <div className="views">
                <button
                  className="view"
                  onClick={() => handleViewMore(item.id)}
                >
                  More Information
                </button>
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

export default Properties;