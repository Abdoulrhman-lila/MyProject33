import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddPro.css";

// Replace with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBNI5_q6wJENCKDv3N80IaFVPJIfU9_iz4';

const locations = {
    // ... (Keep your location data here)
};

const direction_multipliers = {
    // ... (Keep your direction multipliers here)
};

function AddPro() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const [area, setArea] = useState('');
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [direction, setDirection] = useState('');
    const [view, setView] = useState('');
    const [condition, setCondition] = useState('');
    const [grade, setGrade] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [city, setCity] = useState('');
  
    const userId = user?.id; // Use optional chaining
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [coordinates, setCoordinates] = useState({ lat: 33.5138, lng: 36.2765 });

    // Initialize the Google Map
    const initMap = () => {
        const mapOptions = {
            center: { lat: 33.5138, lng: 36.2765 },
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        const mapInstance = new google.maps.Map(document.getElementById("map"), mapOptions);
        setMap(mapInstance);

        mapInstance.addListener("click", (event) => {
            const { latLng } = event;
            const lat = latLng.lat();
            const lng = latLng.lng();
            setCoordinates({ lat, lng });

            if (marker) {
                marker.setPosition({ lat, lng });
            } else {
                const newMarker = new google.maps.Marker({
                    position: { lat, lng },
                    map: mapInstance,
                    title: "Selected Location",
                });
                setMarker(newMarker);
            }
        });
    };

    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
            script.async = true;
            window.initMap = initMap; // Ensure initMap is globally accessible
            document.head.appendChild(script);
        };

        if (window.google) {
            initMap();
        } else {
            loadMapScript();
        }
    }, []);

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        setMainImage(file);
    };

    const handleAdditionalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setAdditionalImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('area', area);
            formData.append('bedroom', bedrooms);
            formData.append('bathroom', bathrooms);
            formData.append('location', selectedLocation);
            formData.append('direction', direction);
            formData.append('view', view);
            formData.append('condition', condition);
            formData.append('grade', grade);
            formData.append('sale_price', salePrice);
            formData.append('user_id', userId);

            if (mainImage) {
                formData.append('main_image_url', mainImage);
            }

            const propertyResponse = await axios.post('http://127.0.0.1:8000/api/add_property', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const propertyId = propertyResponse.data.property.id;

            // Send property location information
            const locationFormData = new FormData();
            locationFormData.append('property_id', propertyId);
            locationFormData.append('latitude', coordinates.lat);
            locationFormData.append('longitude', coordinates.lng);
            locationFormData.append('city', city);

            await axios.post('http://127.0.0.1:8000/api/add_property_location', locationFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Upload additional images if any
            if (additionalImages.length > 0) {
                const multimediaFormData = new FormData();
                additionalImages.forEach((file, index) => {
                    multimediaFormData.append(`image_url[${index}]`, file);
                });
                multimediaFormData.append('property_id', propertyId);

                await axios.post('http://127.0.0.1:8000/api/addImage', multimediaFormData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }

            console.log('Property and images uploaded successfully');
            alert('Property and images uploaded successfully');
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
            alert('Error submitting form: ' + (error.response?.data.message || error.message));
        }
    };

    return (
        <div className="add">
            <div className="inputss">
                <h1>Add New <span>Property</span></h1>
                <form className="forms" onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <div className="form-group">
                        <label>Main Image:</label>
                        <input type="file" accept="image/*" onChange={handleMainImageChange} />
                    </div>
                    <div className="form-group">
                        <label>Additional Images:</label>
                        <input type="file" accept="image/*" multiple onChange={handleAdditionalImagesChange} />
                    </div>
                    <div className="form-group">
                        <label>Area (sq. ft.):</label>
                        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Bedrooms:</label>
                        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Bathrooms:</label>
                        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                            <option value="">Select a location</option>
                            {Object.keys(locations).map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Direction:</label>
                        <select value={direction} onChange={(e) => setDirection(e.target.value)}>
                            <option value="">Select a direction</option>
                            {Object.keys(direction_multipliers).map((dir) => (
                                <option key={dir} value={dir}>
                                    {dir}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>View:</label>
                        <input type="text" value={view} onChange={(e) => setView(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Condition:</label>
                        <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Grade:</label>
                        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Sale Price:</label>
                        <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Coordinates:</label>
                        <p>Latitude: {coordinates.lat}</p>
                        <p>Longitude: {coordinates.lng}</p>
                    </div>
                    <button type="submit" className="butt">Submit</button>
                </form>
            </div>
            <div className="map-container">
                <div id="map" style={{ height: '400px', width: '100%' }}></div>
                <button onClick={() => {
                    if (map) {
                        const center = map.getCenter();
                        setCoordinates({ lat: center.lat(), lng: center.lng() });
                    }
                }} className="center-button">Center Map</button>
            </div>
        </div>
    );
}

export default AddPro;