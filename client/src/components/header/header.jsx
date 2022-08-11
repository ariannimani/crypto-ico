import React, { useContext, useEffect } from "react";
import {
  SET_ETH_AMOUNT,
  SET_SIGNER,
  SET_SIGNER_ADDRESS,
  SET_UNI_AMOUNT,
} from "../../context/actions/actions";
import { StateContext } from "../../context/StateProvider";
import { Button } from "../button/button";
import { ethers } from "ethers";

export const Header = () => {
  const {
    providerState,
    signerAddressState,
    signerDispatch,
    signerState,
    signerAddressDispatch,
    ethContractState,
    ethAmountDispatch,
    uniContractState,
    uniAmountDispatch,
  } = useContext(StateContext);

  const getWalletAddress = () => {
    signerState.signer.getAddress().then((address) => {
      signerAddressDispatch({
        type: SET_SIGNER_ADDRESS,
        payload: { signerAddress: address, isConnected: true },
      });
      console.log(
        uniContractState.contract
          .balanceOf(address)
          .then((res) => Number(ethers.utils.formatEther(res)))
      );

      // connect weth and uni contracts
      ethContractState.contract.balanceOf(address).then((res) =>
        ethAmountDispatch({
          type: SET_ETH_AMOUNT,
          payload: { amount: Number(ethers.utils.formatEther(res)) },
        })
      );
      uniContractState.contract.balanceOf(address).then((res) =>
        uniAmountDispatch({
          type: SET_UNI_AMOUNT,
          payload: { amount: Number(ethers.utils.formatEther(res)) },
        })
      );
    });
  };

  const getSigner = async (provider) => {
    provider.provider.send("eth_requestAccounts", []);
    const signer = provider.provider.getSigner();
    signerDispatch({
      type: SET_SIGNER,
      payload: { signer: signer, isConnected: true },
    });
  };

  useEffect(() => {
    if (signerState.signer !== undefined) {
      getWalletAddress();
    }
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
                ButtonTitle={"Connect Wallet"}
                cssClasses="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                signerAddress={signerAddressState}
                signer={signerState}
                isWallet={true}
                getSigner={getSigner}
                provider={providerState}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
