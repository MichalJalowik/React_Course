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

const app = () => {
  return (
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
  );
};

export default app;
