import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmDetailsStart } from "../app/reducers/filmDetailsSlice";
import { Film } from "../api/ghibliApi/ghibliApi";

const FilmCard = ({ film }: { film: Film }): React.JSX.Element => {
  const dispatch = useDispatch();
  const filmDetails = useSelector((state: any) => state.filmDetails.film);

  useEffect(() => {
    dispatch(fetchFilmDetailsStart());
  }, [dispatch]);

  if (!filmDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h1>{filmDetails.title}</h1>
      <p>{filmDetails.description}</p>
      {filmDetails.image && (
        <img src={filmDetails.image} alt={filmDetails.title} />
      )}
    </div>
  );
};

export default FilmCard;
