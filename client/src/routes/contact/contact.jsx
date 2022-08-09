import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">JOIN US</h6>
              <h2 className="title">Contact</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Have questions? We’re happy to help.
            </p>

            <p
              className="font-medium mt-5 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              Contact us with any questions regarding Crypto ICO.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 mx-auto">
              <ul className="list-unstyled list-group contact-info mb-3">
                <li
                  className="pt-1 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  <i className="ti-location-pin"></i>
                  <span>Kelley A. Fleming 96 Woodside USA.</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  <i className="ti-email"></i>
                  <span>info@yourcompany.com</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  <i className="ti-comment-alt"></i>
                  <span>Join us on Telegram</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.9s"
                >
                  <i className="ti-headphone"></i>
                  <span>+44 0123 4567</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-12 mx-auto">
              {/*<form action="#" method="post" accept-charset="utf-8" className="text-center">
                        <input type="text" className="form-control animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s" name="name" placeholder="Your Name">
                        <input type="text" className="form-control animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s" name="mail" placeholder="Your Mail">
                        <textarea rows="4" className="form-control animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s" name="message" placeholder="Your Massage"></textarea>
                        <button type="submit" className="btn btn-lg btn-gradient-purple btn-glow float-right animated" data-animation="fadeInUpShorter" data-animation-delay="1.1s">Send Message</button>
  </form>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
