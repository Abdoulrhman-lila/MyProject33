import "./Testimonials.css";
import  { useState } from 'react';
import axios from 'axios';

function Testimonials() {
  const user=JSON.parse(localStorage.getItem('user'));
  const [newTestimonial, setNewTestimonial] = useState({
    title: '',
    content: '',
    user_id: user.id // Assuming you're adding a user ID manually for now. Replace this with the actual user ID.
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTestimonial((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the data to the backend using Axios
      const response = await axios.post('http://127.0.0.1:8000/api/add_suggesion', newTestimonial);

      if (response.status === 201) { // Assuming 201 Created status for a successful POST
        console.log('Testimonial submitted successfully');
      }
      
      // Reset form after submission
      setNewTestimonial({
        title: '',
        content: '',
        user_id: user.id // Reset or maintain the user_id as required
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <section id="client">
        <h2>Submit Your <span>Testimonial</span></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={newTestimonial.title} onChange={handleInputChange} required />
          </label>
          <label>
            Testimonial:
            <textarea name="content" value={newTestimonial.content} onChange={handleInputChange} required></textarea>
          </label>
          <button type="submit">Submit Testimonial</button>
        </form>
      </section>
    </>
  );
}

export default Testimonials;
