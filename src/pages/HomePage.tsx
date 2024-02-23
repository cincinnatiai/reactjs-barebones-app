import React, { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import loading from "../assets/loading.gif";

import { PhotoGallery } from "../components/PhotoGallery";
import { useDispatch, useSelector } from "react-redux";
import { getPhotosFetch } from "../app/actions/actionCreators";
import { selectIsLoading, selectPhotos } from "../app/selectors/photosSelector";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(getPhotosFetch());
  });

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="container">
          {isLoading ? (
            <img className="spinner" src={loading} alt="loading spinner" />
          ) : (
            <PhotoGallery photos={photos} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
