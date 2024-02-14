import React from "react";

interface ImageWithUserNameProps {
  src: string;
  alt: string;
  username: string;
}

const ImageWithUserName: React.FC<ImageWithUserNameProps> = (props) => {
  const { src, alt, username } = props;

  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image-with-shadow" />
      <p className="user-name">{username}</p>
    </div>
  );
};

export default ImageWithUserName;
