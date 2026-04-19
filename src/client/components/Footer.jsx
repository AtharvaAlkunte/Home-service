import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content" style={{ gridTemplateColumns: '1fr', justifyContent: 'center' }}>
                    <div className="footer-col" style={{ textAlign: 'center' }}>
                        <h3>App Download</h3>
                        <div className="app-buttons" style={{ flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                            <button className="store-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                            </button>
                            <button className="store-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 HomeServe Inc.</p>
                    <div className="social-links">
                        <a href="#fb">FB</a>
                        <a href="#tw">TW</a>
                        <a href="#li">LI</a>
                        <a href="#in">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
