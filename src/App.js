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

//import { EditControl } from "react-leaflet-draw";
import EditControl from "./EditControl";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import { mapValues } from "lodash-es";

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

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png"
});

let polyline;

//usefull links:
//https://codesandbox.io/s/github/kboul/react-leaflet-draw-only-one-shape?file=/src/Map.jsx
//https://codesandbox.io/s/distracted-elgamal-bn20r?file=/example/index.html
//

const app = () => {
  const [editableFG, setEditableFG] = useState(null);

  const [moveMsg, setMoveMsg] = useState("null");

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}`);
  };

  const onChange = () => {
    // this._editableFG contains the edited geometry, which can be manipulated through the leaflet API

    //const { onChange } = this.props;

    if (!editableFG || !onChange) {
      return;
    }

    const geojsonData = editableFG.toGeoJSON();
    onChange(geojsonData);
  };

  const onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);
  };

  const onCreated = (e) => {
    // console.log(e);
    // console.log(editableFG);

    // const drawnItems = editableFG.leafletElement._layers;
    // console.log(drawnItems);
    // if (Object.keys(drawnItems).length > 1) {
    //   Object.keys(drawnItems).forEach((layerid, index) => {
    //     if (index > 0) return;
    //     const layer = drawnItems[layerid];
    //     editableFG.leafletElement.removeLayer(layer);
    //   });
    //   console.log(drawnItems);
    // }

    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }
    // Do whatever else you need to. (save to db; etc)

    onChange();
  };

  const onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    onChange();
  };

  const onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  const onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  const onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  // const onFeatureGroupReady = (reactFGref) => {
  //   // populate the leaflet FeatureGroup with the geoJson layers

  //   let leafletGeoJSON = new L.GeoJSON(getGeoJson());
  //   let leafletFG = reactFGref;

  //   leafletGeoJSON.eachLayer((layer) => {
  //     leafletFG.addLayer(layer);
  //   });

  //   // store the ref for future access to content

  //   setEditableFG(reactFGref);
  // };

  const onFeatureGroupReady = (reactFGref) => {
    // store the ref for future access to content
    setEditableFG(reactFGref);
  };

  function getGeoJson() {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.47979164123535, 37.830124319877235],
              [-122.47721672058105, 37.809377088502615]
            ]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-122.46923446655273, 37.80293476836673]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-122.48399734497069, 37.83466623607849]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-122.47867584228514, 37.81893781173967]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-122.48069286346434, 37.800637436707525],
                [-122.48069286346434, 37.803104310307276],
                [-122.47950196266174, 37.803104310307276],
                [-122.47950196266174, 37.800637436707525],
                [-122.48069286346434, 37.800637436707525]
              ]
            ]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-122.48103886842728, 37.833075326166274],
                [-122.48065531253813, 37.832558431940114],
                [-122.4799284338951, 37.8322660885204],
                [-122.47963070869446, 37.83231693093747],
                [-122.47948586940764, 37.832467339549524],
                [-122.47945636510849, 37.83273426112019],
                [-122.47959315776825, 37.83289737938241],
                [-122.48004108667372, 37.833109220743104],
                [-122.48058557510376, 37.83328293020496],
                [-122.48080283403395, 37.83332529830436],
                [-122.48091548681259, 37.83322785163939],
                [-122.48103886842728, 37.833075326166274]
              ]
            ]
          }
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-122.48043537139893, 37.82564992009924],
                [-122.48129367828368, 37.82629397920697],
                [-122.48240947723389, 37.82544653184479],
                [-122.48373985290527, 37.82632787689904],
                [-122.48425483703613, 37.82680244295304],
                [-122.48605728149415, 37.82639567223645],
                [-122.4898338317871, 37.82663295542695],
                [-122.4930953979492, 37.82415839321614],
                [-122.49700069427489, 37.821887146654376],
                [-122.4991464614868, 37.82171764783966],
                [-122.49850273132326, 37.81798857543524],
                [-122.50923156738281, 37.82090404811055],
                [-122.51232147216798, 37.823344820392535],
                [-122.50150680541992, 37.8271414168374],
                [-122.48743057250977, 37.83093781796035],
                [-122.48313903808594, 37.82822612280363],
                [-122.48043537139893, 37.82564992009924]
              ]
            ]
          }
        }
      ]
    };
  }

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

      <h1>React Leaflet Draw</h1>
      <MapContainer center={[37.8189, -122.4786]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup
          ref={(featureGroupRef) => {
            onFeatureGroupReady(featureGroupRef);
          }}
        >
          <EditControl
            position="topright"
            onCreated={(e) => onCreated(e)}
            onMounted={(e) => onMounted(e)}
            onEdited={(e) => onEdited(e)}
            onDeleted={(e) => onDeleted(e)}
            onEditStart={(e) => onEditStart(e)}
            onEditStop={(e) => onEditStop(e)}
            onDeleteStart={(e) => onDeleteStart(e)}
            onDeleteStop={(e) => onDeleteStop(e)}
            draw={{
              rectangle: false
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default app;
