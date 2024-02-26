import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loading from "../assets/loading.gif";
import { useSelector } from "react-redux";
import { selectIsLoading, selectFilms } from "../app/selectors/filmsSelector";
import FilmList from "../components/FilmList";

const HomePage: React.FC = () => {
  const films = useSelector(selectFilms) || [];
  const isLoading = useSelector(selectIsLoading);
  let content;

  if (films.length === 0) {
    content = (
      <div className="image-container">
        <img
          src="https:www.ghibli.jp/gallery/chihiro039.jpg"
          alt="Chihiro Movie"
        />
      </div>
    );
  } else if (isLoading) {
    content = <img className="spinner" src={loading} alt="loading spinner" />;
  } else {
    content = <FilmList films={films} />;
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
