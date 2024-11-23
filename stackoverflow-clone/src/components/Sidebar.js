import React from "react";

function Sidebar() {
  return (
    <div className="left-sidebar">
      <ul>
        <li className="active">
          <span className="icon">🏠</span>
          <span>Home</span>
          <div className="active-indicator"></div>
        </li>
      </ul>
      <section>
        <h4>PUBLIC</h4>
        <ul>
          <li>
            <span className="icon">❓</span>
            <span>Questions</span>
          </li>
          <li>
            <span className="icon">🏷️</span>
            <span>Tags</span>
          </li>
          <li>
            <span className="icon">👤</span>
            <span>Users</span>
          </li>
        </ul>
      </section>
      <section>
        <h4>COLLECTIVES</h4>
        <ul>
          <li>
            <span className="icon">🔍</span>
            <span>Explore Jobs</span>
          </li>
        </ul>
      </section>
      <section>
        <h4>FIND JOBS</h4>
        <ul>
          <li>
            <span className="icon">💼</span>
            <span>Jobs</span>
          </li>
          <li>
            <span className="icon">🏢</span>
            <span>Companies</span>
          </li>
        </ul>
      </section>
      <section>
        <h4>TEAMS</h4>
        <ul>
          <li>
            <span className="icon">👥</span>
            <span>+ Create a team</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
