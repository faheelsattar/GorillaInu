import React from "react";
import "./Tokenomics.css";
import chart from "../../assets/tokenomics/chart.png";
import { useQuery } from "@apollo/client";
import { TOKENOMICS_QUERY } from "../../apollo/query";
const Tokenomics = () => {
  const { loading, error, data } = useQuery(TOKENOMICS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const tokenFeatures = data.tokenomics[0].tokenFeatures.tokenomics.map(
    (data: { color: string; heading: string; subheading: string }) => {
      return (
        <div className="token-box" style={{ borderLeftColor: data.color }}>
          <h4>{data.heading}</h4>
          <p>{data.subheading}</p>
        </div>
      );
    }
  );
  return (
    <section id="tokenomics-section">
      <div className="tokenomics">
        <div className="token-text">
          <h1> Tokenomics</h1>
          <p>{data.tokenomics[0].tokenomicText}</p>
        </div>
        <div className="token">
          <p>Token name</p>
          <h3> GORINU</h3>
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="chart-img-hldr">
                <img src={chart} alt="chart" className="chart-img" />
              </div>
            </div>
            <div className="col-md-6">
              {data.tokenomics[0].tokenFeatures.tokenomics.length > 0
                ? tokenFeatures
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
