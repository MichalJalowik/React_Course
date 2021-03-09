import React, { useState } from "react";
import "./App.css";
import ImageMapper from "react-image-mapper";

//ES6 way
const app = (props) => {
  const [moveMsg, setMoveMsg] = useState(null);

  let MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "#0000ff"
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink",
        lineWidth: 10,
        strokeColor: "#0000ff"
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        preFillColor: "yellow", // this is mandatory for stroke color to work
        lineWidth: 10,
        strokeColor: "#6afd09"
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red"
      },
      {
        name: "5",
        shape: "circle",
        coords: [170, 100, 25],
        preFillColor: "rgb(255,255,255,0.3)",
        lineWidth: 2
      },
      {
        name: "6",
        shape: "rect",
        coords: [270, 100, 200, 50],
        lineWidth: 2,
        preFillColor: "rgba(255, 255, 255, 0.3)",
        strokeColor: "#6afd09"
      }
    ]
  };

  var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";

  const clicked = (area) => {
    this.setState({
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
    });
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  };

  const enterArea = (area) => {
    this.setState({
      hoveredArea: area,
      msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  };

  const leaveArea = (area) => {
    this.setState({
      hoveredArea: null,
      msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      "You moved on " +
        area.shape +
        " " +
        area.name +
        " at cords: " +
        coords.x +
        " " +
        coords.y
    );
  };

  const getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  return (
    <div className="App">
      <h1>hi!!</h1>
      <p>it works!</p>
      <ImageMapper
        src={URL}
        map={MAP}
        width={500}
        onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
      />

      <div>{moveMsg}</div>
    </div>
  );
  //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
};

export default app;
