import { Film } from "../api/ghibliApi/ghibliApi";

const FilmCard = ({ film }: { film: Film }): React.JSX.Element => {
  const truncate = (
    text: string,
    maxLength: number,
    ellipsis: string = "..."
  ): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - ellipsis.length) + ellipsis;
  };

  const filmDescription = truncate(film.description, 428);

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img
            src={film.image}
            alt={film.title}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-description">
          <h1>{film.title}</h1>
          <p>{filmDescription}</p>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
