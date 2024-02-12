import React, { useState, useEffect } from "react";

// useEffect() = React Hook that tells React "DO SOME CODE WHEN (pick one)":
//               This component re-renders
//               This component mounts
//               The state of value

//useEffect(function, [dependencies])

// 1. useEffect(() => {})           RUNS after every re-render
// 2. useEffect(() => {}, [])       RUNS only on mount
// 3. useEffect(() => {}, [value])  RUNS on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function MyEffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${width} x ${height}`;
  }, [width, height]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "Green" ? "Red" : "Green"));
  }

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p style={{ color: color }}>Count {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>ChangeColor</button>
      <h3>Window width: {width}px</h3>
      <h3>Window height: {height}px</h3>
    </>
  );
}

export default MyEffectComponent;
