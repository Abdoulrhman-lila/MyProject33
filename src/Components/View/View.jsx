import "./View.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const data3 = [
  {
    id: 1,
    image: "banner-01.jpg",
    propertyDetails: [
      { label: "Area", value: "100 m" },
      { label: "Bedroom", value: "3" },
      { label: "Bathroom", value: "2" },
      { label: "Location", value: "Downtown" },
      { label: "Direction", value: "North" },
      { label: "View", value: "City View" },
      { label: "Condition", value: "New" },
      { label: "Grade", value: "A" },
    ]
  },
  {
    id: 2,
    image: "banner-02.jpg",
    propertyDetails: [
      { label: "Area", value: "120 m" },
      { label: "Bedroom", value: "4" },
      { label: "Bathroom", value: "3" },
      { label: "Location", value: "Uptown" },
      { label: "Direction", value: "South" },
      { label: "View", value: "Park View" },
      { label: "Condition", value: "Used" },
      { label: "Grade", value: "B" },
    ]
  },
  {
    id: 3,
    image: "banner-03.jpg",
    propertyDetails: [
      { label: "Area", value: "150 m" },
      { label: "Bedroom", value: "5" },
      { label: "Bathroom", value: "4" },
      { label: "Location", value: "Suburbs" },
      { label: "Direction", value: "East" },
      { label: "View", value: "Garden View" },
      { label: "Condition", value: "New" },
      { label: "Grade", value: "A" },
    ]
  }
];

function View() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data3.length / itemsPerPage) - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data3.slice(startIndex, endIndex);

  return (
    <div className="views2">
      <div className="flex">
        <section className="first-sec ">
          {currentItems.map((item) => (
            <section key={item.id} className="information-sec">
              <div className="flex">
                <img src={item.image} alt="" />
                <ul className="info33">
                <h2>Property <span>Details</span></h2>
                  {item.propertyDetails.map((detail) => (
                    <li key={detail.label}>
                      <span>{detail.label}:</span> {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
          <div className="buttons">
        <Link to="/buy"><button className="buy">Buy</button></Link>
        <Link to="/appointments"><button className="res">Book an appointment</button></Link>
      </div>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
              Prev
            </button>
            <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(data3.length / itemsPerPage) - 1}>
              Next
            </button>
          </div>
        </section>
      </div>
      <div className="rat">
      <h2>If you like the property, <span>share your rating here.</span></h2>
      <Link to="/rating"><button className="evalotion">Property Evaluation</button></Link>
      </div>
    </div>
  );
}

export default View;