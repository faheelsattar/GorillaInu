import React from "react";
import "./Community.css";
import Reddit from "../../assets/community/reddit.svg";
import Discord from "../../assets/community/discord.svg";
import Telegram from "../../assets/community/telegram.svg";
import Twitter from "../../assets/community/twitter.svg";
import background from "../../assets/bg/secbg.png";
import vector1 from "../../assets/bg/vector1.png";
import vector2 from "../../assets/bg/vector2.png";

const Community = () => {
  const shareBtn = [
    { id: "1", icon: Reddit, name: "Join Reddit" },
    { id: "2", icon: Telegram, name: "Join Telegram" },
    { id: "3", icon: Twitter, name: "Join Twitter" },
    { id: "4", icon: Discord, name: "Join Discord" },
  ].map((data) => {
    return (
      <div className="col-md-3 mx-auto">
        <button className="share-btn">
          <div style={{ width: "30px" }}>
            {" "}
            <img src={data.icon} alt="" style={{ width: "100%" }} />
          </div>
          {data.name}
        </button>
      </div>
    );
  });
  return (
    <>
      <img src={vector1} style={{ width: "100%", display:"block", marginBottom:"-1px" }} />
      <div
        className="community"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="community-main">
          <div className="community-text">
            <h1>Join our Community</h1>
            <p>
              GORILLA INUs mission is to bring cryptocurrency concepts to the
              masses and help with adoption of blockchain services.
            </p>
          </div>
          <div className="row">{shareBtn}</div>
        </div>
      </div>
      <img src={vector2} style={{ width: "100%", display:"block", marginTop:"-1px"}} />
    </>
  );
};

export default Community;
