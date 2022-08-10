import React from "react";
import { FAQ_QUESTIONS } from "../../data/data";
import { FaqQuestions } from "./faq-questions";

export const Questions = ({ category, isSelected }) => {
  return (
    <div
      className={`tab-pane fade show ${
        category === isSelected ? "active" : ""
      }`}
      id={category}
      role="tabpanel"
      aria-labelledby={`${category}-tab`}
    >
      <div
        id={`${category}-accordion`}
        className="collapse-icon accordion-icon-rotate"
      >
        {FAQ_QUESTIONS.filter((f) => f.category === category).map((faq) => (
          <FaqQuestions
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            category={faq.category}
          />
        ))}
      </div>
    </div>
  );
};
