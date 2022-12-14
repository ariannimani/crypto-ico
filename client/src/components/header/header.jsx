import React, { useContext, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import { Button } from "../button/button";

export const Header = () => {
  const {
    providerState,
    signerAddressState,
    signerState,
    getSigner,
    getWalletAddress,
  } = useContext(StateContext);

  useEffect(() => {
    if (signerState.signer !== undefined) {
      getWalletAddress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signerState]);

  return (
    <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
      <div className="container">
        <a
          className="navbar-brand animated"
          data-animation="fadeInDown"
          data-animation-delay="1s"
          href="#head-area"
        >
          <img src="theme-assets/images/logo.png" alt="Crypto Logo" />
          <span className="brand-text">
            <span className="font-weight-bold">Crypto</span> ICO
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          dataarget="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div id="navigation" className="navbar-nav ml-auto">
            <ul className="navbar-nav mt-1">
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.1s"
              >
                <a className="nav-link" href="#about">
                  What is ICO
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.2s"
              >
                <a className="nav-link" href="#problem-solution">
                  Solutions
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.3s"
              >
                <a className="nav-link" href="#whitepaper">
                  Whitepaper
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className="nav-link" href="#token-sale-mobile-app">
                  Token Sale
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.5s"
              >
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li
                className="dropdown show mr-2 px-2 animated"
                data-animation="fadeInDown"
                data-animation-delay="1.6s"
              >
                <a
                  className="dropdown-toggle white"
                  href="./"
                  role="button"
                  id="more"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="more">
                  <a className="dropdown-item" href="#mobile-app">
                    App
                  </a>
                  <a className="dropdown-item" href="#team">
                    Team
                  </a>
                  <a className="dropdown-item" href="#faq">
                    FAQ
                  </a>
                  <a className="dropdown-item" href="#contact">
                    Contact
                  </a>
                </div>
              </li>
              <li
                className="dropdown show mr-4 animated"
                data-animation="fadeInDown"
                data-animation-delay="1.7s"
              >
                <a
                  className="dropdown-toggle"
                  href="./"
                  role="button"
                  id="language"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="flag-icon flag-icon-us"></span> EN
                </a>
                {/* <div className="dropdown-menu" aria-labelledby="language">
                  <a className="dropdown-item" href="./">
                    <span className="flag-icon flag-icon-de"></span> GN
                  </a>
                  <a className="dropdown-item" href="./">
                    <span className="flag-icon flag-icon-es"></span> SP
                  </a>
                  <a className="dropdown-item" href="./">
                    <span className="flag-icon flag-icon-mq"></span> FR
                  </a>
                </div>*/}
              </li>
            </ul>
            <span id="slide-line"></span>
            <form className="form-inline mt-2 mt-md-0">
              <Button
                ButtonTitle={
                  signerAddressState.isConnected
                    ? `${signerAddressState.signerAddress.substring(0, 10)}...`
                    : "Connect Wallet"
                }
                cssClasses="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                signer={signerState}
                provider={providerState}
                click={true}
                clickFunction={getSigner}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
