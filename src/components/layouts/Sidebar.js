import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar-dark  bg-dark w-sm-50  text-white  position-fixed  h-100 p-3" style={{ width: '250px' }}>
     
        {/* Display sidebar content on large screens */}
        <div className="text-center navbar-brand mb-4"> User Dashboard </div>
        <div className='collapse navbar-collapse' id='sidebarCollapse'>
        <ul className="navbar-nav ">
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
