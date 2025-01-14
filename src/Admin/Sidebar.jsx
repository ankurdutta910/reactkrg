import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside
        className="sidebar" id="sidebar"
      
      >
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin-all-riders">All Riders</Link>
            </li>

            <li>
              <Link to="/admin-new-registrations">New Registrations</Link>
            </li>

            <li>
              <Link to="/admin-all-inqueries">Inqueries</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
