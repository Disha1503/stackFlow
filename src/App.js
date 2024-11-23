import React, { useState } from "react";
import Header from "./components/Header"; // Header component
import MainContent from "./components/MainContent"; // MainContent component
import Sidebar from "./components/Sidebar"; // Sidebar component
import RightSidebar from "./components/RightSidebar"; // RightSidebar component
import "./App.css"; // CSS for the App

function App() {
  const [filter, setFilter] = useState("activity"); // Default filter is "activity"
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

  return (
    <div className="app">
      <div className="container">
        <Header setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery to Header */}
        <main className="main-content">
          <Sidebar />
          <div className="content">
            {/* Navigation buttons to filter the questions */}
            <nav>
              <button
                onClick={() => setFilter("activity")}
                className={filter === "activity" ? "active" : ""}
              >
                Interesting
              </button>
              <button
                onClick={() => setFilter("hot")}
                className={filter === "hot" ? "active" : ""}
              >
                Hot
              </button>
              <button
                onClick={() => setFilter("week")}
                className={filter === "week" ? "active" : ""}
              >
                Week
              </button>
            </nav>

            {/* Pass filter and searchQuery as props to MainContent */}
            <MainContent filter={filter} searchQuery={searchQuery} />
          </div>
          <RightSidebar />
        </main>
      </div>
    </div>
  );
}

export default App;
