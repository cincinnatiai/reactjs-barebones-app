import React from "react";
import { useDispatch } from "react-redux";
import { getFilmsFetch } from "../app/actions/actionCreators";

const ActionButton = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getFilmsFetch());
  };
  return <button onClick={handleClick}>Get Films</button>;
};

export default ActionButton;
