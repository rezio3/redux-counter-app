import React from "react";
import "../style/resultSection.scss";
import { useSelector } from "react-redux";
import SavedResults from "./SavedResults";

const ResultSection = () => {
  const state = useSelector((state) => state.counter);

  return (
    <>
      <h2>Result list</h2>
      <ul className="result-list">
        {state.saved.length === 0 ? (
          <span>There are no saved results</span>
        ) : (
          state.saved.map((e) => {
            return <SavedResults resultTxt={e} />;
          })
        )}
      </ul>
    </>
  );
};

export default ResultSection;
