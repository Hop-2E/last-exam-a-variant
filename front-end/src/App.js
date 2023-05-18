import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

export const instance = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  const [list, setList] = useState([{ text: "", isDone: true, _id: "anyid" }]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const text = useRef();
  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };
  const getList = async () => {
    const res = await instance.get("/");
    setList(res.data.data);
  };

  const Delete = async (_id) => {
    try {
      await instance.delete(`/delete/${_id}`);
      alert("done");
    } catch (error) {
      console.log(_id);
    }
  };

  const Add = async () => {
    try {
      await instance.post("/add", {
        text: text.current.value,
        Date: Date,
      });
      console.log("done");
      console.log(text.current.value);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
    getList();
    //   axios
    //     .get("http://localhost:5001")
    //     .then((response) => response.json(""))
    //     .then((data) => {
    //       console.log(data);
    //       setList(data.data);
    //     });
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
        {list &&
          list.map(({ text, _id, isDone }, index) => (
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
          ref={text}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
