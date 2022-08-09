import React from "react";

export const AboutCoin = () => {
  return (
    <section
      id="our-coin"
      className="our-coin section-pro section-padding bg-gradient"
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
              <h6 className="sub-title">About coin</h6>
              <h2 className="title">Our COIN</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Decentralized cryptocurrency is produced by the entire
              cryptocurrency system collectively{" "}
              <br className="d-none d-xl-block" />
              at a rate which is defined when the system is created and which is
              publicly known.{" "}
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-5 col-md-12 animated"
              data-animation="fadeInLeftShorter"
              data-animation-delay="0.6s"
            >
              <div className="coin-img">
                <img
                  className="img-fluid"
                  src="theme-assets/images/our-coin.png"
                  alt="CoinImage"
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-12 animated"
              data-animation="fadeInRightShorter"
              data-animation-delay="0.6s"
            >
              <div className="dark-bg-heading mb-4">
                <h4 className="title">CIC Coin</h4>
              </div>
              <p>
                The validity of each cryptocurrency's coins is provided by a
                blockchain. A blockchain is a continuously growing list of
                records, called blocks, which are linked and secured using
                cryptography.Each block typically contains a hash pointer as a
                link to a previous block, a timestamp and transaction data. By
                design, blockchains are inherently resistant to modification of
                the data. a blockchain is typically managed by a peer-to-peer
                network collectively adhering to a protocol for validating new
                blocks. Once recorded
              </p>

              <p>
                The block time is the average time it takes for the network to
                generate one extra block in the blockchain.[21] Some blockchains
                create a new block as frequently as every five seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
