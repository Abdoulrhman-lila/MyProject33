import "./About.css";
import { useState } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";




const myservices = [
  {
    icon: <CiMoneyCheck1 />,
    Title: "Loans",
    subTitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolor
     tempora dignissimos maiores soluta provident quam sit a animi, nisi ex! Ab, quas minima quasi
      tenetur quae corrupti est velit.`
  },
  {
    icon: <GrFormSchedule />,
    Title: "Sell",
    subTitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolor
    tempora dignissimos maiores soluta provident quam sit a animi, nisi ex! Ab, quas minima quasi
     tenetur quae corrupti est velit.`
  },
  {
    icon: <RiShoppingCart2Line />,
    Title: "the purchase",
    subTitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolor
    tempora dignissimos maiores soluta provident quam sit a animi, nisi ex! Ab, quas minima quasi
     tenetur quae corrupti est velit.`
  }
];


function About() {
 

  return (
    <>
      <div className="about">
      
        
        <section className='serv-section'>
        <h1>Our <span>Services</span></h1>
        <div className=' our-serv '>
        <div className='services flex '>
  {myservices.map((item) => (
    <section className='service 'key={item.Title}>
      <label htmlFor="">{item.icon}</label>
      <h2 className='title1'>{item.Title}</h2>
      <p className='sub-title'>{item.subTitle}</p>
    </section>
  ))}
</div>
        </div>
      </section>
      
      </div>
   
    </>
  );
}

export default About;