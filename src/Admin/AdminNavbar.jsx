import React, { useState } from "react";
import logo from "../Assets/img/logo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const AdminNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
  return (
    <>
      <nav className="adminnavbar">
        <img className="adminlogo" src={logo} />

        <button
          className="adminmenu-mobile"
          onClick={handleToggle}
          id="menuToggle"
        >
          ☰
        </button>

        {isVisible && (
          <div className="sidebarr">
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
          </div>
        )}
      </nav>
    </>
  );
};

export default AdminNavbar;
