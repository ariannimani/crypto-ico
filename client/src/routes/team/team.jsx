import React from "react";
import { MemberDetails } from "../../components/member-details/member-details";
import { TEAM_MEMBERS } from "../../data/data";

export const Team = () => {
  return (
    <section
      id="team"
      className="team section-padding bg-gradient"
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
              <h6 className="sub-title">Creative</h6>
              <h2 className="title">Team</h2>
            </div>

            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              A cryptocurrency (or crypto currency) is a digital asset designed
              to work as a medium <br className="d-none d-xl-block" />
              of exchange that uses cryptography to secure its transactions.
            </p>
          </div>
          <div className="row team-intro justify-content-center text-center">
            <div
              className="col-12 col-md-4 col-lg-2  team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              <span>18</span>
              <p>
                Creative and
                <br />
                Dedicated People
              </p>
            </div>
            <div
              className="col-12 col-md-4 col-lg-2  team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <span>125</span>
              <p>Years of combined experience</p>
            </div>
            <div
              className="col-12 col-md-4 col-lg-2  team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.7s"
            >
              <span>10</span>
              <p>Years of blockchain experience</p>
            </div>
          </div>
          <div className="team-profile mt-5">
            <div className="row mb-5">
              {TEAM_MEMBERS.map((team) => (
                <MemberDetails
                  key={team.id}
                  name={team.name}
                  role={team.role}
                  logo={team.logo}
                  image={team.image}
                  team={true}
                  linkedin={team.linkedin}
                  twitter={team.twitter}
                  github={team.github}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
