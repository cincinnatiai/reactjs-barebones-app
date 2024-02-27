import React from "react";
import FilmCard from "./FilmCard";
import { useSelector } from "react-redux";
import { selectFilms } from "../app/selectors/filmsSelector";

const FilmList = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  return (
    <>{films && films.map((film) => <FilmCard key={film.id} film={film} />)}</>
  );
};

export default FilmList;
