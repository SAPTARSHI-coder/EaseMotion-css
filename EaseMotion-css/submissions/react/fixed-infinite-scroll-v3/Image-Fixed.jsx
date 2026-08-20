import React from 'react';
const ImageFixed = ({ src, alt, className, style, ...props }) => {
  const defaultAlt = alt || 'Feed image';
  return <img src={src} alt={defaultAlt} className={`ease-fade-in ${className || ''}`} style={{ maxWidth: '100%', height: 'auto', display: 'block', ...style }} {...props} />;
};
export default ImageFixed;
