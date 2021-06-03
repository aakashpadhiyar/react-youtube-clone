import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title,
  channelImage,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} views • {timestamp}
          <br />
          <div className="videoRow__channel">
            <Avatar
              className="videoRow__avatar"
              alt={channel}
              src={channelImage}
            />
            {channel}{" "}
          </div>
          {/* <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "} */}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
