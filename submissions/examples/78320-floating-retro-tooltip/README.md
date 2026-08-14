:root {
  --bg: #120d08;
  --panel: #1c140d;
  --panel-light: #2c1e13;
  --cream: #f6e6c8;
  --muted: #c8ac80;
  --orange: #ff8c32;
  --orange-dark: #b54e13;
  --yellow: #ffd166;
  --brown: #5a3218;
  --shadow-dark: #080503;
  --shadow-light: rgba(255, 209, 102, 0.14);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: "Courier New", Courier, monospace;
  background:
    radial-gradient(
      circle at top,
      rgba(255, 140, 50, 0.08),
      transparent 35%
    ),
    linear-gradient(145deg, #0c0906, var(--bg));
  color: var(--cream);
}

button {
  font: inherit;
}

.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
}

.tooltip-demo {
  position: relative;
  isolation: isolate;
  width: min(100%, 900px);
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: clamp(2rem, 5vw, 4rem);
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.025),
      transparent 25%
    ),
    var(--panel);
  border: 3px solid var(--brown);
  box-shadow:
    0 0 0 5px #090604,
    12px 12px 0 var(--shadow-dark),
    -6px -6px 0 rgba(255, 209, 102, 0.04);
}

.tooltip-demo::before,
.tooltip-demo::after {
  content: "";
  position: absolute;
  pointer-events: none;
  z-index: -1;
}

.tooltip-demo::before {
  inset: 14px;
  border: 1px dashed rgba(255, 140, 50, 0.22);
}

.tooltip-demo::after {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  top: -120px;
  right: -100px;
  background: rgba(255, 140, 50, 0.07);
  filter: blur(10px);
}

.scanlines {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 3px,
    rgba(255, 209, 102, 0.018) 4px
  );
}

.eyebrow {
  padding: 0.4rem 0.75rem;
  border: 2px solid var(--orange-dark);
  background: #120b06;
  color: var(--yellow);
  font-size: clamp(0.65rem, 1.5vw, 0.8rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-align: center;
  box-shadow: 4px 4px 0 #080503;
}

h1 {
  max-width: 700px;
  color: var(--cream);
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  text-shadow:
    3px 3px 0 var(--orange-dark),
    6px 6px 0 #080503;
}

.intro {
  width: min(100%, 620px);
  color: var(--muted);
  font-size: clamp(0.8rem, 2vw, 1rem);
  line-height: 1.7;
  text-align: center;
}

.tooltip-stage {
  position: relative;
  width: min(100%, 620px);
  min-height: 255px;
  display: grid;
  place-items: center;
  margin: 1.5rem 0;
  border: 2px solid rgba(255, 140, 50, 0.22);
  background:
    linear-gradient(
      135deg,
      rgba(255, 140, 50, 0.07),
      rgba(255, 209, 102, 0.015)
    ),
    #100b07;
}

.tooltip-stage::before,
.tooltip-stage::after {
  position: absolute;
  color: rgba(255, 209, 102, 0.4);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
}

.tooltip-stage::before {
  content: "01";
  top: 10px;
  left: 12px;
}

.tooltip-stage::after {
  content: "RETRO UI";
  right: 12px;
  bottom: 10px;
}

.tooltip-wrap {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.retro-button {
  position: relative;
  z-index: 2;
  min-width: 170px;
  padding: 1rem 1.5rem;
  border: 3px solid var(--orange);
  border-radius: 0;
  background: var(--orange);
  color: #1a0c03;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow:
    7px 7px 0 #5f2508,
    0 0 0 2px #080503;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;
}

.retro-button:hover,
.retro-button:focus-visible {
  transform: translate(4px, 4px);
  box-shadow:
    3px 3px 0 #5f2508,
    0 0 0 2px #080503;
  background: var(--yellow);
}

.retro-button:focus-visible {
  outline: 3px dashed var(--yellow);
  outline-offset: 6px;
}

.retro-button:active {
  transform: translate(7px, 7px);
  box-shadow: 0 0 0 2px #080503;
}

.retro-tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 28px);
  width: min(290px, 78vw);
  padding: 1rem 1.15rem;
  transform: translate(-50%, 14px);
  transform-origin: center bottom;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background: var(--cream);
  color: #180e07;
  border: 3px solid #180e07;
  box-shadow:
    8px 8px 0 var(--orange-dark),
    12px 12px 0 #080503;
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
}

.retro-tooltip::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -14px;
  width: 24px;
  height: 24px;
  transform: translateX(-50%) rotate(45deg);
  background: var(--cream);
  border-right: 3px solid #180e07;
  border-bottom: 3px solid #180e07;
}

.tooltip-label,
.tooltip-text {
  display: block;
}

.tooltip-label {
  margin-bottom: 0.35rem;
  color: #9a3908;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.tooltip-text {
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.5;
}

.tooltip-wrap:hover .retro-tooltip,
.tooltip-wrap:focus-within .retro-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

.feature-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}

.feature-row span {
  padding: 0.5rem 0.75rem;
  border: 2px solid #6d421f;
  background: #120c08;
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  box-shadow: 3px 3px 0 #080503;
}

@media (max-width: 600px) {
  .page {
    padding: 1rem;
  }

  .tooltip-demo {
    min-height: 580px;
    padding: 2rem 1rem;
  }

  .tooltip-demo::before {
    inset: 9px;
  }

  .tooltip-stage {
    min-height: 240px;
  }

  .retro-tooltip {
    bottom: calc(100% + 24px);
  }

  .retro-button {
    min-width: 150px;
    padding: 0.85rem 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .retro-button,
  .retro-tooltip {
    transition: none;
  }
}