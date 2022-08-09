import React from "react";

export const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">About</h6>
              <h2 className="title">What is Crypto ICO</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Crypto ICO aims to disrupt the cryptotrading industry by lowering
              the barrier <br className="d-none d-xl-block" />
              to creating algorithmic trading models.
            </p>
          </div>
          <div className="content-area">
            <div className="row">
              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInLeftShorter"
                data-animation-delay="0.5s"
              >
                <h4 className="title">
                  We built a platform for <br /> The crypto trading Industry
                </h4>
                <h6 className="pt-4 pb-2">
                  Cryptocurrency exchanges or digital currency exchanges (DCE)
                  are businesses that allow customers to trade cryptocurrencies
                  or digital currencies for other assets.
                </h6>
                <p>
                  Cryptocurrency exchanges or digital currency exchanges (DCE)
                  are businesses that allow customers to trade cryptocurrencies
                  or digital currencies for other assets
                </p>
                <p>
                  Creators of digital currencies are often independent of the
                  DCEs that trade the currency.[6] In one type of system,
                  digital currency providers (DCP), are businesses that keep and
                  administer accounts.
                </p>
              </div>
              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInRightShorter"
                data-animation-delay="0.5s"
              >
                <div className="position-relative what-is-crypto-img float-xl-right">
                  <img
                    className="img-fluid"
                    src="theme-assets/images/what-is-crypto.png"
                    alt="What is Crypto?"
                  />
                  <div className="play-video text-center">
                    <a
                      href="./"
                      className="play rounded-circle btn-gradient-purple btn-glow video-btn"
                      data-toggle="modal"
                      data-src="https://www.youtube.com/embed/UXAJu3zS4bU"
                      data-target="#ico-modal"
                    >
                      <i className="ti-control-play"></i>
                    </a>
                    <span className="mt-2 d-none d-md-block">How it works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
