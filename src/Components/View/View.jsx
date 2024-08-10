import "./View.css";
import { useState } from "react";

const data3 = [
    {
      id:1,
        image: "banner-01.jpg",
    },
    {
      id:2,
        image: "banner-02.jpg",
      
    },
    {
      id:3,
        image: "banner-03.jpg",

    }
];

function View() {

    const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data3.slice(startIndex, endIndex);
    return (
        <div className="views2">
            {currentItems.map((item, index) => (
                <section key={index} className="information-sec">
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                </section>
            ))}
            <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={currentPage >= data3.length / itemsPerPage - 1}>
          Next
        </button>
      </div>
        </div>
    );
}

export default View;