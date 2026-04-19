import React from 'react';
import './Cards.css';

export const ServiceCard = ({ icon: Icon, title, description, accent }) => {
    return (
        <div className={`service-card ${accent ? 'accent-card' : ''}`}>
            <div className="icon-wrapper">
                <Icon size={24} color={accent ? "white" : "var(--primary-color)"} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export const BookingCard = ({ image, title, rating, price, onBook }) => {
    return (
        <div className="booking-card">
            <div className="booking-img-wrapper">
                <img src={image} alt={title} referrerPolicy="no-referrer" />
            </div>
            <div className="booking-content">
                <h4>{title}</h4>
                <div className="rating">
                    <span className="star">⭐</span>
                    <span>{rating}</span>
                </div>
                <div className="price-row">
                    <span className="price-label">From</span>
                    <span className="price-value">₹{price}</span>
                </div>
                <button className="btn btn-outline" onClick={onBook}>View Service</button>
            </div>
        </div>
    );
};

export const TestimonialCard = ({ avatar, name, review }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-header">
                <img src={avatar} alt={name} className="avatar" />
                <div className="user-info">
                    <div className="name-row">
                        <h5>{name}</h5>
                        <span className="verified-badge">✔ Verified</span>
                    </div>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <p>{review}</p>
        </div>
    );
};
