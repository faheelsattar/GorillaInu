import { useQuery } from "@apollo/client";
import React from "react";
import { VIDEO_QUERY } from "../../apollo/query";

const Video = () => {
  const { loading, error, data } = useQuery(VIDEO_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div
          style={{ margin: "50px auto" }}
          className="embed-responsive embed-responsive-16by9"
        >
          <iframe
            src="https://www.youtube.com/embed/gk6h2DwXPdQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
