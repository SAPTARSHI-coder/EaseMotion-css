:root {
  --bg-primary: #06080d;
  --bg-secondary: #0b1018;

  --surface: rgba(255, 255, 255, 0.045);
  --surface-hover: rgba(255, 255, 255, 0.075);
  --surface-active: rgba(99, 102, 241, 0.13);

  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.16);

  --text-primary: #f5f7fb;
  --text-secondary: #9da9b9;
  --text-muted: #6d7888;

  --accent: #8b5cf6;
  --accent-light: #a78bfa;
  --accent-cyan: #67e8f9;

  --success: #34d399;

  --shadow: rgba(0, 0, 0, 0.42);

  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;

  --ease: 260ms cubic-bezier(0.22, 1, 0.36, 1);
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

  color: var(--text-primary);

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(139, 92, 246, 0.12),
      transparent 28%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(103, 232, 249, 0.08),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      var(--bg-primary),
      var(--bg-secondary)
    );
}

button {
  font: inherit;
}

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 24px;
}

.showcase {
  position: relative;

  width: min(1100px, 100%);
  min-height: min(720px, calc(100vh - 48px));

  display: grid;
  place-items: center;

  padding: clamp(28px, 6vw, 72px);

  overflow: hidden;

  border: 1px solid var(--border);
  border-radius: var(--radius-xl);

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.018)
    );

  box-shadow:
    0 30px 70px var(--shadow),
    inset 1px 1px 0 rgba(255, 255, 255, 0.08);

  isolation: isolate;
}

.content {
  position: relative;
  z-index: 2;

  width: min(860px, 100%);

  text-align: center;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 14px;

  color: var(--accent-light);

  font-size: 0.7rem;
  font-weight: 800;

  letter-spacing: 0.24em;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.8rem);

  line-height: 1;

  letter-spacing: -0.05em;

  background:
    linear-gradient(
      110deg,
      #ffffff,
      #d8d5ff 52%,
      #9ef5ff
    );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro {
  width: min(650px, 100%);

  margin: 22px auto 36px;

  color: var(--text-secondary);

  font-size: clamp(0.95rem, 2vw, 1.08rem);

  line-height: 1.75;
}

/* Tab container */

.tab-shell {
  width: min(820px, 100%);

  margin-inline: auto;

  padding: 8px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background:
    rgba(255, 255, 255, 0.03);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 45px rgba(0, 0, 0, 0.22);
}

.tabs {
  display: flex;
  align-items: stretch;

  gap: 6px;
}

.tab {
  position: relative;

  flex: 1 1 0;

  min-height: 58px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  padding: 12px 18px;

  border: 1px solid transparent;
  border-radius: var(--radius-md);

  color: var(--text-secondary);

  background:
    rgba(255, 255, 255, 0.025);

  cursor: pointer;

  font-size: 0.92rem;
  font-weight: 750;

  transition:
    color var(--ease),
    background var(--ease),
    border-color var(--ease),
    transform var(--ease),
    box-shadow var(--ease);
}

.tab:hover {
  color: var(--text-primary);

  background:
    var(--surface-hover);

  border-color: var(--border);

  transform: translateY(-2px);

  box-shadow:
    0 10px 22px rgba(0, 0, 0, 0.15);
}

.tab:focus-visible {
  outline: 3px solid rgba(103, 232, 249, 0.22);
  outline-offset: 3px;
}

.tab.active {
  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.19),
      rgba(103, 232, 249, 0.08)
    );

  border-color:
    rgba(167, 139, 250, 0.22);

  box-shadow:
    0 0 24px rgba(139, 92, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.tab.active::after {
  content: "";

  position: absolute;

  left: 22%;
  right: 22%;
  bottom: -8px;

  height: 2px;

  border-radius: 999px;

  background:
    linear-gradient(
      90deg,
      var(--accent),
      var(--accent-cyan)
    );

  box-shadow:
    0 0 12px rgba(139, 92, 246, 0.65),
    0 0 20px rgba(103, 232, 249, 0.28);
}

.tab-icon {
  display: inline-grid;
  place-items: center;

  width: 22px;
  min-width: 22px;
  height: 22px;

  color: var(--accent-light);

  font-size: 0.85rem;

  transition:
    transform var(--ease),
    color var(--ease);
}

.tab:hover .tab-icon,
.tab.active .tab-icon {
  color: var(--accent-cyan);

  transform: translateY(-1px) scale(1.06);
}

/* Preview */

.preview-card {
  width: min(820px, 100%);

  margin: 24px auto 0;

  padding: clamp(20px, 4vw, 30px);

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.018)
    );

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0 rgba(255, 255, 255, 0.05);

  text-align: left;
}

.preview-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;
}

.preview-label {
  color: var(--text-muted);

  font-size: 0.68rem;
  font-weight: 800;

  letter-spacing: 0.16em;
}

.preview-top h2 {
  margin-top: 6px;

  font-size: clamp(1.35rem, 3vw, 1.8rem);
}

.status {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding: 8px 12px;

  border: 1px solid rgba(52, 211, 153, 0.18);
  border-radius: 999px;

  color: #c8f8e6;

  background:
    rgba(52, 211, 153, 0.07);

  font-size: 0.76rem;
  font-weight: 750;
}

.status-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: var(--success);

  box-shadow:
    0 0 10px rgba(52, 211, 153, 0.7);
}

.stats {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 12px;

  margin-top: 24px;
}

.stat {
  padding: 18px;

  border: 1px solid var(--border);
  border-radius: 14px;

  background:
    rgba(255, 255, 255, 0.025);
}

.stat-label {
  display: block;

  color: var(--text-muted);

  font-size: 0.72rem;
  font-weight: 700;
}

.stat strong {
  display: block;

  margin-top: 8px;

  font-size: clamp(1.35rem, 3vw, 1.8rem);
}

.stat small {
  display: inline-block;

  margin-top: 5px;

  color: var(--success);

  font-size: 0.75rem;
  font-weight: 750;
}

/* Ambient effects */

.ambient {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(18px);

  z-index: -1;
}

.ambient-one {
  width: 320px;
  height: 320px;

  top: -140px;
  left: -110px;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.2),
      transparent 68%
    );
}

.ambient-two {
  width: 380px;
  height: 380px;

  right: -150px;
  bottom: -150px;

  background:
    radial-gradient(
      circle,
      rgba(103, 232, 249, 0.13),
      transparent 68%
    );
}

/* Responsive */

@media (max-width: 700px) {
  .page {
    padding: 12px;
  }

  .showcase {
    min-height: calc(100vh - 24px);

    padding: 32px 18px;

    border-radius: 22px;
  }

  .tab-shell {
    overflow-x: auto;
  }

  .tabs {
    min-width: 600px;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .preview-top {
    align-items: flex-start;

    flex-direction: column;
  }

  .status {
    align-self: flex-start;
  }

  .intro {
    margin-bottom: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation: none !important;
    transition: none !important;
  }
}