import React from "react";

export const MemberDetails = ({
  name,
  role,
  logo,
  image,
  team,
  github,
  twitter,
  linkedin,
}) => {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
      data-animation="jello"
      data-animation-delay="0.5s"
    >
      <div className="d-flex">
        <div
          className="team-img float-left mr-3"
          data-toggle="modal"
          data-target="#teamUser1"
        >
          <img
            src={require(`../../../public/theme-assets/images/${image}`)}
            alt={name}
            className="rounded-circle"
            width="128"
          />
        </div>
        <div className="team-icon">
          <i className="ti-linkedin"></i>
        </div>
        <div className="profile align-self-center">
          <div className="name">{name}</div>
          <div className="role">{role}</div>
          {team ? (
            <div className="social-profile mt-3">
              <a
                href={linkedin}
                title="Linkedin"
                className="font-medium grey-accent2 mr-2"
              >
                <i className="ti-linkedin"></i>
              </a>
              <a
                href={twitter}
                title="Twitter"
                className="font-medium grey-accent2 mr-2"
              >
                <i className="ti-twitter-alt"></i>
              </a>
              <a
                href={github}
                title="Github"
                className="font-medium grey-accent2"
              >
                <i className="ti-github"></i>
              </a>
            </div>
          ) : (
            <div className="crypto-profile">
              <img
                src={require(`../../../public/theme-assets/images/${logo}`)}
                alt="Team User"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
