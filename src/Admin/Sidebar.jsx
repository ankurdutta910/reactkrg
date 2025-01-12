import React from "react";
import "./Admin.css";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside class="sidebar">
        <h2>
          <img src={logo} />
        </h2>
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
