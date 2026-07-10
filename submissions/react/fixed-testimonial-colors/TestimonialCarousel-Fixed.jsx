import React from 'react';

const TestimonialCarouselFixed = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "Developer",
            tagColor: "var(--ease-color-primary, #6366f1)"
        },
        {
            name: "Jane Smith",
            role: "Designer",
            tagColor: "var(--ease-color-success, #10b981)"
        },
        {
            name: "Alex Johnson",
            role: "Product Manager",
            tagColor: "var(--ease-color-warning, #f59e0b)"
        }
    ];

    return (
        <div className="ease-card ease-card-glass">
            <div style={{
                display: 'flex',
                gap: '16px',
                padding: '20px',
                flexWrap: 'wrap'
            }}>
                {testimonials.map((t, i) => (
                    <div key={i} style={{
                        border: `2px solid ${t.tagColor}`,
                        borderRadius: '8px',
                        padding: '16px',
                        flex: '1',
                        minWidth: '200px'
                    }}>
                        <h4 style={{ color: t.tagColor }}>{t.name}</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarouselFixed;


