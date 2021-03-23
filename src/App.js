import React, { useState, useEffect } from "react";

import "./App.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  Popup,
  Polygon,
  FeatureGroup
} from "react-leaflet";

import EditControl from "./editControl";

const bounds = [
  [0, 0],
  [1000, 1000]
];
const purpleOptions = { color: "purple" };

const polygon = [
  [224, 100],
  [315, 75],
  [401, 193],
  [139, 240],
  [209, 208],
  [313, 177],
  [319, 130],
  [291, 103]
];

const app = () => {
  const [moveMsg, setMoveMsg] = useState("null");

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}`);
  };

  const onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);
  };

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

        <FeatureGroup pathOptions={purpleOptions}>
          <Popup>Popup in FeatureGroup</Popup>

          <Polygon pathOptions={purpleOptions} positions={polygon} />
        </FeatureGroup>

        <Marker position={[100, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div>{moveMsg ? moveMsg : null}</div>

      <MapContainer center={[37.8189, -122.4786]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
          <EditControl position="topright" onEdited={() => onEdited()} />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default app;
