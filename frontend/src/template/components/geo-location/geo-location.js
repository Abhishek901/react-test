import React, { Component } from "react";
import MapView from "./map-component";



export default class GeoLoaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          this.setState((state, props) => {
            state.lat = position.coords.latitude;
            state.lgn = position.coords.latitude;
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      alert("not avilable");
    }
  }

  render() {
    return (
      <div className="mapwrapper">
        <h3>My Current Locaion</h3>
        <MapView></MapView>
      </div>
    );
  }
}
