import { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const handleSearch = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };
  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("Search for " + keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  return (
    <div>
      <input type="string" placeholder="search" onChange={handleSearch} />
      <span>{counter}</span>
      <button onClick={handleCounter}>click me</button>
    </div>
  );
};

export default Effect;
