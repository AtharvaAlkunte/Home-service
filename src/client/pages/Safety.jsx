import React from 'react';
import { Shield, Award, Users, CheckSquare } from 'lucide-react';

const Safety = () => {
    const securityFeatures = [
        { title: 'Background Checked', description: 'Every professional undergoes a 3-step strict background check.', icon: <CheckSquare size={32} color="var(--primary-color)" /> },
        { title: 'Certified Experts', description: 'Our partners hold industry-standard certifications.', icon: <Award size={32} color="var(--primary-color)" /> },
        { title: 'Insurance Covered', description: 'Upto ₹10,000 coverage for unintentional damages.', icon: <Shield size={32} color="var(--primary-color)" /> },
        { title: 'Continuous Training', description: 'Monthly training to keep skills sharp and standardized.', icon: <Users size={32} color="var(--primary-color)" /> },
    ];

    return (
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '80vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Your Safety is Our Priority</h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    We place immense trust in the professionals that enter your home. That's why we maintain industry-leading safety standards.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                marginBottom: '60px'
            }}>
                {securityFeatures.map((feat, i) => (
                    <div key={i} style={{
                        background: 'white',
                        padding: '30px',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid var(--border-color)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'var(--primary-light)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 20px auto'
                        }}>
                            {feat.icon}
                        </div>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{feat.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{feat.description}</p>
                    </div>
                ))}
            </div>

            <div style={{
                background: '#1F2937', color: 'white', borderRadius: 'var(--radius-lg)',
                padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <div style={{ maxWidth: '500px' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'white' }}>COVID-19 & Hygiene Protocols</h2>
                    <p style={{ color: '#9CA3AF', marginBottom: 0, lineHeight: 1.6 }}>
                        Mask usage, temperature checks, and hand sanitization remain mandatory across the board. The safety of your family comes first.
                    </p>
                </div>
                <Shield size={100} color="var(--primary-light)" opacity={0.2} />
            </div>
        </div>
    );
};

export default Safety;
