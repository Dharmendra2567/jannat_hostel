import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar-dark bg-dark text-white position-fixed top-0 end-0 h-100 p-3" style={{ width: '250px', zIndex: 1000 }}>
      <div className=" d-lg-block">
        {/* Display sidebar content on large screens */}
        <div className="text-center mb-4">
          {/* Your logo here */}
          User Dashboard
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-white">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link text-white">
              Settings
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className="d-lg-none">
        {/* Display toggle button on small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
