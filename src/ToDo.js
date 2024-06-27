import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
    console.log(toDo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log("submitted");
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
    setToDo("");
    console.log(toDo);
  };

  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write a todo..."
        />
        <button>Add a list</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
