import React, { useState } from "react";

function RightSidebar() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <aside className="right-sidebar">
      <div className="sidebar-content">
        <h3>Custom Filters</h3>

        <div className="filter-group">
          <h4>Categories</h4>
          <ul className="filter-list">
            <li
              className={selectedFilter === "Web Development" ? "active" : ""}
              onClick={() => handleFilterChange("Web Development")}
            >
              Web Development
            </li>
            <li
              className={selectedFilter === "Data Science" ? "active" : ""}
              onClick={() => handleFilterChange("Data Science")}
            >
              Data Science
            </li>
            <li
              className={selectedFilter === "Machine Learning" ? "active" : ""}
              onClick={() => handleFilterChange("Machine Learning")}
            >
              Machine Learning
            </li>
          </ul>
        </div>

        <div className="filter-group">
          <h4>Tags</h4>
          <ul className="filter-list">
            <li
              className={selectedFilter === "React" ? "active" : ""}
              onClick={() => handleFilterChange("React")}
            >
              React
            </li>
            <li
              className={selectedFilter === "JavaScript" ? "active" : ""}
              onClick={() => handleFilterChange("JavaScript")}
            >
              JavaScript
            </li>
            <li
              className={selectedFilter === "Node.js" ? "active" : ""}
              onClick={() => handleFilterChange("Node.js")}
            >
              Node.js
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
