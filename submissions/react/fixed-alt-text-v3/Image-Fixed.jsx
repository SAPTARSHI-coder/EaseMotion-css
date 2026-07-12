import React from 'react';

const ImageFixed = ({ src, alt, className, ...props }) => {
    return (
        <img
            src={src}
            alt={alt || "Image"}
            className={className}
            {...props}
        />
    );
};

export default ImageFixed;

