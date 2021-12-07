import React from "react";
import Background from "/Users/Ben/Desktop/project_files/vinyl_reckoning/src/assets/b&b_main.jpeg";
import { HomeStyles } from "./HomeStyles";

function home() {
  return (
    <HomeStyles>
      <div>
        <img alt="" src={Background}/>
      </div>
    </HomeStyles>
  );
}

export default home;
