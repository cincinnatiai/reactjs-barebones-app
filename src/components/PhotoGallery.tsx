export const PhotoGallery = ({ photos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <img
            alt={photo.alt_description}
            style={{
              height: "200px",
              width: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            src={photo.urls.regular}
          />
        </div>
      ))}
    </div>
  );
};
