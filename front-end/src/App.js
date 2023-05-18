import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";
export const instance = axios.create({
  baseURL: "http://localhost:4900//",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const listRef = useRef();
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const [check, setCheck] = useState();
  const getData = async () => {
    const res = await instance.get("/todolist/list");
    setList(
      res.data.data.map((el) => {
        return el;
      })
    );

    console.log(res);
  };
  const Edit = async (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (inputValue) {
      const res = await instance.patch("/todolist/update", {
        _id: _id,
        list: inputValue,
      });
      console.log(res);
      setList(list.filter((curritem) => curritem.list == res.data.data.list));
    }

    //axios.patch()
  };

  const Delete = async (_id) => {
    const res = await instance.delete(`/todolist/delete/${_id}`);
    setList((currItem) =>
      currItem.filter((item) => item._id !== res.data.data._id)
    );
  };

  const Add = async () => {
    const res = await instance.post("/todolist/add", {
      list: listRef.current.value,
    });
    setList((prevList) => [...prevList, res.data.data]);
  };

  const toggleDone = async (_id, isDone) => {
    console.log(_id, isDone);
    const res = await instance.patch("/todolist/checked", {
      _id: _id,
      status: !isDone,
    });
    //axios.patch()
  };

  useEffect(() => {
    getData();
    // axios
    //   .get("Your backend URL")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(tdaa.data);
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
        {list.map(({ list, _id, status }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={status}
                onChange={() => toggleDone(_id, status)}
              />
              <div>{list}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, list)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input placeholder="what's next?" ref={listRef} />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
