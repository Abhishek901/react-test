import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};
class MapView extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div className="maps-div">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDOe_Bg4qQnGGTXUGeBCiVP2JfFxqrartw",
})(MapView);
