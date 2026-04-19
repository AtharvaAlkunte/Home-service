import React, { useState } from 'react';
import { Home as HomeIcon, PenTool, Droplets, Wind, Sparkles, Paintbrush, Zap, Wrench, ShieldCheck, Thermometer } from 'lucide-react';
import { ServiceCard } from '../components/Cards';
import BookingModal from '../components/BookingModal';
import './Home.css'; // Reusing layout CSS

const ServicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleBook = (serviceName) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };
    const allServices = [
        { title: 'Home Cleaning', desc: 'Complete house deep cleaning solutions.', icon: HomeIcon, image: "https://i.pinimg.com/1200x/19/97/4a/19974a5b36c77d3dc78d0e11f2a775d9.jpg", accent: true },
        { title: 'Bathroom Cleaning', desc: 'Thorough bathroom sanitization.', icon: Droplets, image: "https://i.pinimg.com/1200x/b6/0b/15/b60b157dc950e748b4250a342a9b2704.jpg" },
        { title: 'Kitchen Deep Clean', desc: 'Remove tough grease and stains.', icon: Sparkles, image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba' },
        { title: 'Plumbing', desc: 'Tap repair, leakages, and pipes.', icon: Droplets, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7' },
        { title: 'Electrician', desc: 'Wiring, switches & electrical panels.', icon: Zap, image: "https://i.pinimg.com/1200x/3a/19/e7/3a19e7b085507900aa4ef54ca35079ea.jpg" },
        { title: 'Appliance Repair', desc: 'Fridge, oven, and washing machine fixes.', icon: PenTool, image: "https://i.pinimg.com/736x/78/22/e1/7822e1b224718fb543eba70c338d5ab2.jpg" },
        { title: 'Painting', desc: 'Interior and exterior wall painting.', icon: Paintbrush, image: "https://i.pinimg.com/736x/68/d5/24/68d524d8cc7563139a7b33e7be51b9bc.jpg" },
        { title: 'Pest Control', desc: 'Termite, cockroach, and mosquito treatments.', icon: ShieldCheck, image: "https://i.pinimg.com/736x/b5/7b/6f/b57b6fa1c540a04fa369ce7b9a2b3ca2.jpg" },
        { title: 'Carpenter', desc: 'Furniture assembly and woodwork repair.', icon: Wrench, image: "https://i.pinimg.com/1200x/f9/72/ec/f972ec4c7c312f1254b842d91057b1bc.jpg" },
        { title: 'Geyser Repair', desc: 'Geyser installation and servicing.', icon: Thermometer, image: "https://i.pinimg.com/736x/80/3b/49/803b49e9a285c939c9f4cb370e68196e.jpg" },
    ];

    return (
        <div className="services-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="container">
                <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>All Home Services</h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>Choose from our wide range of trusted professional home services.</p>
                </div>

                <div className="services-grid" style={{ marginBottom: '80px' }}>
                    {allServices.map((service, idx) => (
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
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={selectedService}
            />
        </div>
    );
};

export default ServicesPage;
