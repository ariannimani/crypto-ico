import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import {
  SET_PROVIDER,
  SET_SIGNER_ADDRESS,
} from "../../context/actions/actions";
import { Swap } from "../../components/swap/swap";

export const Token = () => {
  const {
    providerState,
    providerDispatch,
    signerState,
    signerDispatch,
    signerAddressState,
    signerAddressDispatch,
  } = useContext(StateContext);

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      providerDispatch({
        type: SET_PROVIDER,
        playload: { provider: provider },
      });
    };
    onLoad();
  }, []);

  return (
    <section
      id="token-sale-mobile-app"
      className="token-sale-mobile-app section-padding bg-gradient"
      data-midnight="white"
    >
      <div className="token-sale">
        <div className="container-fluid">
          <div className="container">
            <div className="dark-bg-heading text-center">
              <h6 className="sub-title">Pre-Sale &amp; Values</h6>
              <h2 className="title">TOKENS SALE</h2>
              <p
                className="content-desc animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                The first token sale (also known as an ICO) was held by
                Mastercoin in <br className="d-none d-xl-block" />
                July 2013. Ethereum raised money with a token sale in 2014.
              </p>
            </div>
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-6 col-md-12 animated"
                data-animation="fadeInLeftShorter"
                data-animation-delay="0.6s"
              >
                <div className="token-sale-counter">
                  <h5>ICO will start in</h5>
                  <Swap />
                </div>
              </div>
              <div
                className="col-xl-7 col-lg-6 col-md-12 mt-5 pl-4 animated"
                data-animation="fadeInRightShorter"
                data-animation-delay="0.6s"
              >
                <div className="row">
                  <p>
                    We have successfully reached the soft cap! Join now and get
                    a higher discount. <br />
                    Get your tokens for the best price: We fixed the Ether price
                    at $800.
                  </p>
                  <div className="col-md-5">
                    <ul className="token-sale-info">
                      <li>
                        Public PRE-ITS starts{" "}
                        <strong className="white">13 March</strong>
                      </li>
                      <li>
                        Public ITS ends{" "}
                        <strong className="white">25 May</strong>
                      </li>
                      <li>
                        Public ITS starts{" "}
                        <strong className="white">25 April</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7 pr-0">
                    <ul className="token-sale-info">
                      <li>
                        Acceptable currencies{" "}
                        <strong className="white">ETH, BTC, LTC</strong>
                      </li>
                      <li>
                        Minimal transaction amount{" "}
                        <strong className="white">1 ETH, 1 BTC, 1 LTC</strong>
                      </li>
                      <li>
                        Number of tokens for sale{" "}
                        <strong className="white">890,000 CIC (8%)</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-app" className="mobile-app">
        <div className="container-fluid">
          <div className="container">
            <div className="dark-bg-heading text-center">
              <h6 className="sub-title">Crypto ico App</h6>
              <h2 className="title">Mobile App</h2>
              <p
                className="content-desc animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                A cryptocurrency wallet stores the public and private keys which
                can be used to receive or spend{" "}
                <br className="d-none d-xl-block" />
                the cryptocurrency. A wallet can contain multiple public and
                private key pairs.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-md-12 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                <div className="dark-bg-heading mb-4">
                  <h4 className="title">Android &amp; ios app</h4>
                </div>
                <p>
                  Mobile app development is a term used to denote the act or
                  process by which a mobile app is developed for mobile devices,
                  such as personal digital assistants, enterprise digital
                  assistants or mobile phones. These applications can be
                  pre-installed on phones during manufacturing platforms, or
                  delivered as web application using server-side or client-side
                  processing to provide an "application-like" experience within
                  a Web browser.
                </p>
                <ul className="app-features">
                  <li className="dark-bg-text-color">
                    <i className="ti-pulse white mr-3"></i>Live crypto rate
                  </li>
                  <li className="dark-bg-text-color">
                    <i className="ti-stats-up white mr-3"></i>Latest
                    cryptocurrency news
                  </li>
                  <li className="dark-bg-text-color">
                    <i className="ti-split-h white mr-3"></i>Cryptocurrency
                    exchange
                  </li>
                </ul>
                <a
                  href="./"
                  className="btn btn-sm btn-gradient-purple btn-glow android mobile-button mr-4"
                >
                  <span>Android</span>{" "}
                  <img src="theme-assets/images/icon-android.png" alt="" />
                </a>
                <a
                  href="./"
                  className="btn btn-sm btn-gradient-purple btn-glow apple mobile-button"
                >
                  <span>Apple</span>{" "}
                  <img src="theme-assets/images/icon-apple.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 move-first">
                <div className="mobile-app-imgs">
                  <img
                    src="theme-assets/images/mobile-app-1.png"
                    alt="mobile-app"
                    className="mobile-app-img-1 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.9s"
                  />
                  <img
                    src="theme-assets/images/mobile-app-2.png"
                    alt="mobile-app"
                    className="mobile-app-img-2 animated"
                    data-animation="zoomIn"
                    data-animation-delay="1.4s"
                  />
                  <img
                    src="theme-assets/images/mobile-app-3.png"
                    alt="mobile-app"
                    className="mobile-app-img-3 animated"
                    data-animation="zoomIn"
                    data-animation-delay="1.9s"
                  />
                  <img
                    src="theme-assets/images/mobile-app-4.png"
                    alt="mobile-app"
                    className="mobile-app-img-4 animated"
                    data-animation="zoomIn"
                    data-animation-delay="2.4s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
