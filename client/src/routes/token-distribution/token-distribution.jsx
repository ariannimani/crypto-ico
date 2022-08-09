import React from "react";

export const TokenDistribution = () => {
  return (
    <section
      id="token-distribution"
      className="token-distribution section-padding"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Token stats</h6>
              <h2 className="title">Token Distribution</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The ICO usually takes place before the project is completed, and
              helps fund the expenses <br className="d-none d-xl-block" />
              undertaken by the founding team until launch. For some of the
              larger projects.
            </p>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-lg-6 pr-5 animated"
              data-animation="fadeInLeftShorter"
              data-animation-delay="0.6s"
            >
              <div className="content-area">
                <h4>Details</h4>
                <p className="mt-1">
                  To calculate the number of tokens you’ll receive, you can
                  follow the following formula. Note that this applies to public
                  presale contributions only. If you participated through a
                  syndicate or private presale,
                </p>

                <p>
                  To calculate the number of tokens you’ll receive, you can
                  follow the following formula. Note that this applies to public
                  presale contributions only. If you participated through a
                  syndicate or private presale,
                </p>

                <p>
                  <span>Symbol:</span>{" "}
                  <strong className="grey-accent2">CIC</strong>
                </p>
                <p>
                  <span>Initial Value:</span>{" "}
                  <strong className="grey-accent2">1 ETH = 3177.38 CIC</strong>
                </p>
                <p>
                  <span>Type:</span>{" "}
                  <strong className="grey-accent2">ERC20</strong>
                </p>
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 move-first animated"
              data-animation="fadeInRightShorter"
              data-animation-delay="0.6s"
            >
              <div className="token-img">
                <img
                  className="img-fluid"
                  src="theme-assets/images/chart.png"
                  alt="token-distribution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
