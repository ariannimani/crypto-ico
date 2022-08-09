/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const FaqQuestions = ({ id, question, answer, category }) => {
  const [isCollapsed, setIsCollapsed] = useState("");
  return (
    <div
      className="card animated"
      data-animation="fadeInUpShorter"
      data-animation-delay="0.1s"
    >
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <a
            className="btn-link"
            data-toggle="collapse"
            data-target={`#collapse${id}`}
            aria-expanded={isCollapsed === id ? "true" : "false"}
            aria-controls={`collapse${id}`}
            onClick={() => setIsCollapsed(id)}
          >
            <span className="icon gradient-crypto"></span>
            {question}
          </a>
        </h5>
      </div>

      <div
        id={`collapse${id}`}
        className={`collapse ${isCollapsed === id ? "show" : ""}`}
        aria-labelledby="headingOne"
        data-parent={`${category}-accordion`}
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};
