import React from "react";
import { Link } from "react-router-dom";
export const Button = ({ ButtonTitle, cssClasses }) => {
  return (
    <Link
      to="./"
      className={cssClasses}
      data-animation="fadeInUpShorter"
      data-animation-delay="1.7s"
    >
      {ButtonTitle}
    </Link>
  );
};
