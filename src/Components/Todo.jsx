import React, { useState } from "react";
import "../Components/Todo.css";
function Todo() {
  const [list, addtask] = useState([]);
  const [value, setvalue] = useState("");
  let todoFlag = false;

  if (list.length > 0) {
    todoFlag = true;
  }

  function taskFun() {
    if (value.length > 0) {
      let arr = [...list, value];
      addtask(arr);
      setvalue("");
      todoFlag = true;
    } else {
      alert("Input-box is empty");
    }
  }
  function removeTask(id) {
    let arr = list.filter((task, ind) => ind !== id);
    addtask(arr);
  }
  return (
    <div className="task-container">
      <div className="nav-bar">
        <div className="banner">TO-DO APP</div>
        <div className="task-add">
          <input
            className="input-box"
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <button className="btn add" onClick={() => taskFun()}>
            Add Task
          </button>
        </div>
      </div>

      <div className="task-list">
        <div className="content-area">
          {todoFlag ? (
            <>
              {list.map((task, id) => (
                <div className="task">
                    <div className="text">
                  {id + 1}. 
                  <p>{task}</p>
                    </div>
                  <button  className="btn remove"onClick={() => removeTask(id)}>Done</button>
                </div>
              ))}
            </>
          ) : (
            <p>Your Todo-list is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
