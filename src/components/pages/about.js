import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column"
      style={{ background: "url(" + profilePicture + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center"
      }}>
      </div>
      <div className="right-column">
        Made by Alex Berry and Quinn Heiner, The Nothing Podcast is a comidical podcast made for entertainment purposes only. 
        Everyone has told us to have as much fun as we can in high school, so we made a podcast!
        Our mission, and the purpose of this podcast, is too have fun and hang out as best friends while sharing our high school drama with the world.
      </div>
    </div>
  );
}