import React from 'react';
import { useBookings } from '../../context/BookingContext';
import { Clock, CheckCircle } from 'lucide-react';

const MyBookings = () => {
    const { bookings } = useBookings();

    // Split logic: Pendings/Confirmed -> Current. Completed -> Previous (History).
    const currentBookings = bookings.filter(b => b.status === 'Pending' || b.status === 'Confirmed');
    const pastBookings = bookings.filter(b => b.status === 'Completed');

    const BookingHistoryCard = ({ booking }) => {
        const isCompleted = booking.status === 'Completed';
        return (
            <div style={{
                background: 'white',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        {isCompleted ? <CheckCircle size={20} color="#10B981" /> : <Clock size={20} color="#F59E0B" />}
                        <span style={{
                            fontWeight: '600',
                            color: isCompleted ? '#10B981' : '#F59E0B'
                        }}>{booking.status}</span>
                    </div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{booking.service}</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                        Booked on {new Date(booking.date).toLocaleDateString()}
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '500' }}>#{booking.id.slice(-6)}</div>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '14px' }}>
                        {booking.customer.address}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '80vh' }}>
            <h1 style={{ marginBottom: '40px' }}>My Bookings</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                    <h2 style={{ fontSize: '22px', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', marginBottom: '24px' }}>Current Bookings</h2>
                    {currentBookings.length === 0 ? (
                        <p style={{ color: 'var(--text-muted)' }}>You have no ongoing bookings.</p>
                    ) : (
                        currentBookings.map(b => <BookingHistoryCard key={b.id} booking={b} />)
                    )}
                </div>

                <div>
                    <h2 style={{ fontSize: '22px', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', marginBottom: '24px' }}>Booking History</h2>
                    {pastBookings.length === 0 ? (
                        <p style={{ color: 'var(--text-muted)' }}>No completed bookings yet.</p>
                    ) : (
                        pastBookings.map(b => <BookingHistoryCard key={b.id} booking={b} />)
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
