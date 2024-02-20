import React from "react";
import { useNavigate } from "react-router-dom";
import LocationCard from "../components/LocationCard";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <button className="return-home-button" onClick={() => navigate("/")}>
        Return to HOME
      </button>
      <LocationCard
        name="Travel With Us!"
        image="https://upload.wikimedia.org/wikipedia/commons/3/33/N1015X_Air_Tahiti_Nui_Boeing_787-9_Dreamliner_26.jpg"
        description="Wanderlust Emporium wasn't just a travel agency; it was a portal to a world of possibilities. It was a place where dreams were translated into itineraries, where anxieties were calmed with expert knowledge, and where wanderlust found its wings. Here, you weren't just purchasing a vacation; you were investing in memories that would stay with you long after your tan faded."
      />
    </div>
  );
};

export default AboutPage;
