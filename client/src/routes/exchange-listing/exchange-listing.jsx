import React from "react";

export const ExchangeListing = () => {
  return (
    <section className="exchange-listing" id="exchange-listing">
      <div className="container-fluid bg-color">
        <div className="container">
          <div className="row listing list-unstyled">
            <div
              className="col d-none d-lg-block text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              <img src="theme-assets/images/icon-arrow.png" alt="icon-arrow" />
              <p className="grey-accent2 mt-1">
                Exchange listing
                <br />
                to be announced
              </p>
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h2>4.3/5</h2>
              <img src="theme-assets/images/ico-track.png" alt="ico-track" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <h2>4.8/5</h2>
              <img src="theme-assets/images/ico-bench.png" alt="ico-bench" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              <h2>3.9/5</h2>
              <img src="theme-assets/images/ico-ranker.png" alt="ico-ranker" />
            </div>
            <div
              className="col text-center animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <h2>4.1/5</h2>
              <img src="theme-assets/images/ico-bazaar.png" alt="ico-bazaar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
