import React from 'react';

const ImageFixed = ({ src, alt, className, ...props }) => {
    return (
        <img
            src={src}
            alt={alt || "Product image"}
            className={className}
            {...props}
        />
    );
};

export default ImageFixed;


