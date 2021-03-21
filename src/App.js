import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import ImageMapper from "react-image-mapper";

const app = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  const [reset, setReset] = useState(true);
  const [adminMode, setAdminMode] = useState(false);

  const { register, handleSubmit } = useForm();

  const basePolygonArea = [
    {
      name: "",
      shape: "poly",
      coords: [],
      preFillColor: "rgba(0, 0, 255, 0.15)",
      fillColor: "rgba(0, 0, 255, 0.2)",
      hoverDescription: "",
      clickedDescription: "",
    },
  ];

  const [adminLayout, setAdminLayout] = useState({
    name: "adminLayout",
    areas: basePolygonArea,
  });

  const [userLayout, setUserLayout] = useState({
    name: "userLayout",
    areas: [],
  });

  useEffect(() => {
    console.log(userLayout);
    console.log(adminLayout);
  }, [reset]);

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
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)}`);
    // console.log(adminLayout);
    // console.log(userLayout);
    // console.log(adminLayout.areas[0]);
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
    const areasCopy = [...adminLayout.areas];
    areasCopy.push({
      name: "1",
      shape: "circle",
      coords: [coords.x, coords.y, 1],
      preFillColor: "yellow",
      lineWidth: 6,
    });

    areasCopy[0].coords.push(coords.x);
    areasCopy[0].coords.push(coords.y);

    const adminLayoutCopy = { ...adminLayout, areas: areasCopy };
    setAdminLayout(adminLayoutCopy);
  };

  const makeDot2 = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    const areasCopy = [...adminLayout.areas];
    areasCopy.push({
      name: "1",
      shape: "circle",
      coords: [coords.x, coords.y, 1],
      preFillColor: "yellow",
      lineWidth: 6,
    });

    console.log(coords);

    areasCopy[0].coords.push(coords.x);
    areasCopy[0].coords.push(coords.y);

    const adminLayoutCopy = { ...adminLayout, areas: areasCopy };
    setAdminLayout(adminLayoutCopy);

    //drawPolygon(coords.x, coords.y);
  };

  const drawPolygon = (x, y) => {
    const areasCopy = [...adminLayout.areas];
    areasCopy[0].coords.push(x);
    areasCopy[0].coords.push(y);

    const adminLayoutCopy = { ...adminLayout, areas: areasCopy };
    setAdminLayout(adminLayoutCopy);
  };

  // useEffect(() => {
  //   const areasCopy = [...userLayout.areas];
  //   areasCopy[0].coords.push(50);
  //   const userLayoutCopy = { ...userLayout, areas: areasCopy };

  //   setUserLayoutCoords(userLayoutCopy);
  // }, [userLayoutCoords]);

  const resetHandler = () => {
    const resetArea = basePolygonArea;

    // name: "P1",
    // shape: "poly",
    // coords: [],
    // preFillColor: "rgba(0, 0, 255, 0.15)",
    // fillColor: "rgba(0, 0, 255, 0.2)"

    const adminLayoutCopy = { ...adminLayout, areas: resetArea };
    setAdminLayout(adminLayoutCopy);
    setReset(!reset);
  };

  useEffect(() => {
    setReset(true);
  }, [reset]);

  const addPolygonHandler = (data) => {
    const areasCopy = [...userLayout.areas];

    areasCopy.push(adminLayout.areas[0]);

    //console.log(data.name)
    //console.log(areasCopy[0].name)
    adminLayout.areas[0].name = data.name;
    adminLayout.areas[0].hoverDescription = data.hoverDescription;
    adminLayout.areas[0].clickedDescription = data.clickedDescription;

    //console.log(areasCopy)

    const userLayoutCopy = { ...userLayout, areas: areasCopy };

    setUserLayout(userLayoutCopy);

    resetHandler();
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="main">
      <div className="mainButton">
        <button type="submit" onClick={() => setAdminMode(!adminMode)}>
          {adminMode ? "Admin mode on" : "Admin mode Off"}
        </button>
      </div>

      {adminMode ? (
        <div className="grid">
          <h2>Admin layout:</h2>
          <div className="presenter">
            <ImageMapper
              src={URL}
              map={adminLayout}
              width={500}
              onImageClick={(evt) => makeDot(evt)}
              onClick={(area, _, evt) => makeDot2(area, evt)}
            />
          </div>
          <div className="form">
            <div></div>
            <form onSubmit={handleSubmit(addPolygonHandler)}>
              <label>Name</label>
              <input name="name" ref={register}></input>
              <label>Hover Description</label>
              <input name="hoverDescription" ref={register}></input>
              <label>Clicked Desctiption</label>
              <input name="clickedDescription" ref={register}></input>
              <div className="twoButtons">
                <button type="submit">Add Polygon</button>
                <button type="submit" onClick={() => resetHandler()}>
                  Reset
                </button>
              </div>
            </form>
            <div></div>
            <div className="formButton"></div>
          </div>
        </div>
      ) : null}

      <div className="grid">
        <h2>User layout:</h2>
        <div className="presenter">
          <div style={{ position: "relative" }}>
            <ImageMapper
              src={URL}
              map={userLayout}
              width={500}
              onImageClick={(evt) => clickedOutside(evt)}
              onImageMouseMove={(evt) => moveOnImage(evt)}
              onLoad={() => load()}
              onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
              onClick={(area) => clicked(area)}
              onMouseEnter={(area) => enterArea(area)}
              onMouseLeave={(area) => leaveArea(area)}
              lineWidth={2}
              strokeColor={"rgba(255, 255, 255, 0.1)"}
            />

            {hoveredArea && (
              <span
                className="tooltip"
                style={{ ...getTipPosition(hoveredArea) }}
              >
                {hoveredArea && hoveredArea.name}
              </span>
            )}
            <div className="message">{msg ? msg : null}</div>
            <div>{moveMsg ? moveMsg : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default app;
