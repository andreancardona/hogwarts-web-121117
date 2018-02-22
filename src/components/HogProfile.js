import React from "react";

const HogProfile = props => {
  // console.log("hi");
  // console.log(props);
  const actualWeight =
    props.singleHog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ] * 324;

  return (
    <ul>
      <li>{props.singleHog.specialty}</li>
      <li>{props.singleHog.greased ? "greased" : "non-greased"}</li>
      <li>{actualWeight}</li>
      <li>{props.singleHog["highest medal achieved"]}</li>
    </ul>
  );
};
export default HogProfile;
