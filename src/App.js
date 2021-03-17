import React, { useState, useEffect } from "react";
import "./App.css";
import ImageMapper from "react-image-mapper";

const app = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  const [dots, setDots] = useState([]);
  let adminLayout = {
    name: "dots",
    areas: dots
  };

  const [userLayoutCoords, setUserLayoutCoords] = useState([]);
  const [userLayout, setUserLayout] = useState({
    name: "userLayout",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: userLayoutCoords,
        preFillColor: "green",
        fillColor: "blue"
      }
    ]
  });

  var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";

  const load = () => {
    setMsg("Interact with image !");
  };

  const clicked = (area) => {
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    // setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);

    setDots((oldArray) => [
      ...oldArray,
      {
        name: "1",
        shape: "circle",
        coords: [coords.x, coords.y, 3],
        preFillColor: "black",
        lineWidth: 11
      }
    ]);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
    console.log(userLayout);
  };

  const enterArea = (area) => {
    setHoveredArea(area);
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const leaveArea = (area) => {
    setHoveredArea(null);
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      "You moved on " +
        area.shape +
        " " +
        area.name +
        ' at coords {"x":' +
        coords.x +
        ',"y":' +
        coords.y +
        "} !"
    );
  };

  const getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  const makeDot = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setDots((oldArray) => [
      ...oldArray,
      {
        name: "1",
        shape: "circle",
        coords: [coords.x, coords.y, 3],
        preFillColor: "black",
        lineWidth: 11
      }
    ]);

    const areasCopy = [...userLayout.areas];
    areasCopy[0].coords.push(coords.x);
    areasCopy[0].coords.push(coords.y);

    const userLayoutCopy = { ...userLayout, areas: areasCopy };
    setUserLayoutCoords(userLayoutCopy);
  };

  const drawPolygon = (x, y) => {
    const areasCopy = [...userLayout.areas];
    areasCopy[0].coords.push(x);
    areasCopy[0].coords.push(y);

    const userLayoutCopy = { ...userLayout, areas: areasCopy };

    setUserLayoutCoords(userLayoutCopy);
  };

  // useEffect(() => {
  //   const areasCopy = [...userLayout.areas];
  //   areasCopy[0].coords.push(50);
  //   const userLayoutCopy = { ...userLayout, areas: areasCopy };

  //   setUserLayoutCoords(userLayoutCopy);
  // }, [userLayoutCoords]);

  return (
    <div className="grid">
      <div className="presenter">
        <div style={{ position: "relative" }}>
          {/* <ImageMapper
            src={URL}
            map={MAP2}
            width={500}
            onLoad={() => load()}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
            lineWidth={4}
            strokeColor={"white"}
          /> */}

          {/* {hoveredArea && (
            <span
              className="tooltip"
              style={{ ...getTipPosition(hoveredArea) }}
            >
              {hoveredArea && hoveredArea.name}
            </span>
          )} */}

          <h2>AdminLayout</h2>

          <ImageMapper
            src={URL}
            map={adminLayout}
            width={500}
            onImageClick={(evt) => makeDot(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
          />
          <h2>userLayout</h2>
          <ImageMapper
            src={URL}
            map={userLayout}
            width={500}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
          />
        </div>
        {/* <pre className="message">{msg ? msg : null}</pre> */}
        {/* <pre>{moveMsg ? moveMsg : null}</pre> */}
      </div>
    </div>
  );
};

export default app;
