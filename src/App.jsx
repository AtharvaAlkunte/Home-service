import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

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
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="my-bookings" element={<MyBookings />} />
          <Route path="safety" element={<Safety />} />
        </Route>

        {/* Admin Route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BookingProvider>
  );
}

export default App;