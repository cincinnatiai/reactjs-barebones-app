import React from "react";
import LocationCard from "../components/LocationCard";

const HomePage: React.FC = () => {
  const locations = [
    {
      name: "Bali, Indonesia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Nusa_Lembongan_Bali.jpg",
      description:
        "Experience the beauty of beaches, temples, and vibrant culture in the Land of the Gods.",
    },
    {
      name: "Paris, France",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      description:
        "Fall in love with the Eiffel Tower, Louvre Museum, and romantic atmosphere.",
    },
    {
      name: "Kyoto, Japan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Ge-haiden_at_Fushimi_Inari-taisha_in_Kyoto%2C_Japan_%282019%29_-_065.jpg",
      description:
        "Immerse yourself in ancient temples, serene gardens, and unique cultural experiences.",
    },
  ];

  return (
    <div className="home-page">
      <h1>Explore the World with Us</h1>
      <div className="location-list">
        {locations.map((location) => (
          <LocationCard key={location.name} {...location} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
