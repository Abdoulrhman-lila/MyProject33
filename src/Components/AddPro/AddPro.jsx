import React, { useState } from "react";
import"./AddPro.css"

function AddPro() {
    const [images, setImages] = useState([]);
    const [area, setArea] = useState('');
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [yearBuilt, setYearBuilt] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [lotArea, setLotArea] = useState('');
    const [salePrice, setSalePrice] = useState(0);

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submit logic here, e.g., send data to backend
        console.log('Submitted Data:', { images, area, bedrooms, bathrooms, yearBuilt, publishDate, lotArea, salePrice });
    };

    return (
        <div>
            <div className="inputss">
                <h1>Add New <span>Property</span></h1>
                <form className="forms" onSubmit={handleSubmit}>
                    <label>
                        Images:
                        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                    </label>
                    <br />
                    <label>
                        Area:
                        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Bedrooms:
                        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Bathrooms:
                        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Year Built:
                        <input type="text" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Publish Date:
                        <input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Lot Area:
                        <input type="number" value={lotArea} onChange={(e) => setLotArea(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Sale Price:
                        <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit" className="butt">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddPro;