import React from "react";

export const RoadMap = () => {
  return (
    <section id="roadmap" className="roadmap section-padding">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Implementation</h6>
              <h2 className="title">Roadmap</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              This is a list of cryptocurrencies. The number of cryptocurrencies
              available over <br className="d-none d-xl-block" />
              the internet as of 7 January 2018 is over 1384 and growing.
            </p>
          </div>
          <div
            className="row animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.6s"
          >
            <div className="col-12">
              <div className="roadmap-container">
                <div className="swiper-container">
                  <div className="swiper-wrapper timeline">
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">November 2017</span>
                        </div>
                        <div className="status completed">
                          <span>
                            Crypto Ico <br />
                            Platform idea
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">January 2018</span>
                        </div>
                        <div className="status completed">
                          <span>
                            Technical &amp; strategy <br />
                            devlopment
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide active">
                      <div className="roadmap-info">
                        <div className="timestamp active">
                          <span className="date">May 2018</span>
                        </div>
                        <div className="status active">
                          <span>Ico Realease</span>
                          <span className="live">Live Now</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">August 2018</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Beta version of <br />
                            Crypto Ico{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">November 2018</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Software development kit <br />
                            for integrations
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">December 2018</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Mobile apps for <br />
                            iOS &amp; Android
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-control">
                  <span className="prev-slide"></span>
                  <span className="next-slide"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
