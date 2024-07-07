import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../counterSlice";

const AddButton = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="add-button"
        onClick={() => {
          dispatch(add(props.quantity));
        }}
      >
        +{props.quantity}
      </button>
    </>
  );
};

export default AddButton;
