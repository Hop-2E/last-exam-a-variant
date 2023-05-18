import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
 
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const [array, setArray] = useState({})
  const [task , setTask] = useState();
  const [list, setList] = useState([]);
  const instance = axios.create({
    baseURL: "http://localhost:5555/",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "63104c3120f6e665ecf628ba",
    },
});
const getData = async () => {
  const res = await axios.get("http://localhost:5555/list");
  setList(res.data.data)
  console.log(res.data.data, "ahah")
};
  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
    const response = axios.patch(`http://localhost:5555/update/${_id}`, {text : inputValue})
            .then(res => {
                console.log("UPDATED SUCCESS", res.data);
                setList(() => list.map((el) => {
                    if (el.id === Number(res.data.id)) el.text = res.data.text;
                    return el
                }))
            })
            .catch(error => {
                console.log(error);
            })
  };

  const Delete = async (_id) => {
      const response = await instance.delete(`delete/${_id}`)
          .then(res => {
              console.log("DELETED SUCCESS", res.data);
              setList((prev) => prev.filter((el) => el.id !== res.data.id))
          })
          .catch(error => {
              console.log(error);
          })


      
  };

  const Add = async () => {
    // axios.post();
    try {
      const res = await axios.post("http://localhost:5555/add", {
        text : addTodo,
        isDone : false,
        createdDate : "2023.1.3",
      });
      console.log(res.data.data, "this");
      //   console.log(res.data.data._id);
      alert("amjilttai");
      // localStorage.setItem("token");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const toggleDone = async (_id, isDone) => {
    console.log(_id, isDone, checkedCounter);
    setCheckedCounter((e)=>{
      return e +1
    })
    //axios.patch()
    const res = await axios.post("http://localhost:5555/count",setCheckedCounter())
  };

  useEffect(() => {
    // instance
    //   .get("list")
    //   // .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
    getData();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">

         {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list && list.map(({ text, _id, isDone }, index, e) => (
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
