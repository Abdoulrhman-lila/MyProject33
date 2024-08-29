import "./View.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import images directly
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's icon issue with Webpack
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

function View() {
  const [property, setProperty] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const p_id = JSON.parse(localStorage.getItem("p_id"));

  useEffect(() => {
    if (p_id) {
      axios
        .post("http://127.0.0.1:8000/api/index_property", { id: p_id })
        .then((response) => {
          if (response.data.property) {
            setProperty(response.data.property);
          } else {
            console.error("Unexpected response data format:", response.data);
            setProperty(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching the property data:", error);
          setProperty(null);
        });

      axios
        .post("http://127.0.0.1:8000/api/getimage", { property_id: p_id })
        .then((response) => {
          setAdditionalImages(response.data);
        })
        .catch((error) => {
          console.error("Error fetching additional images:", error);
        });

      axios
        .post("http://127.0.0.1:8000/api/get_propperty_location", { p_id: p_id })
        .then((response) => {
          const location = response.data.Location;
          console.log(location);
          setCoordinates({
            lat: location.latitude,
            lng: location.longitude,
          });
        })
        .catch((error) => {
          console.error("Error fetching property location:", error);
        });
    }
  }, [p_id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="views2">
      <div className="flex">
        <section className="first-sec ">
          <section className="information-sec">
            <div className="flex">
              <img
                src={'../../../public/' + property.main_image_url}
                alt="Property Main"
                className="main-image"
              />
              <ul className="info33">
                <h2>
                  Property <span>Details</span>
                </h2>
                <li>
                  <span>Lot Area:</span> {property.area}
                </li>
                <li>
                  <span>Quality:</span> {property.condition}
                </li>
                <li>
                  <span>Total Rooms Above Grade:</span> {property.bedroom}
                </li>
                <li>
                  <span>Full Bathrooms:</span> {property.bathroom}
                </li>
                <li>
                  <span>Year Built:</span> {property.view}
                </li>
                <li>
                  <span>Location:</span> {property.location}
                </li>
                <li>
                  <span>Grade:</span> {property.grade}
                </li>
              </ul>
            </div>
          </section>
          <div className="buttons">
            <Link to="/buy">
              <button className="buy">Buy</button>
            </Link>
            <Link to="/appointments">
              <button className="res">Book an appointment</button>
            </Link>
          </div>
        </section>
      </div>
      <div className="image-slider">
        <h2>
          Property <span>Gallery</span>
        </h2>
        {/* <Slider {...sliderSettings}>
          {additionalImages.map((image, index) => (
            <div key={index}>
              <img
                src={'../../../public/' + image.image_url}
                alt={`Additional ${index + 1}`}
              />
            </div>
          ))}
        </Slider> */}
      </div>
      <div className="rat">
        <h2>
          If you like the property, <span>share your rating here.</span>
        </h2>
        <Link to="/rating">
          <button className="evalotion">Property Evaluation</button>
        </Link>
      </div>
      <div className="map-container">
        <h2>
          Property <span>Location</span>
        </h2>
        {coordinates.lat && coordinates.lng ? (
          <MapContainer
            center={[coordinates.lat, coordinates.lng]}
            zoom={15}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coordinates.lat, coordinates.lng]}>
              <Popup>Property Location</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div>Loading map...</div>
        )}
      </div>
    </div>
  );
}

export default View;
