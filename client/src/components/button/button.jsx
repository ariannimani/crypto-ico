import React from "react";
import { Link } from "react-router-dom";
export const Button = ({
  ButtonTitle,
  cssClasses,
  signerAddress,
  getSigner,
  provider,
  isWallet,
}) => {
  return (
    <React.Fragment>
      {isWallet && signerAddress.isConnected ? (
        <Link
          to="./"
          className={cssClasses}
          data-animation="fadeInUpShorter"
          data-animation-delay="1.7s"
        >
          {`${signerAddress.signerAddress.substring(0, 10)}...`}
        </Link>
      ) : (
        <Link
          to="./"
          className={cssClasses}
          data-animation="fadeInUpShorter"
          data-animation-delay="1.7s"
          onClick={() => getSigner(provider)}
        >
          {ButtonTitle}
        </Link>
      )}
    </React.Fragment>
  );
};
