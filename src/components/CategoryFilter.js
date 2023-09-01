import React from "react";

function CategoryFilter(categories, selectCategory, onSelectCategory) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category} className={selectCategory === categories ? "selected" : ""} 
        onClick={() => onSelectCategory}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
