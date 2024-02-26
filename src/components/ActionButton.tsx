import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { fetchFilmsStart } from "../app/slices/filmsSlice";

const ActionButton = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchFilmsStart());
  };
  return <button onClick={handleClick}>Get Films</button>;
};

export default ActionButton;
