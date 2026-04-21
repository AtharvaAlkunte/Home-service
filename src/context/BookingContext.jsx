import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from MongoDB on mount
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      console.log('Fetching bookings from:', `${API_URL}/bookings`);
      const response = await fetch(`${API_URL}/bookings`);
      const data = await response.json();
      console.log('Fetched bookings:', data.length);
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const addBooking = async (service, customerDetails) => {
    try {
      console.log('Sending booking data:', { service, customer: customerDetails });
      
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

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to create booking');
      }

      setBookings(prev => [responseData, ...prev]);
      return responseData._id;
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
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update booking');
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
