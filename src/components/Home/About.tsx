import React from "react";
import "./About.css";
import Logo from "../../assets/header/logo.svg";
import background from "../../assets/bg/secbg.png";
import vector3 from "../../assets/bg/vector3.png";
import { useQuery } from "@apollo/client";
import { ABOUT_QUERY } from "../../apollo/query";

const About = () => {
  const { loading, error, data } = useQuery(ABOUT_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section id="about-section">
      <div className="about" style={{ backgroundImage: `url(${background})` }}>
        <div className="row" style={{ padding: "100px 50px 50px" }}>
          <div className="col-md-6 my-auto">
            <h1 style={{ color: "#ffffff" }}>
              <span style={{ color: "#7E42FF" }}>{data.abouts[0].heading}</span>
            </h1>
            <p style={{ color: "#ffffff", fontSize: "1.1rem" }}>
              {/* GORILLA INUs mission is to bring cryptocurrency concepts to the
            masses and help with adoption of blockchain services. Unlike other
            cryptocurrencies the GORILLA INU will allocate{" "}
            <span style={{ color: "#7E42FF" }}>
              1% of the token supply to donate to Gorilla protection
              organizations around the world{" "}
            </span>
            . The rug proof project has a strong and growing active community
            following and will be introducing next generation blockchain
            concepts in the near future (more on that in the roadmap). */}
              {/* {
              data.about[0].subtext
            } */}
              {data.abouts[0].subtext}
            </p>
          </div>
          <div className="col-md-6 my-auto">
            <div className="about-img-hldr">
              <img className="about-img" src={Logo} />
            </div>
          </div>
        </div>
        <div className="phil-hldr">
          <div>
            <h1 style={{ fontWeight: "bold" }}>Philosophy</h1>
            <p style={{ fontSize: "1.3rem" }}>{data.abouts[0].philosophy}</p>
          </div>
        </div>

        <h1
          style={{
            color: "#7C41FF",
            textAlign: "center",
            fontWeight: "bold",
            backgroundImage: `url(${background})`,
            margin:"0"
          }}
        >
          Apes Together Strong
        </h1>
      </div>
      <img
        src={vector3}
        style={{ width: "100%", display: "block", marginTop: "-1px" }}
      />
    </section>
  );
};

export default About;
