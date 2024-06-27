import { useState } from "react";
import Button from "./Button";
import Effect from "./effect";
import Hello from "./cleanupFn";
import ToDoList from "./ToDo";

function App() {
  const [showing, setShowing] = useState(false);
  function onClick() {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      <h1>Hello!</h1>
      <Button value="My button" />
      <Effect />
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      <ToDoList />
    </div>
  );
}

export default App;
