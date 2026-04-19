import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [showSupport, setShowSupport] = useState(false);

    return (
        <header className="navbar-header glass">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <Home size={20} color="white" />
                    </div>
                    <span className="logo-text">HomeServe</span>
                </Link>

                <nav className="navbar-links">
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to="/my-bookings" className={location.pathname === '/my-bookings' ? 'active' : ''}>My Bookings</Link>
                    <Link to="/safety" className={location.pathname === '/safety' ? 'active' : ''}>Safety</Link>

                    <div className="support-nav-item" style={{ position: 'relative' }}>
                        <span
                            onClick={() => setShowSupport(!showSupport)}
                            className={showSupport ? 'active support-toggle' : 'support-toggle'}
                            style={{ cursor: 'pointer', fontWeight: '500', color: showSupport ? 'var(--primary-color)' : 'var(--text-dark)' }}
                        >
                            Support
                        </span>
                        {showSupport && (
                            <div className="support-dropdown" style={{
                                position: 'absolute', top: 'calc(100% + 15px)', left: '50%', transform: 'translateX(-50%)',
                                background: 'var(--primary-color)', color: 'white', padding: '12px 20px',
                                borderRadius: 'var(--radius-md)', whiteSpace: 'nowrap', boxShadow: 'var(--shadow-lg)'
                            }}>
                                <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>24/7 Emergency Line</div>
                                <div style={{ fontSize: '20px', fontWeight: '700' }}>📞 911</div>
                                {/* Arrow pointer */}
                                <div style={{
                                    position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                                    width: '12px', height: '12px', background: 'var(--primary-color)'
                                }}></div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
