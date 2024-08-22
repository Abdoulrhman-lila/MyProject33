// Testimonials.js
import "./Testimonials.css";
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {


  const [newTestimonial, setNewTestimonial] = useState({
    title:'',
    name: '',
    text: '',

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTestimonial((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setTestimonials((prevState) => [...prevState, newTestimonial]);
    setNewTestimonial({
    title:'',
      name: '',
      text: '',
  
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
            Title:
            <input type="text" name="title" value={newTestimonial.title} onChange={handleInputChange} required />
          </label>
          <label>
            Testimonial:
            <textarea name="text" value={newTestimonial.text} onChange={handleInputChange} required></textarea>
          </label>
          <label>
           
           
          </label>
          <button type="submit">Submit Testimonial</button>
        </form>
      </section>
    </>
  );
}

export default Testimonials;