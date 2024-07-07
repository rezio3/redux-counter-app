import React from "react";
import "../style/addButtonsSection.scss";
import AddButton from "./AddButton";
import { useSelector, useDispatch } from "react-redux";
import SubtractButton from "./SubtractButton";
import { initialState } from "../counterSlice";
import { clear } from "../counterSlice";

const AddButtonsSection = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const quantities = [10, 20, 30, 40, 50];

  const saveBtnHandler = () => {};

  const clearBtnHandler = () => {
    dispatch(clear());
  };

  return (
    <>
      <div className="all-buttons-container">
        <div className="add-buttons-container">
          {quantities.map((quantity) => {
            return <AddButton quantity={quantity} />;
          })}
        </div>
        <div className="add-buttons-container">
          {quantities.map((quantity) => {
            return <SubtractButton quantity={quantity} />;
          })}
        </div>
      </div>
      <span className="total">In total: {state.result}</span>
      <div className="lower-buttons-container">
        <button className="lower-button" onClick={saveBtnHandler}>
          Save result
        </button>
        <button className="lower-button" onClick={clearBtnHandler}>
          Clear
        </button>
      </div>
    </>
  );
};

export default AddButtonsSection;
