import "./Home2.css";
import { FaStar } from 'react-icons/fa';




const testimonials = [
  {
    title: "Exceptional Realtor!",
    name: "Alice Smith",
    text: "I couldn't have asked for a better experience. My realtor was knowledgeable and went above and beyond to find my dream home.",
  },
  {
    title: "Great Investment",
    name: "Bob Johnson",
    text: "The property I purchased has already increased in value. I’m thrilled with my investment and the advice I received!",
  },
  {
    title: "Seamless Process",
    name: "Charlie Brown",
    text: "From listing to closing, everything was handled smoothly. The team made it easy to buy my new home.",
  },
  {
    title: "Highly Recommend!",
    name: "Diana Prince",
    text: "Fantastic support throughout the house-hunting journey. I felt guided every step of the way!",
  },
];







function Home2() {




  return (
    <div className="home2">
      <section className="sections flex">
        <section className="left-sec ">
          <h1>Perfect way to buy and <span>sell a home</span></h1>
          <p>The house of life, nor the bed of real estate, but the price of the easy ones.
             An urn, a mass of some kind.
              And, pregnant women don't need to be pregnant</p>
        </section>
        <section className="right-sec">
          <img src="Billboard.png" alt="" />
        </section>
      </section>
      <section id="testimonials">
  <h2>Testimonials</h2>
  {testimonials.length === 0 ? (
    <p>No testimonials yet.</p>
  ) : (
    testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <h3>{testimonial.title}</h3> 
        <h4>{testimonial.name}</h4>  
        <p>{testimonial.text}</p>     
      </div>
    ))
  )}
</section>
    </div>
  );
}

export default Home2;