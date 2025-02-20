import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './images/Altria-logo.png';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('Inventory');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        window.location.href = "/"; // Redirect to login page (adjust path as necessary)
    };

    return (
        <>
            {/* Hamburger menu for mobile */}
            <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Sidebar content */}
            <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
                <div className="logo">
                    <img src={logo} alt="Altria Logo" className="header-logo" />
                </div>
                <Link to="/HomePage" className={`menu-item ${activeSection === 'Home' ? 'active' : ''}`} onClick={() => setActiveSection('Home')}>
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </Link>
                <Link 
                    to="/inventory" 
                    className={`menu-item ${activeSection === 'Inventory' ? 'active' : ''}`}
                    onClick={() => setActiveSection('Inventory')}
                >
                    <i className="fas fa-tasks"></i>
                    <span>Inventory</span>
                </Link>
                <Link to="/TransferPage" className={`menu-item ${activeSection === 'Transfer' ? 'active' : ''}`} onClick={() => setActiveSection('Transfer')}>
                    <i className="fas fa-exchange-alt"></i>
                    <span>Transfer</span>
                </Link>
                <Link to="/HandoverPage" className={`menu-item ${activeSection === 'Handover' ? 'active' : ''}`} onClick={() => setActiveSection('Handover')}>
                    <i className="fas fa-exchange-alt"></i>
                    <span>Handover</span>
                </Link>
                <Link to="/RepairFormPage" className={`menu-item ${activeSection === 'IssueTracker' ? 'active' : ''}`} onClick={() => setActiveSection('IssueTracker')}>
                    <i className="fas fa-clipboard-list"></i>
                    <span>Issue Tracker</span>
                </Link>

                <div className="section-title">Devices</div>
                <Link to="/LaptopDetailsPage" className={`menu-item ${activeSection === 'Laptop' ? 'active' : ''}`} onClick={() => setActiveSection('Laptop')}>
                    <i className="fas fa-laptop"></i>
                    <span>Laptop</span>
                </Link>
                <Link to="/NetworkEquipmentPage" className={`menu-item ${activeSection === 'Label' ? 'active' : ''}`} onClick={() => setActiveSection('NetworkEquipment')}>
                    <i className="fas fa-tag"></i>
                    <span>Network Equipment</span>
                </Link>
                <Link to="/AccessoriesPage" className={`menu-item ${activeSection === 'Accessories' ? 'active' : ''}`} onClick={() => setActiveSection('Accessories')}>
                    <i className="fas fa-headphones"></i>
                    <span>Accessories</span>
                </Link>

                <div className="section-title">Users</div>
                <Link to="/EmployeeDetailsPage" className={`menu-item ${activeSection === 'Employees' ? 'active' : ''}`} onClick={() => setActiveSection('Employees')}>
                    <i className="fas fa-user"></i>
                    <span>Employees</span>
                </Link>
                <Link to="/users-roles" className={`menu-item ${activeSection === 'UsersRoles' ? 'active' : ''}`} onClick={() => setActiveSection('UsersRoles')}>
                    <i className="fas fa-users-cog"></i>
                    <span>Users & Roles</span>
                </Link>

                <div className="section-title">Reports</div>
                <Link to="/InUseDevicePage" className={`menu-item ${activeSection === 'InUseDevices' ? 'active' : ''}`} onClick={() => setActiveSection('InUseDevices')}>
                    <i className="fas fa-clipboard-check"></i>
                    <span>In Use Devices</span>
                </Link>
                <Link to="/in-stock-devices" className={`menu-item ${activeSection === 'InStockDevices' ? 'active' : ''}`} onClick={() => setActiveSection('InStockDevices')}>
                    <i className="fas fa-clipboard-list"></i>
                    <span>In Stock Devices</span>
                </Link>

                {/* Logout Button */}
                <button className="menu-item" 
                 style={{
                    display: 'flex', 
                    alignItems: 'left', 
                    justifyContent: 'left', 
                    backgroundColor: '#f44336', 
                    color: 'white', 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    border: 'none', 
                    borderRadius: '5px', 
                    padding: '10px 20px', 
                    cursor: 'pointer', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
                    width: '100%', 
                    marginTop: '20px',
                }}
                onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
        </>
    );
};

export default Sidebar;
