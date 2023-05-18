import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    axios.patch(
      "http://localhost:5000/uptade",
      { text: inputValue },
      { headers: { id: _id } }
    );
  };

  const Delete = (_id) => {
    axios.delete("http://localhost:5000/delete", { headers: { id: _id } });
  };

  const Add = () => {
    console.log(addTodo);
    axios.post("http://localhost:5000/add", {
      text: addTodo,
    });
  };

  const toggleDone = (_id, isDone) => {
    axios.patch(
      "http://localhost:5000/checked",
      { isDone: !isDone },
      { headers: { id: _id } }
    );
  };

  useEffect(() => {
    axios.get("http://localhost:5000/list").then((data) => {
      setList(data.data.data);
    });
    axios.get("http://localhost:5000/count").then((data) => {
      setCheckedCounter(data.data.data);
    });
  }, [list]);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
