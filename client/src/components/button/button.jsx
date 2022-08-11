import React from "react";
import { Link } from "react-router-dom";
export const Button = ({
  ButtonTitle,
  cssClasses,
  provider,
  click,
  signer,
  clickFunction,
}) => {
  return (
    <Link
      to="./"
      className={cssClasses}
      data-animation="fadeInUpShorter"
      data-animation-delay="1.7s"
      onClick={click ? () => clickFunction(provider, signer) : ""}
    >
      {ButtonTitle}
    </Link>
  );
};
