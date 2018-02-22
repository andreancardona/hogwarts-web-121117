//functional

import React from "react";
import SingleHogsTile from "./SingleHogsTile";

const HogsTilesList = props => {
  //console.log(props.hogsKeyArray);

  return (
    <ul>
      {" "}
      {props.hogsKeyArray.map((singleHog, index) => {
        //console.log(singleHog);
        return (
          <li className="pigTile" key={index}>
            <SingleHogsTile singleHog={singleHog} />
          </li>
        );
      })}{" "}
    </ul>
  );
};

export default HogsTilesList;
