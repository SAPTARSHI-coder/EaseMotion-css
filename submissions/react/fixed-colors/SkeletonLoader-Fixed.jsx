import React from 'react';

const SkeletonLoaderFixed = () => {
    return (
        <div style={{
            background: 'var(--ease-skeleton-bg, rgba(255,255,255,0.08))',
            borderRadius: 'var(--ease-radius-md, 12px)',
            padding: 'var(--ease-spacing-md, 16px)',
        }}>
            <div style={{
                background: 'var(--ease-skeleton-shimmer, rgba(255,255,255,0.04))',
                border: '1px solid var(--ease-border-color, rgba(255,255,255,0.08))',
            }} />
        </div>
    );
};

export default SkeletonLoaderFixed;

