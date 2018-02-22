import React from "react";
import hogs from "../porkers_data";
import HogsTilesList from "./HogsTilesList";
import Sort from "./Sort";

class HogContainer extends React.Component {
  state = {
    hogsKeyArray: hogs
  };

  setSort = event => {
    if (event.target.value === "name") {
      this.sortHogsByName();
    } else {
      this.sortHogsByWeight();
    }
  };

  sortHogsByName = () => {
    hogs.sort(function(a, b) {
      return a.name < b.name ? -1 : 1;
    });
    this.setState({
      hogsKeyArray: hogs
    });
    console.log(this.state.hogsKeyArray);
  };

  sortHogsByWeight = () => {
    this.state.hogsKeyArray.sort(function(a, b) {
      return a.weight - b.weight;
    });
  };

  render() {
    //console.log(this.state.hogsKey);
    return (
      <div>
        <HogsTilesList hogsKeyArray={this.state.hogsKeyArray} />
        <Sort setSort={this.setSort} />
      </div>
    );
  }
}

export default HogContainer;
