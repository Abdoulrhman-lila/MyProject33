import "./Footer.css"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";


function Footer() {
  return (
    <div className="footer ">
        <div className=" contain flex">
        <section className="left-section1 ">
            <h1>EstateAgency</h1>
   
    <ul>
        <li>Phone: +963 992685880</li>
        <li>Email: <a href="">abdoulrhmanlila@gmail.com</a></li>
    </ul>
        </section>

        <section className="left-section1 ">
            <h1>The Company</h1>
   
     <ul>
        <li><a href="">Site Map</a></li>
        <li><a href=""> Legal</a></li>

    </ul>
        </section>

        <section className="left-section1 ">
            <h1>International sites</h1>
   
    <ul>
        <li><a href=""> Venezuela</a></li>
        <li><a href="">China</a></li>
    </ul>
        </section>

        

        </div>
        <section className="icons">
            <label htmlFor=""><AiOutlineFacebook /></label>
            <label htmlFor=""><FaWhatsapp /></label>
            <label htmlFor=""><FaInstagram /></label>
            <label htmlFor=""><FiTwitter /></label>
        </section>
        <hr />
        <section className="link">
       <h3>© Copyright EstateAgency All Rights Reserved.</h3>
       <p>Designed by <a href="">Eng:Abdoulrhman laila</a></p>
        </section>
       
    </div>
    
  )
}

export default Footer