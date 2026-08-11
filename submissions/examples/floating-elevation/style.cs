:root {
  --background: #070b14;
  --surface: #101827;
  --surface-light: #172235;

  --primary: #60a5fa;
  --primary-light: #93c5fd;
  --secondary: #a78bfa;

  --text: #f8fafc;
  --muted: #9ca8ba;

  --border: rgba(148, 163, 184, 0.2);

  --shadow-color: rgba(0, 0, 0, 0.55);
}


/* =========================
   RESET
========================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;

  min-height: 100vh;

  color: var(--text);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(96, 165, 250, 0.12),
      transparent 32%
    ),
    radial-gradient(
      circle at 80% 75%,
      rgba(167, 139, 250, 0.1),
      transparent 35%
    ),
    var(--background);
}


/* =========================
   DEMO
========================= */

.demo {
  min-height: 100vh;

  display: grid;

  place-items: center;

  padding: 24px;
}

.intro {
  width: min(720px, 100%);

  text-align: center;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 20px;

  color: var(--primary-light);

  font-size: 0.72rem;

  font-weight: 800;

  letter-spacing: 0.25em;
}

.intro h1 {
  margin: 0;

  font-size: clamp(3rem, 8vw, 6.5rem);

  line-height: 0.95;

  background:
    linear-gradient(
      135deg,
      #ffffff,
      var(--primary-light),
      var(--secondary)
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.intro p {
  max-width: 590px;

  margin: 28px auto 36px;

  color: var(--muted);

  line-height: 1.75;
}


/* =========================
   OPEN BUTTON
========================= */

.open-modal {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 50px;

  padding: 0 30px;

  border: 1px solid rgba(96, 165, 250, 0.35);

  border-radius: 10px;

  color: var(--text);

  background:
    linear-gradient(
      180deg,
      rgba(96, 165, 250, 0.12),
      rgba(96, 165, 250, 0.04)
    );

  text-decoration: none;

  font-weight: 700;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.25);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.open-modal:hover {
  transform: translateY(-4px);

  border-color:
    rgba(96, 165, 250, 0.65);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4);
}

.open-modal:focus-visible {
  outline: 3px solid rgba(96, 165, 250, 0.5);

  outline-offset: 4px;
}


/* =========================
   MODAL
========================= */

.modal {
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: grid;

  place-items: center;

  padding: 24px;

  visibility: hidden;

  opacity: 0;

  transition:
    opacity 0.35s ease,
    visibility 0s linear 0.35s;
}

.modal:target {
  visibility: visible;

  opacity: 1;

  transition:
    opacity 0.35s ease,
    visibility 0s linear 0s;
}


/* =========================
   OVERLAY
========================= */

.modal-overlay {
  position: absolute;

  inset: 0;

  background:
    rgba(2, 6, 23, 0.82);

  backdrop-filter: blur(9px);

  -webkit-backdrop-filter: blur(9px);
}


/* =========================
   MODAL DIALOG
========================= */

.modal-dialog {
  position: relative;

  z-index: 2;

  width: min(560px, 100%);

  min-height: 400px;

  padding: 38px;

  isolation: isolate;

  overflow: visible;

  border: 1px solid var(--border);

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(23, 34, 53, 0.98),
      rgba(10, 16, 28, 0.98)
    );

  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.25),
    0 30px 70px rgba(0, 0, 0, 0.45),
    0 60px 120px rgba(0, 0, 0, 0.35);

  transform:
    translateY(90px)
    scale(0.92);

  opacity: 0;

  transition:
    transform 0.65s cubic-bezier(
      0.16,
      1,
      0.3,
      1
    ),
    opacity 0.4s ease;

  will-change:
    transform,
    opacity;
}

.modal:target .modal-dialog {
  transform:
    translateY(0)
    scale(1);

  opacity: 1;

  animation:
    floating-idle 4s ease-in-out 0.7s infinite;
}


/* =========================
   FLOATING LAYERS
========================= */

.elevation-layer {
  position: absolute;

  inset: 0;

  border-radius: inherit;

  pointer-events: none;

  z-index: -1;

  border: 1px solid rgba(96, 165, 250, 0.08);
}


/* Back layer */

.layer-one {
  transform:
    translateY(18px)
    scale(0.96);

  background:
    rgba(15, 23, 42, 0.65);

  box-shadow:
    0 25px 40px rgba(0, 0, 0, 0.35);
}


/* Second layer */

.layer-two {
  transform:
    translateY(9px)
    scale(0.98);

  background:
    rgba(30, 41, 59, 0.55);

  box-shadow:
    0 15px 30px rgba(0, 0, 0, 0.3);
}


/* =========================
   GLOW
========================= */

.elevation-glow {
  position: absolute;

  left: 10%;

  right: 10%;

  bottom: -30px;

  height: 60px;

  z-index: -2;

  border-radius: 50%;

  background:
    radial-gradient(
      ellipse,
      rgba(96, 165, 250, 0.25),
      transparent 70%
    );

  filter: blur(15px);

  opacity: 0.8;

  animation:
    glow-float 4s ease-in-out infinite;
}


/* =========================
   FLOATING ANIMATION
========================= */

@keyframes floating-idle {

  0%,
  100% {
    transform:
      translateY(0)
      scale(1);
  }

  50% {
    transform:
      translateY(-7px)
      scale(1.002);
  }
}


@keyframes glow-float {

  0%,
  100% {
    transform:
      scaleX(1)
      translateY(0);

    opacity: 0.65;
  }

  50% {
    transform:
      scaleX(0.85)
      translateY(5px);

    opacity: 0.9;
  }
}


/* =========================
   HEADER
========================= */

.modal-header {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 55px;
}

.modal-indicator {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 7px 12px;

  border: 1px solid rgba(96, 165, 250, 0.2);

  border-radius: 999px;

  color: var(--primary-light);

  background:
    rgba(96, 165, 250, 0.05);

  font-size: 0.65rem;

  font-weight: 800;

  letter-spacing: 0.12em;
}

.modal-indicator span {
  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: var(--primary);

  box-shadow:
    0 0 10px rgba(96, 165, 250, 0.8);

  animation:
    status-pulse 2s ease-in-out infinite;
}

@keyframes status-pulse {

  0%,
  100% {
    opacity: 0.5;

    transform: scale(0.8);
  }

  50% {
    opacity: 1;

    transform: scale(1.2);
  }
}


/* =========================
   CLOSE BUTTON
========================= */

.close-modal {
  width: 40px;

  height: 40px;

  display: grid;

  place-items: center;

  border: 1px solid rgba(148, 163, 184, 0.2);

  border-radius: 50%;

  color: var(--muted);

  background:
    rgba(255, 255, 255, 0.025);

  text-decoration: none;

  font-size: 1.5rem;

  transition:
    transform 0.25s ease,
    color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.close-modal:hover {
  color: white;

  background:
    rgba(96, 165, 250, 0.1);

  transform:
    translateY(-2px)
    rotate(90deg);

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.35);
}

.close-modal:focus-visible {
  outline: 3px solid rgba(96, 165, 250, 0.5);

  outline-offset: 4px;
}


/* =========================
   CONTENT
========================= */

.modal-content {
  position: relative;

  z-index: 5;
}

.modal-label {
  display: block;

  margin-bottom: 14px;

  color: var(--primary-light);

  font-size: 0.7rem;

  font-weight: 800;

  letter-spacing: 0.2em;
}

.modal-content h2 {
  margin: 0 0 20px;

  font-size: clamp(2.2rem, 6vw, 3.7rem);

  line-height: 1;

  letter-spacing: -0.04em;

  color: white;

  text-shadow:
    0 5px 25px rgba(0, 0, 0, 0.35);
}

.modal-content p {
  margin: 0;

  color: var(--muted);

  line-height: 1.75;
}


/* =========================
   STATUS
========================= */

.elevation-status {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  margin-top: 25px;

  padding: 8px 12px;

  border: 1px solid rgba(148, 163, 184, 0.14);

  border-radius: 8px;

  color: #a7f3d0;

  background:
    rgba(16, 185, 129, 0.05);

  font-size: 0.75rem;
}

.status-dot {
  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #34d399;

  box-shadow:
    0 0 10px rgba(52, 211, 153, 0.7);
}


/* =========================
   ACTIONS
========================= */

.modal-actions {
  display: flex;

  gap: 12px;

  margin-top: 30px;
}

.button {
  flex: 1;

  min-height: 46px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  border-radius: 9px;

  text-decoration: none;

  font-weight: 700;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.button:hover {
  transform:
    translateY(-3px);
}

.button:focus-visible {
  outline: 3px solid rgba(96, 165, 250, 0.5);

  outline-offset: 4px;
}

.button.primary {
  color: #07111f;

  background:
    linear-gradient(
      135deg,
      var(--primary-light),
      var(--primary)
    );

  box-shadow:
    0 8px 25px rgba(96, 165, 250, 0.2);
}

.button.primary:hover {
  box-shadow:
    0 14px 35px rgba(96, 165, 250, 0.3);
}

.button.secondary {
  color: var(--text);

  border: 1px solid rgba(148, 163, 184, 0.2);

  background:
    rgba(255, 255, 255, 0.025);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {

  .demo {
    padding: 16px;
  }

  .modal {
    padding: 16px;
  }

  .modal-dialog {
    min-height: 420px;

    padding: 28px 22px;

    border-radius: 17px;
  }

  .modal-header {
    margin-bottom: 45px;
  }

  .modal-actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .layer-one {
    transform:
      translateY(12px)
      scale(0.96);
  }

  .layer-two {
    transform:
      translateY(6px)
      scale(0.98);
  }
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;

    scroll-behavior: auto !important;
  }
}