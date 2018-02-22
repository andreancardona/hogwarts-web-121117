import React from "react";
import HogProfile from "./HogProfile";

class SingleHogsTile extends React.Component {
  state = {
    tileClicked: false
  };

  //console.log(typeof props.singleHog.image);
  image = this.props.singleHog.name
    .toLowerCase()
    .split(" ")
    .join("_");
  //console.log(image);
  imgSrc = `./hog-imgs/${this.image}.jpg`;

  tileClick = () => {
    this.state.tileClicked
      ? this.setState({ tileClicked: false })
      : this.setState({ tileClicked: true });
    console.log(this.state.tileClicked);
  };

  render() {
    return (
      <div onClick={this.tileClick}>
        <h4>{this.props.singleHog.name}</h4>
        <div>
          {this.state.tileClicked ? (
            <HogProfile singleHog={this.props.singleHog} />
          ) : null}
        </div>
        <img src={this.imgSrc} alt="pigImage" />
      </div>
    );
  }
}

export default SingleHogsTile;
