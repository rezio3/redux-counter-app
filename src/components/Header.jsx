import React from "react";
import "../style/header.scss";

const Header = (props) => {
  return (
    <>
      <h1>{props.txt}</h1>
    </>
  );
};

export default Header;
