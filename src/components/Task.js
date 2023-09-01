import React from "react";

function Task({text, category, deleteItem}) {
 
  const handleDelete = () => {
    deleteItem();
    console.log("CLICKED")
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
