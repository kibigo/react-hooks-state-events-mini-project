import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [deleteTasks, setDeleteTasks] = useState(tasks)

  const deleteItems = (index) => {
    const newList = deleteTasks.filter((_,taskIndex) => taskIndex !== index)
    setDeleteTasks(newList)
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} deleteItem={() => deleteItems(index)}/>
      ))}
    </div>
  );
}

export default TaskList;
