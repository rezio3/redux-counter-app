import React from "react";
import { useDispatch } from "react-redux";
import { subtract } from "../counterSlice";

const SubtractButton = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="add-button"
        onClick={() => {
          dispatch(subtract(props.quantity));
        }}
      >
        -{props.quantity}
      </button>
    </>
  );
};

export default SubtractButton;
