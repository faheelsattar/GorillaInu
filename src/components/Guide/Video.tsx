import { useQuery } from "@apollo/client";
import React from "react";
import { VIDEO_QUERY } from "../../apollo/query";

const Video = () => {
  const { loading, error, data } = useQuery(VIDEO_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <video
        controls
        crossOrigin="anonymous"
        preload="auto"
        width="100%"
        height="264"
      >
        <source src={data.videos[0].src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
