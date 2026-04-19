import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './client/pages/Home';
import ServicesPage from './client/pages/Services';
import MyBookings from './client/pages/MyBookings';
import Safety from './client/pages/Safety';

import Admin from './server/pages/Admin';
import { BookingProvider } from './context/BookingContext';
import Navbar from './client/components/Navbar';
import Footer from './client/components/Footer';
import './App.css';

const ClientLayout = () => (
  <div className="app-container">
    <Navbar />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          {/* Client Routes with Navbar and Footer */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="my-bookings" element={<MyBookings />} />
            <Route path="safety" element={<Safety />} />
          </Route>

          {/* Admin Routes without Navbar and Footer */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
