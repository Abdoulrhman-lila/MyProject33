// Testimonials.js
import "./Testimonials.css";
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {


  const [newTestimonial, setNewTestimonial] = useState({
    image: '',
    name: '',
    text: '',
    rating: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTestimonial((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewTestimonial((prevState) => ({
      ...prevState,
      rating
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTestimonials((prevState) => [...prevState, newTestimonial]);
    setNewTestimonial({
      image: '',
      name: '',
      text: '',
      rating: 0
    });
  };


  return (
    <>
      <section id="client">
        
        <h2>Submit Your <span>Testimonial</span></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={newTestimonial.name} onChange={handleInputChange} required />
          </label>
          <label>
            Image URL:
            <input type="text" name="image" value={newTestimonial.image} onChange={handleInputChange} required />
          </label>
          <label>
            Testimonial:
            <textarea name="text" value={newTestimonial.text} onChange={handleInputChange} required></textarea>
          </label>
          <label>
            Rating:
            <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`star ${index < newTestimonial.rating ? 'active' : ''}`}
                onClick={() => handleRatingChange(index + 1)}
              />
            ))}
          </div>
           
          </label>
          <button type="submit">Submit Testimonial</button>
        </form>
      </section>
    </>
  );
}

export default Testimonials;