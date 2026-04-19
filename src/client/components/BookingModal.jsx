import React, { useState } from 'react';
import './BookingModal.css';
import { useBookings } from '../../context/BookingContext';

const BookingModal = ({ isOpen, onClose, defaultService = '' }) => {
    const { addBooking } = useBookings();
    const [service, setService] = useState(defaultService);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!service || !name || !phone || !address) return;

        addBooking(service, { name, phone, address });
        alert('Booking successful!');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Book a Service</h2>
                <button className="close-btn" onClick={onClose}>✕</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Service</label>
                        <input
                            type="text"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder="e.g. Sofa Deep Cleaning"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Full address"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
