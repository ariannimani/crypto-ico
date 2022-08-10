import React from "react";
import { SwiperSlide } from "../../components/swiper-slide/swiper-slide";
import { SWIPER, ROADMAP } from "../../data/data";

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
              <h6 className="sub-title">{ROADMAP.subtitle}</h6>
              <h2 className="title">{ROADMAP.title}</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              {ROADMAP.description}
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
                    {SWIPER.map((swipe) => (
                      <SwiperSlide
                        key={swipe.id}
                        date={swipe.date}
                        details={swipe.details}
                        live={swipe.live}
                        finnished={swipe.finnished}
                      />
                    ))}
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
