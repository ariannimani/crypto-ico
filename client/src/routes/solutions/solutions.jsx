import React from "react";

export const Solutions = () => {
  return (
    <section
      id="problem-solution"
      className="problem-solution section-pro section-padding bg-gradient"
      data-midnight="white"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="dark-bg-heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Solutions</h6>
              <h2 className="title">
                Problems &amp; <strong>Solutions</strong>
              </h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              More than $40 million in assets were placed under restraint
              pending forfeiture, and more than 30{" "}
              <br className="d-none d-xl-block" />
              Liberty Reserve exchanger domain names were seized.
            </p>
          </div>
          <div className="problems">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="dark-bg-heading mb-4">
                  <h4
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Problems
                  </h4>
                </div>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  Different pieces of the new Internet are born as building
                  blocks, but there’s no way for them to work together.
                </p>

                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  Even interoperating new technologies with old centralised
                  resources can prove useful in making the paradigm shift from
                  Web 2 to Web 3 happen. Now we own our data, we can prove that
                  we own what we have and have created it on different
                  platforms, but how do we put it together into a whole new
                  cohesive framework.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 text-center">
                <img
                  src="theme-assets/images/problems-graphic.png"
                  className="problems-img animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  alt="problems-graphic"
                />
              </div>
            </div>
          </div>
          <div className="solutions mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-6 text-center">
                <img
                  src="theme-assets/images/solutions-graphic.png"
                  className="solutions-img animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  alt="problems-graphic"
                />
              </div>
              <div className="col-md-12 col-lg-6 move-first">
                <div className="dark-bg-heading mb-4">
                  <h4
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Solutions
                  </h4>
                </div>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Decentralized cryptocurrency is produced by the entire
                  cryptocurrency system collectively, at a rate which is defined
                  when the system is created and which is publicly known.
                </p>

                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  In centralized banking and economic systems such as the
                  Federal Reserve System, corporate boards or governments
                  control the supply of currency by printing units of fiat money
                  or demanding additions to digital banking ledgers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
