:root {
  color-scheme: light dark;

  --page-bg: #e8ecf2;
  --surface: #e8ecf2;
  --surface-raised: #edf0f5;

  --text: #242a34;
  --muted: #737d8d;

  --accent: #725bcf;
  --accent-dark: #5441a8;

  --border: rgba(255, 255, 255, 0.55);

  --light-shadow: rgba(255, 255, 255, 0.94);
  --dark-shadow: rgba(186, 192, 204, 0.64);

  --tooltip-bg: #e7ebf1;
  --tooltip-text: #2b3340;

  --success: #55aa78;

  --transition:
    220ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --page-bg: #181c25;
    --surface: #181c25;
    --surface-raised: #1d222d;

    --text: #eef1f8;
    --muted: #99a3b5;

    --accent: #9b88ed;
    --accent-dark: #6f59c8;

    --border: rgba(255, 255, 255, 0.08);

    --light-shadow: rgba(48, 54, 67, 0.62);
    --dark-shadow: rgba(8, 10, 15, 0.8);

    --tooltip-bg: #242a36;
    --tooltip-text: #f2f5fb;

    --success: #6fd092;
  }
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

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--text);

  background:
    radial-gradient(
      circle at 12% 12%,
      rgba(255, 255, 255, 0.72),
      transparent 28%
    ),
    radial-gradient(
      circle at 88% 85%,
      rgba(114, 91, 207, 0.1),
      transparent 28%
    ),
    var(--page-bg);

  transition:
    background var(--transition),
    color var(--transition);
}

@media (prefers-color-scheme: dark) {
  body {
    background:
      radial-gradient(
        circle at 12% 12%,
        rgba(155, 136, 237, 0.08),
        transparent 28%
      ),
      radial-gradient(
        circle at 88% 85%,
        rgba(111, 89, 200, 0.08),
        transparent 28%
      ),
      var(--page-bg);
  }
}

button {
  font: inherit;
}

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 42px 18px;
}

.tooltip-demo {
  width: min(900px, 100%);
}

.intro {
  max-width: 680px;

  margin: 0 auto 36px;

  text-align: center;
}

.intro__eyebrow {
  display: inline-block;

  margin-bottom: 10px;

  color: var(--muted);

  font-size: 0.66rem;
  font-weight: 850;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intro h1 {
  margin: 0;

  font-size: clamp(2.3rem, 7vw, 4.4rem);
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.intro p {
  max-width: 620px;

  margin: 16px auto 0;

  color: var(--muted);

  font-size: 0.9rem;
  line-height: 1.75;
}

.tooltip-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.demo-card {
  min-height: 190px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 22px;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: var(--surface-raised);

  box-shadow:
    12px 12px 25px var(--dark-shadow),
    -12px -12px 25px var(--light-shadow);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.demo-card:hover {
  transform: translateY(-4px);

  box-shadow:
    15px 15px 29px var(--dark-shadow),
    -15px -15px 29px var(--light-shadow);
}

.demo-card__label {
  align-self: flex-start;

  color: var(--muted);

  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tooltip {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 28px;
}

.tooltip__trigger {
  position: relative;
  z-index: 2;

  min-height: 42px;

  padding: 0 17px;

  border: 0;
  border-radius: 12px;

  color: var(--text);

  background: var(--surface);

  box-shadow:
    7px 7px 14px var(--dark-shadow),
    -7px -7px 14px var(--light-shadow);

  cursor: pointer;

  font-size: 0.72rem;
  font-weight: 750;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    color var(--transition),
    background var(--transition);
}

.tooltip__trigger:hover {
  transform: translateY(-2px);

  color: var(--accent);

  box-shadow:
    9px 9px 17px var(--dark-shadow),
    -9px -9px 17px var(--light-shadow);
}

.tooltip__trigger:active {
  transform: translateY(1px);

  box-shadow:
    inset 5px 5px 10px var(--dark-shadow),
    inset -5px -5px 10px var(--light-shadow);
}

.tooltip__trigger:focus-visible {
  outline: 3px solid color-mix(
    in srgb,
    var(--accent) 38%,
    transparent
  );

  outline-offset: 4px;
}

.tooltip__trigger--icon {
  width: 42px;
  padding: 0;

  font-size: 0.95rem;
}

.tooltip__trigger--info {
  width: 38px;
  min-height: 38px;

  padding: 0;

  border-radius: 50%;

  font-size: 0.78rem;
  font-weight: 850;
}

.tooltip__trigger--status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--success);

  box-shadow:
    0 0 9px color-mix(
      in srgb,
      var(--success) 55%,
      transparent
    );
}

.tooltip__content {
  position: absolute;
  z-index: 10;

  left: 50%;

  width: max-content;
  max-width: min(230px, 80vw);

  padding: 11px 13px;

  border: 1px solid var(--border);
  border-radius: 12px;

  color: var(--tooltip-text);

  background: var(--tooltip-bg);

  box-shadow:
    9px 9px 18px var(--dark-shadow),
    -9px -9px 18px var(--light-shadow);

  font-size: 0.66rem;
  font-weight: 650;
  line-height: 1.55;
  text-align: center;

  opacity: 0;
  pointer-events: none;

  transition:
    opacity var(--transition),
    transform var(--transition);
}

.tooltip--top .tooltip__content {
  bottom: calc(100% + 14px);

  transform:
    translate(-50%, 7px)
    scale(0.96);
}

.tooltip--bottom .tooltip__content {
  top: calc(100% + 14px);

  transform:
    translate(-50%, -7px)
    scale(0.96);
}

.tooltip--top .tooltip__content::after,
.tooltip--bottom .tooltip__content::after {
  content: "";

  position: absolute;
  left: 50%;

  width: 12px;
  height: 12px;

  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  background: var(--tooltip-bg);

  transform: translateX(-50%) rotate(45deg);
}

.tooltip--top .tooltip__content::after {
  bottom: -7px;
}

.tooltip--bottom .tooltip__content::after {
  top: -7px;

  transform: translateX(-50%) rotate(225deg);
}

.tooltip:hover .tooltip__content,
.tooltip:focus-within .tooltip__content {
  opacity: 1;
  pointer-events: auto;
}

.tooltip--top:hover .tooltip__content,
.tooltip--top:focus-within .tooltip__content {
  transform:
    translate(-50%, 0)
    scale(1);
}

.tooltip--bottom:hover .tooltip__content,
.tooltip--bottom:focus-within .tooltip__content {
  transform:
    translate(-50%, 0)
    scale(1);
}

.usage-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  margin-top: 18px;
  padding: 25px;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: var(--surface-raised);

  box-shadow:
    12px 12px 25px var(--dark-shadow),
    -12px -12px 25px var(--light-shadow);
}

.usage-card__eyebrow {
  color: var(--accent);

  font-size: 0.62rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.usage-card h2 {
  margin: 6px 0 0;

  font-size: 1rem;
  letter-spacing: -0.025em;
}

.usage-card p {
  max-width: 590px;

  margin: 7px 0 0;

  color: var(--muted);

  font-size: 0.72rem;
  line-height: 1.7;
}

.theme-indicator {
  position: relative;

  width: 72px;
  height: 40px;

  flex: 0 0 auto;

  border-radius: 999px;

  background: var(--surface);

  box-shadow:
    inset 5px 5px 10px var(--dark-shadow),
    inset -5px -5px 10px var(--light-shadow);
}

.theme-indicator span {
  position: absolute;

  top: 50%;

  width: 22px;
  height: 22px;

  border-radius: 50%;

  transform: translateY(-50%);
}

.theme-indicator span:first-child {
  left: 7px;

  background: #ffffff;

  box-shadow:
    0 3px 8px rgba(0, 0, 0, 0.12);
}

.theme-indicator span:last-child {
  right: 7px;

  background: #242a36;

  box-shadow:
    0 3px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 840px) {
  .tooltip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .page {
    padding: 28px 12px;
  }

  .tooltip-grid {
    grid-template-columns: 1fr;
  }

  .demo-card {
    min-height: 170px;
  }

  .usage-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .theme-indicator {
    margin-top: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .demo-card:hover,
  .tooltip__trigger:hover,
  .tooltip__trigger:active {
    transform: none;
  }
}