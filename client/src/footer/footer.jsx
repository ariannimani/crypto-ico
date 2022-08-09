import React from "react";

export const Footer = () => {
  return (
    <footer
      className="footer static-bottom  footer-custom-className"
      data-midnight="white"
    >
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="about">
                <div
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  <img src="theme-assets/images/logo.png" alt="Logo" />
                  <span className="logo-text">Crypto ICO</span>
                </div>
                <div
                  className="about-text animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <p className="grey-accent2">
                    Crypto Ico is a blockchain platform that allows users to
                    make payments, create and request loans and crowdfund
                    projects.
                  </p>
                </div>
                <ul className="social-buttons list-unstyled mb-5">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <a href="./" title="Facebook" className="btn font-medium">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.5s"
                  >
                    <a href="./" title="Twitter" className="btn font-medium">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <a href="./" title="LinkedIn" className="btn font-medium">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                  >
                    <a href="./" title="GitHub" className="btn font-medium">
                      <i className="ti-github"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                  >
                    <a href="./" title="Pintrest" className="btn font-medium">
                      <i className="ti-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="links">
                <h5
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Useful Links
                </h5>
                <ul className="useful-links float-left mr-5">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <a href="./">What is ICO</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                  >
                    <a href="./">Solutions</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                  >
                    <a href="./">Whitepaper </a>
                  </li>
                </ul>
                <ul className="useful-links">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.9s"
                  >
                    <a href="./">Roadmap</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    <a href="./">Team</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.1s"
                  >
                    <a href="./">Sign in</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feed">
                <h5
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  Twitter Feed
                </h5>
                <div className="tweets">
                  <span
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    More about our most powerful theme Crypto ICO :
                    https://t.co/JHBAS345
                  </span>
                  <span
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.2s"
                  >
                    More infotamation about CIC Coin : https://t.co/JHSD34JHB
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right mx-auto text-center">
            <span className="copyright">
              Copyright &copy; 2019, Crypto ICO. Template Designed by{" "}
              <a
                href="http://pixinvent.com"
                title="pixinvent"
                className="white"
              >
                Pixinvent
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
