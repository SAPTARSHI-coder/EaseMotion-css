:root {
  --bg: #08090b;
  --card: rgba(255, 255, 255, 0.055);
  --card-hover: rgba(255, 255, 255, 0.08);
  --border: rgba(255, 255, 255, 0.12);
  --border-strong: rgba(255, 255, 255, 0.22);
  --text: #f6f7f3;
  --muted: #92958f;
  --accent: #b8ff3d;
  --accent-soft: rgba(184, 255, 61, 0.13);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at 15% 15%, rgba(184, 255, 61, 0.08), transparent 24rem),
    radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.045), transparent 22rem),
    var(--bg);
  font-family: Arial, Helvetica, sans-serif;
}

button {
  font: inherit;
}

.demo {
  min-height: 100vh;
  padding: clamp(1rem, 4vw, 4rem);
  display: grid;
  place-items: center;
}

.component-card {
  position: relative;
  width: min(100%, 860px);
  padding: clamp(1.4rem, 4vw, 3rem);
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 28px;
  background: var(--card);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
}

.component-card::before {
  content: '';
  position: absolute;
  inset: -30%;
  z-index: -1;
  background:
    radial-gradient(circle, rgba(184, 255, 61, 0.08), transparent 32%),
    radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.045), transparent 28%);
  animation: ambient-shift 10s ease-in-out infinite alternate;
}

.component-header {
  max-width: 38rem;
  margin-bottom: 2rem;
}

.eyebrow {
  margin: 0 0 0.7rem;
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.component-header h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4.2rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.description {
  max-width: 34rem;
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.tab-shell {
  padding: clamp(1rem, 2vw, 1.5rem);
  border: 1px solid var(--border);
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.18);
}

.tabs {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.35rem;
  padding: 0.35rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
}

.tab {
  position: relative;
  z-index: 2;
  min-width: 0;
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition:
    color 220ms ease,
    transform 220ms ease;
}

.tab:hover {
  color: var(--text);
  transform: translateY(-1px);
}

.tab:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.tab.is-active {
  color: #0d1009;
}

.tab-indicator {
  position: absolute;
  z-index: 1;
  top: 0.35rem;
  bottom: 0.35rem;
  left: 0.35rem;
  width: calc((100% - 0.7rem) / 3);
  border: 1px solid rgba(184, 255, 61, 0.4);
  border-radius: 999px;
  background:
    linear-gradient(
      135deg,
      rgba(184, 255, 61, 0.96),
      rgba(217, 255, 150, 0.96)
    );
  box-shadow:
    0 8px 25px rgba(184, 255, 61, 0.11),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tab:nth-child(2).is-active ~ .tab-indicator {
  transform: translateX(100%);
}

.tab:nth-child(3).is-active ~ .tab-indicator {
  transform: translateX(200%);
}

.tabs::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0.8rem;
  width: calc((100% - 1.6rem) / 3);
  height: 2px;
  border-radius: 999px;
  background: var(--accent);
  opacity: 0.85;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tabs:has(.tab:nth-child(2).is-active)::after {
  transform: translateX(calc(100% + 0.05rem));
}

.tabs:has(.tab:nth-child(3).is-active)::after {
  transform: translateX(calc(200% + 0.1rem));
}

.tab-content {
  min-height: 250px;
  display: grid;
  align-items: center;
}

.tab-panel {
  grid-area: 1 / 1;
  padding: clamp(1.5rem, 4vw, 3rem) 0 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}

.tab-panel.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.tab-panel:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 8px;
  border-radius: 10px;
}

.tab-panel[hidden] {
  display: none;
}

.panel-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 700;
}

.tab-panel h2 {
  margin: 0;
  font-size: clamp(1.6rem, 4vw, 3rem);
  letter-spacing: -0.045em;
}

.tab-panel p {
  max-width: 38rem;
  margin: 0.9rem 0 0;
  color: var(--muted);
  line-height: 1.75;
}

.component-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
  color: #666a63;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

@keyframes ambient-shift {
  from {
    transform: translate3d(-2%, -1%, 0) scale(0.98);
  }

  to {
    transform: translate3d(2%, 2%, 0) scale(1.04);
  }
}

@media (max-width: 600px) {
  .component-card {
    border-radius: 20px;
  }

  .tabs {
    grid-template-columns: 1fr;
    border-radius: 18px;
  }

  .tab-indicator {
    top: 0.35rem;
    bottom: auto;
    height: calc((100% - 0.7rem) / 3);
    width: calc(100% - 0.7rem);
  }

  .tab:nth-child(2).is-active ~ .tab-indicator {
    transform: translateY(100%);
  }

  .tab:nth-child(3).is-active ~ .tab-indicator {
    transform: translateY(200%);
  }

  .tabs::after {
    top: 0.75rem;
    right: auto;
    bottom: auto;
    left: 0;
    width: 2px;
    height: calc((100% - 1.5rem) / 3);
  }

  .tabs:has(.tab:nth-child(2).is-active)::after {
    transform: translateY(calc(100% + 0.05rem));
  }

  .tabs:has(.tab:nth-child(3).is-active)::after {
    transform: translateY(calc(200% + 0.1rem));
  }

  .tab-content {
    min-height: 300px;
  }

  .component-footer {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}