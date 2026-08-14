:root {
  --bg: #e7ebf2;
  --surface: #e7ebf2;

  --text: #343b48;
  --muted: #7b8493;
  --accent: #5865f2;

  --white-shadow: rgba(255, 255, 255, 0.95);
  --dark-shadow: rgba(163, 170, 182, 0.72);

  --radius: 20px;
  --transition: 220ms ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--text);
  background: var(--bg);
}

/* Page */

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: clamp(20px, 5vw, 70px);
}

.breadcrumb-section {
  width: min(100%, 1000px);

  padding: clamp(28px, 5vw, 58px);

  border-radius: 32px;

  background: var(--surface);

  box-shadow:
    18px 18px 38px var(--dark-shadow),
    -18px -18px 38px var(--white-shadow);

  text-align: center;
}

/* Heading */

.eyebrow {
  display: inline-block;

  margin-bottom: 14px;

  color: var(--muted);

  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.description {
  max-width: 650px;

  margin: 18px auto 40px;

  color: var(--muted);

  font-size: 0.95rem;
  line-height: 1.7;
}

/* Breadcrumb */

.breadcrumb {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 12px;

  padding: 18px;

  border-radius: 22px;

  box-shadow:
    inset 7px 7px 15px rgba(163, 170, 182, 0.38),
    inset -7px -7px 15px rgba(255, 255, 255, 0.78);

  background: var(--surface);
}

/* Crumb */

.crumb {
  min-height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  padding: 0 17px;

  border-radius: 14px;

  color: var(--text);

  font-size: 0.82rem;
  font-weight: 700;

  text-decoration: none;

  background: var(--surface);

  box-shadow:
    7px 7px 14px rgba(163, 170, 182, 0.62),
    -7px -7px 14px rgba(255, 255, 255, 0.85);

  transition:
    transform var(--transition),
    color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.crumb:hover {
  color: var(--accent);

  transform: translateY(-3px);

  box-shadow:
    9px 9px 18px rgba(163, 170, 182, 0.58),
    -9px -9px 18px rgba(255, 255, 255, 0.9);
}

.crumb:active {
  transform: translateY(0);

  box-shadow:
    inset 5px 5px 10px rgba(163, 170, 182, 0.45),
    inset -5px -5px 10px rgba(255, 255, 255, 0.8);
}

/* Icon */

.icon {
  width: 26px;
  height: 26px;

  display: inline-grid;
  place-items: center;

  flex: 0 0 26px;

  border-radius: 50%;

  color: var(--muted);

  font-size: 0.7rem;

  background: var(--surface);

  box-shadow:
    inset 3px 3px 6px rgba(163, 170, 182, 0.42),
    inset -3px -3px 6px rgba(255, 255, 255, 0.85);
}

.crumb:hover .icon {
  color: var(--accent);
}

/* Current */

.crumb.current {
  color: var(--accent);

  cursor: default;

  box-shadow:
    inset 6px 6px 12px rgba(163, 170, 182, 0.42),
    inset -6px -6px 12px rgba(255, 255, 255, 0.86);
}

.crumb.current:hover {
  transform: none;
}

/* Separator */

.separator {
  color: #9ca4b2;

  font-size: 1rem;
  font-weight: 700;
}

/* Status */

.current-location {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  margin-top: 28px;

  padding: 12px 18px;

  border-radius: 14px;

  color: var(--muted);

  font-size: 0.75rem;

  background: var(--surface);

  box-shadow:
    7px 7px 14px rgba(163, 170, 182, 0.55),
    -7px -7px 14px rgba(255, 255, 255, 0.85);
}

.current-location strong {
  color: var(--text);
}

.status-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--accent);

  box-shadow:
    0 0 0 4px rgba(88, 101, 242, 0.1),
    0 0 12px rgba(88, 101, 242, 0.32);
}

/* Accessibility */

.crumb:focus-visible {
  outline: 3px solid rgba(88, 101, 242, 0.45);
  outline-offset: 5px;
}

/* Tablet */

@media (max-width: 760px) {
  .breadcrumb-section {
    padding: 32px 22px;
    border-radius: 26px;
  }

  .breadcrumb {
    gap: 10px;
    padding: 15px;
  }

  .crumb {
    min-height: 44px;
    padding: 0 14px;
  }

  .separator {
    font-size: 0.9rem;
  }
}

/* Mobile */

@media (max-width: 560px) {
  .page {
    padding: 16px;
  }

  .breadcrumb-section {
    padding: 26px 15px;
    border-radius: 22px;
  }

  h1 {
    font-size: clamp(1.9rem, 10vw, 2.7rem);
  }

  .description {
    margin-bottom: 28px;
    font-size: 0.82rem;
  }

  .breadcrumb {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 8px;

    padding: 12px;
  }

  .crumb {
    width: 100%;

    min-height: 44px;

    justify-content: flex-start;

    padding: 0 15px;
  }

  .separator {
    display: none;
  }

  .current-location {
    width: 100%;
    margin-top: 20px;
  }
}

/* Small mobile */

@media (max-width: 360px) {
  .breadcrumb-section {
    padding: 22px 12px;
  }

  .crumb {
    font-size: 0.75rem;
  }

  .current-location {
    font-size: 0.7rem;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}