import React from "react";
import LocationCard from "../components/LocationCard";
import { useLocation } from "react-router-dom";

const PlacesPage: React.FC = () => {
  const location = useLocation();
  return (
    <div className="home-page">
      <p>This is our featured place at {location.pathname.toUpperCase()}</p>
      <LocationCard
        name="Lombard London"
        image="https://upload.wikimedia.org/wikipedia/commons/b/b5/St_Mary_Woolnoth%2C_Lombard_Street%2C_London_EC3_-_geograph.org.uk_-_1202998.jpg"
        description="St Mary Woolnoth, Lombard Street, London EC3"
      />
    </div>
  );
};

export default PlacesPage;
