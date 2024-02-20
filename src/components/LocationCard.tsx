const LocationCard = ({ name, image, description }) => {
  return (
    <div className="location-card">
      <img src={image} alt={name} width={"400px"} />
      <h3>{name}</h3>
      <p className="location-card-description">{description}</p>
      <br />
    </div>
  );
};

export default LocationCard;
