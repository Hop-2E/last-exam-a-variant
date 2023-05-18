import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const getList = async () => {
    const res = await instance.get("/todos");
    setList(res.data.data);
    console.log(res.data.data);
  }

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;
    instance.patch(`/todos/${_id}`, {
      _id: _id,
      text: inputValue,
    });
    console.log(text);
    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    instance.delete(`/todos/${_id}`, {
      _id: _id,
    });
    console.log(_id);
  };

  const Add = () => {
    instance.post ('/todos', {
      text: addTodo,
    })
    console.log(addTodo);
  };

  const toggleDone = (_id, isDone) => {
    
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
    getList();
    // axios
    //   .get("Your backend URL")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
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
        <div 
          className="button" 
          onClick={() => Add()}
        >
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
