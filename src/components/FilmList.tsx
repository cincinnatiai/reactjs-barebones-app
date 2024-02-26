import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsStart } from "../app/reducers/filmsSlice";
import FilmCard from "./FilmCard";

const FilmList = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const films = useSelector((state: any) => state.films.films);
  const loading = useSelector((state: any) => state.films.loading);

  useEffect(() => {
    dispatch(fetchFilmsStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </>
  );
};

export default FilmList;
