import React, { useState, useEffect } from "react";

function TypewriterCleanupFix({
  text = "Hello, world!",
  speed = 100,
  loop = false,
  pauseMs = 1200,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) {
      if (!loop) return;

      const pauseTimer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pauseMs);

      return () => clearTimeout(pauseTimer);
    }

    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearInterval(timer);
  }, [index, text, speed, loop, pauseMs]);

  return (
    <span style={styles.wrapper}>
      {displayedText}
      <span style={styles.cursor}>|</span>
    </span>
  );
}

const styles = {
  wrapper: {
    fontFamily: "monospace",
    fontSize: "1.25rem",
    color: "#1f2937",
  },
  cursor: {
    display: "inline-block",
    marginLeft: "2px",
    animation: "typewriter-cleanup-fix-blink 1s step-end infinite",
  },
};

if (typeof document !== "undefined" && !document.getElementById("typewriter-cleanup-fix-style")) {
  const styleTag = document.createElement("style");
  styleTag.id = "typewriter-cleanup-fix-style";
  styleTag.textContent = `
    @keyframes typewriter-cleanup-fix-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(styleTag);
}

export default TypewriterCleanupFix;