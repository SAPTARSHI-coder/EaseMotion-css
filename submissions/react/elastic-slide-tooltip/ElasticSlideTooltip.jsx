import { useState } from "react";

export default function Tooltip({
  text = "Tooltip",
  position = "top",
  children,
}) {
  const [show, setShow] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`absolute whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm text-white shadow-lg transition-all duration-300
        ${positions[position]}
        ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 translate-y-2 scale-90"
        }`}
      >
        {text}
      </div>
    </div>
  );
}