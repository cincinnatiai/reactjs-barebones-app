import React, { useEffect } from "react";
import { fetchFilmDetailsStart } from "../app/slices/filmDetailsSlice";
import { Film } from "../api/ghibliApi/ghibliApi";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const FilmCard = ({ film }: { film: Film }): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const filmDetails = useAppSelector(
    (state) => state.filmDetailsSlice.filmDetails?.image
  );

  useEffect(() => {
    dispatch(fetchFilmDetailsStart());
  });

  return (
    <div className="card">
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <img src={filmDetails} alt={film.title} />;
    </div>
  );
};

export default FilmCard;
