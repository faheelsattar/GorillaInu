import React from "react";
import "./Nft.css";
import Banana from "../../assets/nft/banana.svg";
import Verified from "../../assets/nft/verified.svg";
import { useQuery } from "@apollo/client";
import { NFT_QUERY } from "../../apollo/query";

const Nft = () => {
  const { loading, error, data } = useQuery(NFT_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section id="nft-section">
      <div className="nft">
        <div className="row">
          <div className="col-md-6 my-auto">
            <div
              style={{
                backgroundColor: "#030D18",
                width: "fit-content",
                margin: "0 auto",
                maxWidth: "355px",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <div className="nft-img-card">
                <img className="nft-img" src={Banana} />
              </div>
              <div className="" style={{ padding: "10px 15px" }}>
                <div className="nft-name">
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#ffffff",
                      margin: "0 10px 0 0",
                    }}
                  >
                    The Gorilla-inu
                  </p>
                  <img className="nft-verified" src={Verified} />
                </div>
                <h3 style={{ fontWeight: "bold", color: "#ffffff" }}>
                  Official Gorilla Inu NFTs
                </h3>
                <div className="nft-footer">
                  <div>
                    <a
                      className="buy-nft-btn"
                      href="https://opensea.io/GorillaInuOfficial"
                      target="_blank"
                    >
                      Buy Now
                    </a>
                  </div>
                  <div>
                    <p style={{ color: "#ffffff", margin: "0" }}>
                      {" "}
                      <span style={{ color: "#9B9B9B", fontSize: "0.8rem" }}>
                        {" "}
                        {/*price in usd*/}
                      </span>{" "}
                      {/*price in eth*/}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-auto">
            <h1 style={{ color: "#ffffff" }}>
              {" "}
              Nfts for Sale in GorillaInu.app
            </h1>
            <h1 style={{ color: "#ffffff", marginTop: "50px" }}> Nft Store</h1>
            <p style={{ color: "#ffffff" }}>{data.nfts[0].nftText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nft;
