import React from "react";
import { MemberDetails } from "../../components/member-details/member-details";
import { ADVISORS } from "../../data/data";
export const Advisors = () => {
  return (
    <section id="advisor" className="advisor team section-padding">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">helpful</h6>
              <h2 className="title">Advisors</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Digital currency is a money balance recorded electronically on{" "}
              <br className="d-none d-xl-block" />a stored-value card or other
              device. Another form of electronic money is network money.
            </p>
          </div>
          <div className="team-profile mt-5">
            <div className="row mb-5">
              {ADVISORS.map((advisor) => (
                <MemberDetails
                  key={advisor.id}
                  name={advisor.name}
                  role={advisor.role}
                  logo={advisor.logo}
                  image={advisor.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
