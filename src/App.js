import React, { useState } from "react";
import "./App.css";
import ImageMapper from "react-image-mapper";

const app = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  //klikajac na zdjecie AdminLayout uzupełnia sie array cordsU.
  //Trzeba zrobic tak zeby userLayout.areas.coords = coordsU.
  //Wtedy po zaznaczeniu koordynatów na Admin bedzie kolazywało się pole userLayout.
  //Na komponentach nie bedzie problemu.
  //Zrób na hooksach albo daj prosze znać szybko ze się nie da, bo już 2 dni zmarnowałem.
  //Chce ilsc z tematem do przodu;)
  const [coordsU, setCoordsU] = useState([]);

  let UserLayout2 = {
    name: "user-test",
    areas: [
      {
        name: "T1",
        shape: "poly",
        coords: coordsU,
        preFillColor: "green",
        fillColor: "blue"
      }
    ]
  };

  const [userLayout, setUserLayout] = useState({
    name: "test_map",
    areas: [
      {
        name: "T1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240],
        preFillColor: "green",
        fillColor: "blue"
      }
    ]
  });

  const [Dots, setDots] = useState([]);

  let AdminLayout = {
    name: "dots-map",
    areas: Dots
  };

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

  const clickHandler = (x, y) => {
    setUserLayout({
      name: "my-map",
      areas: [
        {
          name: "1",
          shape: "poly",
          coords: [25, 33, 27, 300, 128, 240, x, y],
          preFillColor: "green",
          fillColor: "blue"
        }
      ]
    });

    // MAP2.areas.push({name: "10",
    // shape: "poly",
    // coords: arr,
    // preFillColor: "red"});
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

    clickHandler(coords.x, coords.y);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  };

  const enterArea = (area) => {
    //hoveredArea: area, ???
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

    setCoordsU((oldArray) => [...oldArray, coords.x]);
    setCoordsU((oldArray) => [...oldArray, coords.y]);

    //console.log(coordsU);
  };

  const print = () => {
    console.log(coordsU);
  };

  const handleChangeObjectAddArray = (coord, index) => {
    //console.log(MAPT.areas[0].coords[0])
  };

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
            map={AdminLayout}
            width={500}
            onImageClick={(evt) => makeDot(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
          />
          <h2>userLayout</h2>
          <ImageMapper
            src={URL}
            map={UserLayout2}
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
