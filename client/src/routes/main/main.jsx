import React from "react";
import { Button } from "../../components/button/button";

export const Main = () => {
  return (
    <main>
      <section className="head-area" id="head-area" data-midnight="white">
        <div id="particles-js"></div>
        <div className="head-content container-fluid bg-gradient d-flex align-items-center">
          <div className="container">
            <div className="banner-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="banner-content pt-5">
                    <h1
                      className="best-template animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.5s"
                    >
                      Crypto ICO is modern, clean and{" "}
                      <br className="d-none d-xl-block" />
                      gradient ui ico most trending{" "}
                      <br className="d-none d-xl-block" />
                      template of 2019
                    </h1>
                    <h3
                      className="mb-4 d-block white animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.6s"
                    >
                      First decentralized marketing platform that allows{" "}
                      <br className="d-none d-xl-block" />
                      merchants and affiliates.
                    </h3>
                    <div className="mt-5">
                      <Button
                        ButtonTitle={"Purchase Token"}
                        cssClasses="btn btn-lg btn-gradient-purple btn-glow mr-2 animated"
                      />
                      <Button
                        ButtonTitle={"Whitepapaer"}
                        cssClasses="btn btn-lg btn-gradient-purple btn-glow mr-2 animated"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 move-first">
                  <div
                    className="crypto-3d-graphic animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.7s"
                  >
                    <img
                      src="theme-assets/images/banner-graphic.png"
                      className="graphic-3d-img mx-auto d-block"
                      alt="CICO"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
