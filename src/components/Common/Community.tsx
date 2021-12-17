import React from "react";
import "./Community.css";
import Reddit from "../../assets/community/reddit.svg";
import Discord from "../../assets/community/discord.svg";
import Telegram from "../../assets/community/telegram.svg";
import Twitter from "../../assets/community/twitter.svg";
import background from "../../assets/bg/secbg.png";
import vector1 from "../../assets/bg/vector1.png";
import vector2 from "../../assets/bg/vector2.png";
import { useQuery } from "@apollo/client";
import { COMMUNITY_QUERY } from "../../apollo/query";

const Community = () => {
  const { loading, error, data } = useQuery(COMMUNITY_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const shareBtn = [
    {
      id: "1",
      icon: Reddit,
      name: "Join Reddit",
      href: "https://www.reddit.com/r/GorillaInu_Official",
    },
    {
      id: "2",
      icon: Telegram,
      name: "Join Telegram",
      href: "https://t.me/GorillaInuOfficial",
    },
    {
      id: "3",
      icon: Twitter,
      name: "Join Twitter",
      href: "https://twitter.com/gorilla_inu",
    },
    {
      id: "4",
      icon: Discord,
      name: "Join Discord",
      href: "https://discord.gg/qNbQq9Pe5c",
    },
  ].map((data) => {
    return (
      <div className="col-md-3 mx-auto">
        <a className="share-btn" href={data.href} target="_blank">
          <div style={{ width: "30px", marginRight: "10px" }}>
            <img src={data.icon} alt="" style={{ width: "100%" }} />
          </div>
          {data.name}
        </a>
      </div>
    );
  });
  return (
    <>
      <img
        src={vector1}
        style={{ width: "100%", display: "block", marginBottom: "-1px" }}
      />
      <div
        className="community"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="community-main">
          <div className="community-text">
            <h1>Join our Community</h1>
            <p>{data.communities[0].communityText}</p>
          </div>
          <div className="row">{shareBtn}</div>
        </div>
      </div>
      <img
        src={vector2}
        style={{ width: "100%", display: "block", marginTop: "-1px" }}
      />
    </>
  );
};

export default Community;
