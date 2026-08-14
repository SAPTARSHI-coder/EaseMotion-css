import React from 'react';

const ComponentFixed = () => {
    return (
        <div style={{
            display: 'var(--ease-display-flex, flex)',
            alignItems: 'var(--ease-align-center, center)',
            gap: 'var(--ease-gap-md, 12px)',
            padding: 'var(--ease-spacing-md, 16px)',
        }}>
            <span style={{
                fontSize: 'var(--ease-font-size-xl, 2.4rem)',
                lineHeight: 'var(--ease-line-height-1, 1)',
            }}>Icon</span>
            <p style={{
                margin: 'var(--ease-margin-0, 0)',
                fontWeight: 'var(--ease-font-weight-bold, 700)',
                color: 'var(--ease-color-white, white)',
            }}>Content</p>
        </div>
    );
};

export default ComponentFixed;

