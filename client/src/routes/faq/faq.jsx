import React from "react";
import { useState } from "react";
import { Questions } from "../../components/faq-details/faq-details";
import { CATEGORIES, FAQ } from "../../data/data";

export const Faq = () => {
  const [isSelected, setIsSelected] = useState("general");

  return (
    <section
      id="faq"
      className="faq section-padding bg-gradient"
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
              <h6 className="sub-title">{FAQ.subtitle}</h6>
              <h2 className="title">{FAQ.title}</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              {FAQ.description}
            </p>
          </div>
          <div className="row">
            <div className="col">
              <nav>
                <div
                  className="nav nav-pills nav-underline mb-5 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  id="myTab"
                  role="tablist"
                >
                  {CATEGORIES.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.name}`}
                      className={`nav-item nav-link ${
                        isSelected === category.name ? "active" : ""
                      }`}
                      id={`${category.name}-tab`}
                      data-toggle="tab"
                      aria-controls={category.name}
                      aria-selected={
                        isSelected === category.name ? "true" : "false"
                      }
                      role="tab"
                      onClick={() => setIsSelected(category.name)}
                    >
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </a>
                  ))}
                </div>
              </nav>
              <div className="tab-content" id="myTabContent">
                {CATEGORIES.map((category) => (
                  <Questions
                    key={category.id}
                    category={category.name}
                    isSelected={isSelected}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
