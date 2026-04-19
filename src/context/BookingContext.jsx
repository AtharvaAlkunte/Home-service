import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    // Try to get from local storage or return empty
    const saved = localStorage.getItem('homeserve_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('homeserve_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (service, customerDetails) => {
    const newBooking = {
      id: Date.now().toString(),
      service,
      customer: customerDetails,
      status: 'Pending',
      date: new Date().toISOString()
    };
    setBookings(prev => [newBooking, ...prev]);
    return newBooking.id;
  };

  const updateBookingStatus = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBookingStatus }}>
      {children}
    </BookingContext.Provider>
  );
};
