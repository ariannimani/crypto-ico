import React from "react";

export const MemberPopup = () => {
  return (
    <div
      className="modal team-modal fade"
      id="teamUser9"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="teamUser9Title"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <div className="row p-4">
              <div className="col-12 col-md-5">
                <img
                  className="img-fluid rounded"
                  src="theme-assets/images/user-9-lg.jpg"
                  alt="Logan S. Perez"
                />
              </div>
              <div className="col-12 col-md-7 mt-sm-3">
                <h5 id="teamUser9Title">Logan S. Perez</h5>
                <small className="text-muted mb-0 ">CEO & CFO</small>
                <div className="social-profile">
                  <a
                    href="https://linkedin.com"
                    title="Linkedin"
                    className="font-medium grey-accent2 mr-2"
                  >
                    <i className="ti-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    title="Twitter"
                    className="font-medium grey-accent2 mr-2"
                  >
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a
                    href="https://github.com"
                    title="Github"
                    className="font-medium grey-accent2"
                  >
                    <i className="ti-github"></i>
                  </a>
                </div>

                <div className="my-4">
                  <p>
                    Experienced algorithmic crypto trader and a machine learning
                    evangelist.
                  </p>
                  <p>
                    I’m focusing on the logic behind the combination of analysis
                    tools, neural networks and genetic algorithms for
                    optimization. Always wanted to have a trading bot with more
                    features but never had the time to build a solution beyond
                    basic python technical analysis tracker.
                  </p>
                </div>

                <h6 className="mb-0">
                  <small className="text-uppercase">Blockchain</small>{" "}
                  <small className="float-right">85%</small>
                </h6>
                <div className="progress box-shadow-1 mb-4">
                  <div
                    className="progress-bar progress-orange"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h6 className="mb-0">
                  <small className="text-uppercase">Python</small>{" "}
                  <small className="float-right">90%</small>
                </h6>
                <div className="progress box-shadow-1 mb-4">
                  <div
                    className="progress-bar progress-orange"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h6 className="mb-0">
                  <small className="text-uppercase">C++</small>{" "}
                  <small className="float-right">75%</small>
                </h6>
                <div className="progress box-shadow-1 mb-4">
                  <div
                    className="progress-bar progress-orange"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
