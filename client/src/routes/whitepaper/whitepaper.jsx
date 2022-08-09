import React from "react";

export const Whitepaper = () => {
  return (
    <section id="whitepaper" className="whitepaper section-padding">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Documents</h6>
              <h2 className="title">Whitepaper</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Terms of service are rules by which one must agree to abide in
              order to use a service. <br className="d-none d-xl-block" />
              Terms of service can also be merely a disclaimer, especially
              regarding the use of websites.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="whitepaper-img">
                <img
                  className="img-fluid animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                  src="theme-assets/images/whitepaper.png"
                  alt="whitepaper"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="content-area">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Whitepaper
                </h4>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  A white paper is an authoritative report or guide that informs
                  readers concisely about a complex issue and presents the
                  issuing body's philosophy on the matter. It is meant to help
                  readers understand an issue, solve a problem, or make a
                  decision.
                </p>

                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  The initial British term concerning a type of
                  government-issued document has proliferated, taking a somewhat
                  new meaning in business. In business, a white paper is closer
                  to a form of marketing presentation, a tool meant to persuade
                  customers and partners and promote a product or viewpoint,
                  White papers may be considered grey literature.
                </p>

                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  Since the early 1990s, the term "white paper", or
                  "whitepaper", has been applied to documents used as marketing
                  or sales tools in business.
                </p>

                <div className="whitepaper-languages">
                  <div className="row">
                    <div
                      className="col-6 col-md-3 text-center mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <a href="./" title="English">
                        <img
                          src="theme-assets/images/flag-1.png"
                          alt="English"
                        />
                        <div className="lang-text">
                          <span className="icon ti-download mr-1"></span>
                          <span className="language">English</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-6 col-md-3 text-center mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.7s"
                    >
                      <a href="./" title="Japanese">
                        <img
                          src="theme-assets/images/flag-2.png"
                          alt="English"
                        />
                        <div className="lang-text">
                          <span className="icon ti-download mr-1"></span>
                          <span className="language">Japanese</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-6 col-md-3 text-center mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.8s"
                    >
                      <a href="./" title="Russian">
                        <img
                          src="theme-assets/images/flag-3.png"
                          alt="English"
                        />
                        <div className="lang-text">
                          <span className="icon ti-download mr-1"></span>
                          <span className="language">Russian</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-6 col-md-3 text-center mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.9s"
                    >
                      <a href="./" title="Chinese">
                        <img
                          src="theme-assets/images/flag-4.png"
                          alt="English"
                        />
                        <div className="lang-text">
                          <span className="icon ti-download mr-1"></span>
                          <span className="language">Chinese</span>
                        </div>
                      </a>
                    </div>
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
