import React from "react";
import FilmCard from "./FilmCard";
import { useAppSelector } from "../hooks/hooks";

const FilmList = (): React.JSX.Element => {
  const films = useAppSelector((state) => state.filmsSlice.films);
  return (
    <>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </>
  );
};

export default FilmList;
