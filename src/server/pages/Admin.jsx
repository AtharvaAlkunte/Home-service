import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';
import './Admin.css';

const Admin = () => {
    const { bookings, updateBookingStatus } = useBookings();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBookings = bookings.filter((b) => {
        const name = b?.customer?.name?.toLowerCase().trim() || "";
        const query = searchQuery.toLowerCase().trim();

        return name.includes(query);
    });

    return (
        <div className="admin-page container">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Manage all your home service bookings.</p>
            </div>

            <div className="admin-layout">
                <div className="admin-sidebar" style={{ alignSelf: 'start' }}>
                    <div className="sidebar-item active">All Bookings</div>
                    <div className="sidebar-item">Users</div>
                    <div className="sidebar-item">Settings</div>
                </div>

                <div className="admin-content">
                    <div className="bookings-panel">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
                            <h2 style={{ margin: 0, padding: 0, border: 'none' }}>Recent Bookings ({filteredBookings.length})</h2>
                            <div className="admin-search">
                                <input
                                    type="text"
                                    placeholder="Search customer name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border-color)',
                                        width: '250px'
                                    }}
                                />
                            </div>
                        </div>

                        {filteredBookings.length === 0 ? (
                            <div className="empty-state">
                                <p>{bookings.length > 0 ? "No customers found matching that exact name." : "No bookings found yet. Try making a test booking on the Home page."}</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="bookings-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Service</th>
                                            <th>Customer Details</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredBookings.map((booking) => (
                                            <tr key={booking._id}>
                                                <td className="id-cell">#{booking._id.slice(-6)}</td>
                                                <td className="service-cell">{booking.service}</td>
                                                <td className="customer-cell">
                                                    <strong>{booking.customer.name}</strong><br />
                                                    <span className="text-sm text-muted">{booking.customer.phone}</span><br />
                                                    <span className="text-sm text-muted">{booking.customer.address}</span>
                                                </td>
                                                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                                                <td>
                                                    <span className={`status-badge status-${booking.status.toLowerCase()}`}>
                                                        {booking.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    {booking.status === 'Pending' && (
                                                        <button
                                                            className="btn btn-primary btn-sm action-btn"
                                                            onClick={() => updateBookingStatus(booking._id, 'Confirmed')}
                                                        >
                                                            Confirm
                                                        </button>
                                                    )}
                                                    {booking.status === 'Confirmed' && (
                                                        <button
                                                            className="btn btn-accent btn-sm action-btn"
                                                            onClick={() => updateBookingStatus(booking._id, 'Completed')}
                                                        >
                                                            Complete
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
