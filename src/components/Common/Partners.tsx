import React from "react";
import Button from "./Button";
import "./Partners.css";
import PartnersImage from "../../assets/partners/partners.svg";
import { useQuery } from "@apollo/client";
import { PARTNER_QUERY } from "../../apollo/query";

const Partners = () => {
  const { loading, error, data } = useQuery(PARTNER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section id="partners-section">
      <div className="partners">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 style={{ color: "#ffffff", fontWeight: "bold" }}>
              Partners and Donations
            </h1>
            <p style={{ color: "#ffffff" }}>{data.partners[0].partnerText}</p>
            <Button
              filled={true}
              onClick={false}
              clickFunction={() => {}}
              text="Donate Now"
            />
          </div>
          <div className="col-md-6 my-auto">
            <div className="partners-img-hldr">
              <img className="partners-img" src={PartnersImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
