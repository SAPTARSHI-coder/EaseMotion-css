:root {
  --bg: #f7f9fc;
  --surface: #ffffff;
  --surface-soft: #f9fbff;

  --text: #172033;
  --muted: #6f7b91;
  --subtle: #9aa4b6;

  --primary: #5b67d8;
  --primary-dark: #4854c4;
  --primary-soft: rgba(91, 103, 216, 0.09);

  --success: #23a36f;
  --success-soft: rgba(35, 163, 111, 0.09);

  --line: #e7ebf2;
  --border: #e9edf4;

  --shadow:
    0 10px 30px rgba(26, 36, 58, 0.08),
    0 2px 8px rgba(26, 36, 58, 0.05);

  --shadow-hover:
    0 18px 45px rgba(26, 36, 58, 0.12),
    0 5px 12px rgba(26, 36, 58, 0.06);

  --transition:
    280ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  min-width: 320px;
}

body {
  margin: 0;
  min-height: 100vh;

  color: var(--text);

  background:
    radial-gradient(
      circle at 10% 12%,
      rgba(91, 103, 216, 0.06),
      transparent 28%
    ),
    radial-gradient(
      circle at 90% 85%,
      rgba(35, 163, 111, 0.045),
      transparent 24%
    ),
    var(--bg);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

/* =========================================================
   Page
   ========================================================= */

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 4rem 1rem;
}

.stepper-section {
  width: min(100%, 920px);
}

.heading {
  max-width: 720px;

  margin-bottom: 3rem;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 0.8rem;

  color: var(--primary);

  font-size: 0.65rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

.heading h1 {
  margin: 0;

  font-size:
    clamp(2rem, 5vw, 3.5rem);

  line-height: 1.05;

  letter-spacing: -0.045em;
}

.heading p {
  max-width: 670px;

  margin:
    1rem 0 0;

  color: var(--muted);

  font-size: 0.9rem;

  line-height: 1.8;
}

/* =========================================================
   Stepper
   ========================================================= */

.stepper {
  position: relative;

  display: grid;

  gap: 1.2rem;

  padding-left: 4rem;
}

.stepper::before {
  content: "";

  position: absolute;

  left: 1.12rem;

  top: 1.25rem;
  bottom: 1.25rem;

  width: 2px;

  background:
    linear-gradient(
      to bottom,
      var(--success),
      var(--primary),
      var(--line)
    );

  border-radius: 999px;
}

/* =========================================================
   Step
   ========================================================= */

.step {
  position: relative;

  animation:
    step-enter 520ms ease both;
}

.step:nth-child(1) {
  animation-delay: 60ms;
}

.step:nth-child(2) {
  animation-delay: 120ms;
}

.step:nth-child(3) {
  animation-delay: 180ms;
}

.step:nth-child(4) {
  animation-delay: 240ms;
}

/* =========================================================
   Marker
   ========================================================= */

.step__marker {
  position: absolute;

  left: -3.58rem;
  top: 1.1rem;

  width: 3rem;
  height: 3rem;

  display: grid;
  place-items: center;

  color: var(--subtle);

  background:
    var(--surface);

  border:
    2px solid
    var(--line);

  border-radius: 50%;

  box-shadow:
    0 5px 14px
    rgba(26, 36, 58, 0.08);

  z-index: 2;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.step__marker span {
  font-size: 0.7rem;

  font-weight: 900;
}

.step--complete
  .step__marker {
  color: var(--success);

  border-color:
    rgba(35, 163, 111, 0.25);

  background:
    var(--success-soft);
}

.step--active
  .step__marker {
  color: #ffffff;

  border-color:
    var(--primary);

  background:
    linear-gradient(
      145deg,
      var(--primary),
      var(--primary-dark)
    );

  box-shadow:
    0 0 0 5px
      rgba(91, 103, 216, 0.08),
    0 8px 20px
      rgba(91, 103, 216, 0.25);

  animation:
    active-pulse 2.5s ease-in-out infinite;
}

/* =========================================================
   Floating Card
   ========================================================= */

.step__card {
  position: relative;

  padding:
    1.35rem 1.45rem;

  background:
    linear-gradient(
      145deg,
      var(--surface),
      var(--surface-soft)
    );

  border:
    1px solid
    var(--border);

  border-radius:
    1rem;

  box-shadow:
    var(--shadow);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.step__card::before {
  content: "";

  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  width: 4px;

  background:
    var(--line);

  border-radius:
    1rem 0 0 1rem;
}

.step--complete
  .step__card::before {
  background:
    var(--success);
}

.step--active
  .step__card::before {
  background:
    var(--primary);
}

.step:hover
  .step__card {
  transform:
    translateY(-5px);

  border-color:
    rgba(91, 103, 216, 0.18);

  box-shadow:
    var(--shadow-hover);
}

.step:hover
  .step__marker {
  transform:
    scale(1.08);

  box-shadow:
    0 8px 20px
    rgba(26, 36, 58, 0.11);
}

/* =========================================================
   Header
   ========================================================= */

.step__header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 0.8rem;
}

.step__number {
  color: var(--subtle);

  font-size: 0.6rem;

  font-weight: 800;

  letter-spacing: 0.13em;
}

.step__status {
  padding:
    0.34rem 0.62rem;

  color: var(--subtle);

  background:
    #f2f5f9;

  border:
    1px solid
    var(--border);

  border-radius:
    999px;

  font-size: 0.54rem;

  font-weight: 800;

  letter-spacing: 0.07em;
}

.step--complete
  .step__status {
  color: var(--success);

  background:
    var(--success-soft);

  border-color:
    transparent;
}

.step--active
  .step__status {
  color: var(--primary);

  background:
    var(--primary-soft);

  border-color:
    transparent;
}

/* =========================================================
   Typography
   ========================================================= */

.step__card h2 {
  margin: 0 0 0.65rem;

  font-size:
    clamp(1.15rem, 3vw, 1.6rem);

  line-height: 1.2;

  letter-spacing: -0.025em;
}

.step__card p {
  max-width: 680px;

  margin: 0;

  color: var(--muted);

  font-size: 0.81rem;

  line-height: 1.8;
}

/* =========================================================
   Progress
   ========================================================= */

.step__progress {
  width: 100%;

  height: 5px;

  margin-top: 1rem;

  overflow: hidden;

  background:
    #edf0f5;

  border-radius:
    999px;
}

.step__progress span {
  display: block;

  width: 72%;
  height: 100%;

  background:
    linear-gradient(
      90deg,
      var(--primary-dark),
      var(--primary)
    );

  border-radius:
    inherit;

  box-shadow:
    0 0 10px
    rgba(91, 103, 216, 0.25);

  animation:
    progress-grow 900ms ease both;
}

/* =========================================================
   Animations
   ========================================================= */

@keyframes step-enter {
  from {
    opacity: 0;

    transform:
      translateY(15px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

@keyframes progress-grow {
  from {
    transform:
      scaleX(0);

    transform-origin: left;
  }

  to {
    transform:
      scaleX(1);

    transform-origin: left;
  }
}

@keyframes active-pulse {
  0%,
  100% {
    box-shadow:
      0 0 0 5px
        rgba(91, 103, 216, 0.07),
      0 8px 20px
        rgba(91, 103, 216, 0.22);
  }

  50% {
    box-shadow:
      0 0 0 8px
        rgba(91, 103, 216, 0.1),
      0 10px 25px
        rgba(91, 103, 216, 0.28);
  }
}

/* =========================================================
   Responsive
   ========================================================= */

@media (max-width: 700px) {
  .page {
    padding:
      2.5rem 0.75rem;
  }

  .stepper {
    padding-left: 3rem;
  }

  .stepper::before {
    left: 0.82rem;
  }

  .step__marker {
    left: -2.65rem;

    width: 2.65rem;
    height: 2.65rem;
  }

  .step__card {
    padding:
      1.2rem 1.1rem;
  }

  .step__card p {
    font-size: 0.75rem;
  }
}

@media (max-width: 470px) {
  .stepper {
    padding-left: 2.5rem;
  }

  .stepper::before {
    left: 0.62rem;
  }

  .step__marker {
    left: -2.15rem;

    width: 2.3rem;
    height: 2.3rem;
  }

  .step__marker span {
    font-size: 0.58rem;
  }

  .step__header {
    align-items: flex-start;

    flex-direction: column;

    gap: 0.45rem;
  }

  .step__card {
    padding:
      1rem;
  }

  .step__card p {
    font-size: 0.69rem;
  }
}

/* =========================================================
   Reduced Motion
   ========================================================= */

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