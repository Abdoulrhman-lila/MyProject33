import "./Begning.css"
import { MdRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";


function Begning() {
  return (
    <>
      <div className="begin">
        <div className="intro ">
          <div className=" title ">
            <label ><MdRealEstateAgent /></label>
            <h1>ESTATE <span>ZEN</span></h1>
          </div>
          <p>A platform for buying and selling real estate that helps you find the right property in the area you want at reasonable prices.</p>
        </div>


        <div className="text">
          <img src="page-heading-bg.jpg" alt="" />
          <p> <h2>Sell with a partner agent or <span>get a cash offer</span></h2>Estate Zen helps you sell your home, your way.
            Easily explore your selling and bueing options  and get personalized market value estimates — we can even help you choose the best option
            when you’re ready.</p>
        </div>

        <section className="left-section flex">
          <img src="bo.png" alt="" />
          <section className="right-section ">
            <h2>Need a home loan? Get pre-approved</h2>
            <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
          </section>
        </section>
        <div className="c flex">
          <section className="left-sec">
            <h2>Get Local Info</h2>
            <p>Does it have pet-friendly rentals? How are the schools? Get important local information on the area you're most interested in</p>
          </section>
          <section className="right-sec1">
            <img src="bo3.png" alt="" />
          </section>
        </div>

        <div className="join">
          <h1>To join us, please create an account.</h1>
        </div>
        <section className="sec  flex">
          <button> <Link to="/login"> Log In</Link></button>
          <button> <Link to="/create-account" >Create Account</Link></button>
        </section>

      </div>
    </>
  )
}

export default Begning