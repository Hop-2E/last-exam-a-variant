import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";



export const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Authorization": "authorizationToken",
    "Content-type": "application/json; charset=UTF-8",
  },
  
});

function App() {

  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const [addUpdate, setUpdate] = useState("")

  const Edit = async (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    const res = await instance.patch(`/todo/${_id}`,{
      text : inputValue
    })
  }

  const Delete = async (_id) => {
    const res = await instance.delete(`/todo/${_id}`)}

  const getData = async () => {
    const res = await instance.get("/todo");
    setList(res.data.data);
    console.log(res)
  };


  const Add = async () => {
    const res = await instance.post("/todo", {
      text: addTodo,
    });

  };
  

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
      getData()
  }, [Add]);

  
 

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
  );}


export default App;
