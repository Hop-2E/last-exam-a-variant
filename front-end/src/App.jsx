import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";
export const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;
    console.log(inputValue);
    try {
      instance.patch(`/update/${_id}`, {
        text: inputValue,
      });
      alert("updated");
    } catch (error) {
      alert(error.response.data.data);
    }
  };
  const [del, setDel] = useState();
  const Delete = (_id) => {
    instance.delete(`/delete/${_id}`);
    alert("Deleted");
  };
  const Add = async () => {
    try {
      await instance.post("/add", {
        text: addTodo,
      });
      alert("Succesfull");
    } catch (error) {
      alert(error.response.data.data);
    }
  };
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get("/all");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    try {
      instance.patch(`/checked/${_id}`, {
        isDone: isDone,
      });
    } catch (error) {
      alert(error.response.data.data);
    }
  };

  useEffect(() => {
    // axios
    //   .get("Your backend URL")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">{data && data.length}</div>
      </div>
      <div className="list">
        {data &&
          data.map((e) => {
            return (
              <div className="todo">
                <div className="checkbox">
                  <input
                    type={"checkbox"}
                    defaultChecked={e.isDone}
                    onChange={() => toggleDone(e._id, e.isDone)}
                  />
                  <div>{e.text}</div>
                </div>
                <div className="actions">
                  <div onClick={() => Edit(e._id, e.text)}>
                    <EditIcon />
                  </div>
                  <div onClick={() => Delete(e._id)}>
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            );
          })}

        <input
          placeholder="what's next?"
          onChange={(e) =>
            toggleDone(e._id, e.isDone, setAddTodo(e.target.value))
          }
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
