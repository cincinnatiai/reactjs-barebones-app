import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import spinner from "../assets/loading.gif";
import FilmList from "../components/FilmList";
import { useAppSelector } from "../hooks/hooks";

const HomePage = (): React.JSX.Element => {
  const films = useAppSelector((state) => state.filmsSlice.films) || [];
  const isLoading = useAppSelector((state) => state.filmsSlice.isLoading);

  let content;

  if (films.length === 0) {
    content = (
      <div className="image-container">
        <img
          src="https:www.ghibli.jp/gallery/chihiro039.jpg"
          alt="Chihiro Movie"
          width={"90%"}
        />
      </div>
    );
  } else if (isLoading) {
    content = <img className="spinner" src={spinner} alt="loading spinner" />;
  } else {
    content = <FilmList />;
  }

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="container">{content}</div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
