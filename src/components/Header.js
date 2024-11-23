import React, { useState } from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

function Header({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState(""); // Local state to manage input value

  const handleSearch = (e) => {
    if (e.key === "Enter") { // Trigger search on Enter key press
      setSearchQuery(inputValue); // Pass the search query to the parent
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input state as the user types
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img
          src={require("../img/logo.png")}
          alt="StackOverflow Logo"
          className="logo"
        />

        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search your questions here..."
            className="search-input"
            value={inputValue} // Bind the input field to local state
            onChange={handleChange} // Handle changes to the input value
            onKeyDown={handleSearch} // Listen for Enter key press
          />
        </div>

        {/* Product Search (optional, if you need it) */}
        <input type="text" placeholder="Product" className="product-search" />
      </div>

      {/* Header Icons */}
      <div className="header-icons">
        <FaEnvelope className="icon message-icon" title="Messages" />
        <FaBell className="icon notification-icon" title="Notifications" />
        <IoPersonCircleSharp className="icon profile-icon" title="Profile" />
      </div>
    </header>
  );
}

export default Header;
