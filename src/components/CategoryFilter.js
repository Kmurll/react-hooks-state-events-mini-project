import React from "react";

function CategoryFilter({ categories }) {
  // Define function to handle category selection
  const handleCategoryClick = (selectedCategory) => {
    // Implement the logic to filter tasks based on the selectedCategory
    // and update the display accordingly
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          // Implement conditional className based on selected category
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
