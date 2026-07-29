import React from "react";
const ImageFixed = ({ src, alt, className, style, ...props }) => {
  const defaultAlt = alt || "Flag image";
  return (
    <img
      src={src}
      alt={defaultAlt}
      style={{ maxWidth: "100%", height: "auto", display: "block", ...style }}
      {...props}
    />
  );
};
export default ImageFixed;
