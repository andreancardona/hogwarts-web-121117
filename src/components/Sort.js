import React from "react";

const Sort = props => {
  return (
    <select onChange={props.setSort}>
      <option value="name"> Hogs By Name </option>
      <option value="weight"> Hogs By Weight </option>
    </select>
  );
};

export default Sort;
