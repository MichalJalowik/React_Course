import React, { useState, useEffect } from "react";

import "./App.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  Popup
} from "react-leaflet";

const bounds = [
  [0, 0],
  [1000, 1000]
];
const style = { height: "80vh", width: "75vw" };

const app = () => {
  return (
    <div>
      <h1>React Leaflet</h1>
      <MapContainer center={[51.505, -0.091]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.091]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <h1>React Leaflet Non-Geographical</h1>
      <MapContainer crs={L.CRS.Simple} center={[100, 1000]} zoom={0}>
        <ImageOverlay
          bounds={bounds}
          url="https://imgs.6sqft.com/wp-content/uploads/2015/08/20150530/Wonders-of-New-York-map-1.jpg"
        />

        <Marker position={[100, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default app;
