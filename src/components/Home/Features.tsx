import React from "react";
import "./Features.css";
import background from "../../assets/bg/3rdbg.png";
import { useQuery } from "@apollo/client";
import { FEATURE_QUERY } from "../../apollo/query";

const Features = () => {
  const { loading, error, data } = useQuery(FEATURE_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const feature = data.features[0].featuresArray.features.map(
    (data: { text: string; url: string }) => {
      return (
        <div className="ft-box">
          <div className="ft-circle">
            <img src={data.url} className="ft-circle-img" />
          </div>
          <p className="ft-box-text">{data.text}</p>
        </div>
      );
    }
  );

  return (
    <section id="features-section">
      <div
        className="features"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="ft-text">
          <h1>Features</h1>
          <p>{data.features[0].featureText}</p>
          {console.log("feature", data.features[0].featuresArray.features)}
        </div>
        <div className="ft-list">
          {data.features[0].featuresArray.features.length > 0 ? feature : null}
        </div>
      </div>
    </section>
  );
};

export default Features;
