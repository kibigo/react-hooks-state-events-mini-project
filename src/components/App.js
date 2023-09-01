import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectCategory] = useState("All");

  const filterCategory = (category) => {
    setSelectCategory(category)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={selectedCategory} onSelectCategory={filterCategory}/>
      <NewTaskForm />
      <TaskList categories = {CATEGORIES} tasks={TASKS} />
    </div>
  );
}

export default App;
