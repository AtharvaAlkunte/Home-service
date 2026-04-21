import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

const API_URL = 'http://localhost:5000/api';

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from MongoDB on mount
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/bookings`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const addBooking = async (service, customerDetails) => {
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          customer: customerDetails,
          status: 'Pending'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const newBooking = await response.json();
      setBookings(prev => [newBooking, ...prev]);
      return newBooking._id;
    } catch (error) {
      console.error('Error adding booking:', error);
      throw error;
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update booking');
      }

      const updatedBooking = await response.json();
      setBookings(prev => prev.map(b => b._id === id ? updatedBooking : b));
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBookingStatus, loading }}>
      {children}
    </BookingContext.Provider>
  );
};
