import React from "react";

export const SwiperSlide = ({ date, details, live, finnished }) => {
  return (
    <div className={`swiper-slide ${live ? "active" : ""}`}>
      <div className="roadmap-info">
        <div
          className={`timestamp ${
            finnished ? "completed" : live ? "active" : ""
          }`}
        >
          <span className="date">{date}</span>
        </div>
        <div
          className={`status ${finnished ? "completed" : live ? "active" : ""}`}
        >
          <span>{details}</span>
          {live ? <span className="live">Live Now</span> : ""}
        </div>
      </div>
    </div>
  );
};
