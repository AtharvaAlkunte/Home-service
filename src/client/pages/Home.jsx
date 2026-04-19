import React, { useState } from 'react';
import { BookingCard, TestimonialCard } from '../components/Cards';
import BookingModal from '../components/BookingModal';
import './Home.css';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleBook = (serviceName) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    const topServices = [
        { title: 'Home Cleaning', desc: 'Reliable help for your entire home.', image: "https://i.pinimg.com/1200x/19/97/4a/19974a5b36c77d3dc78d0e11f2a775d9.jpg" },
        { title: 'Appliance Repair', desc: 'Expert fix for all big appliances.', image: "https://i.pinimg.com/736x/78/22/e1/7822e1b224718fb543eba70c338d5ab2.jpg" },
        { title: 'Plumbing', desc: 'Zero leakages, complete peace of mind.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7' },
        { title: 'Electrician', desc: 'Safe wiring and quick electrical repairs', image: "https://i.pinimg.com/1200x/3a/19/e7/3a19e7b085507900aa4ef54ca35079ea.jpg" },
        { title: 'Beauty', desc: 'Salon and spa directly to your living room.', image: "https://i.pinimg.com/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg" },
        { title: 'Painting', desc: 'Premium colors and professional finish.', image: "https://i.pinimg.com/736x/68/d5/24/68d524d8cc7563139a7b33e7be51b9bc.jpg" },
    ];

    const popularBookings = [
        { title: 'Sofa Deep Cleaning', rating: '4.9', price: '799', image: "https://i.pinimg.com/1200x/dc/40/73/dc40736bfc358bbcaf179a3c71609e05.jpg" },
        { title: 'Bathroom Cleaning', rating: '4.8', price: '499', image: "https://i.pinimg.com/736x/eb/7c/e6/eb7ce6bd35481fc072fcaa8062e5d850.jpg" },
        { title: 'Painting Service', rating: '4.7', price: '1999', image: "https://i.pinimg.com/1200x/fa/77/52/fa7752f5c782a1816674672e0e2bf569.jpg" },
        { title: 'Washing Machine Repair', rating: '4.9', price: '299', image: "https://i.pinimg.com/736x/9f/24/27/9f2427984723213e5d3485be037e03dd.jpg" },
    ];

    const testimonials = [
        { name: 'Samce', review: 'Prompt & professional, excellent service!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { name: 'Nome', review: 'Prompt & professional, excellent service!', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { name: 'Namvu J.', review: 'Prompt & professional, excellent service!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    ];

    return (
        <div className="home-page">
            <section className="hero-section container">
                <div className="hero-content">
                    <h1>Book Your Trusted<br />Home Services.</h1>
                    <p>Reliable help for cleaning, repairs, plumbing & more.</p>
                </div>
            </section>

            <section className="container section-padding">
                <h2 className="section-title">Top Services</h2>
                <div className="services-grid">
                    {topServices.map((service, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleBook(service.title)}
                            className="premium-service-card"
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="overlay"></div>
                            <div className="content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-padding">
                <h2 className="section-title">Popular Bookings</h2>
                <div className="bookings-grid">
                    {popularBookings.map((booking, idx) => (
                        <BookingCard
                            key={idx}
                            {...booking}
                            onBook={() => handleBook(booking.title)}
                        />
                    ))}
                </div>
            </section>

            <section className="container section-padding testimonials-section">
                <h2 className="section-title">Trusted by Thousands</h2>
                <div className="testimonials-grid">
                    {testimonials.map((test, idx) => (
                        <TestimonialCard key={idx} {...test} />
                    ))}
                </div>
            </section>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={selectedService}
            />
        </div>
    );
};

export default Home;
