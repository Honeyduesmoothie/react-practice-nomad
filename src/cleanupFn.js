import { useState, useEffect } from "react";
const Hello = () => {
  useEffect(() => {
    console.log("I'm created");
    return () => console.log("I'm destroyed");
    // return -> cleanup function
  }, []);
  return (
    <div>
      <h1>Hello!</h1>
      <ul>{[<li>Hi</li>, <li>Hello?</li>]}</ul>
    </div>
  );
};

export default Hello;
