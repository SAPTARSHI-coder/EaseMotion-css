:root {
  --em-bg: #e7ebf2;
  --em-surface: #e7ebf2;
  --em-text: #263246;
  --em-muted: #748096;

  --em-accent: #6366f1;
  --em-accent-soft: rgba(99, 102, 241, 0.2);
  --em-accent-glow: rgba(99, 102, 241, 0.42);

  --em-light-shadow: #ffffff;
  --em-dark-shadow: #c5cad3;

  --em-radius: 20px;
  --em-transition: 240ms ease;
}

/* Base */

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  min-height: 100%;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--em-text);
  background: var(--em-bg);
}

/* Layout */

.page {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 32px 20px;
}

.component {
  width: min(100%, 540px);
}

/* Main neumorphic card */

.card {
  padding: clamp(28px, 6vw, 48px);
  border-radius: 28px;
  background: var(--em-surface);

  box-shadow:
    18px 18px 40px var(--em-dark-shadow),
    -18px -18px 40px var(--em-light-shadow);

  transition:
    box-shadow var(--em-transition),
    transform var(--em-transition);
}

.card:hover {
  transform: translateY(-2px);
}

/* Header */

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;

  color: var(--em-accent);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}

h1 {
  margin: 0;

  font-size: clamp(1.7rem, 5vw, 2.4rem);
  line-height: 1.1;
}

.intro {
  margin: 14px 0 30px;

  color: var(--em-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Form */

.form {
  display: grid;
  gap: 20px;
}

/* Floating label field */

.field {
  position: relative;
}

.field input {
  width: 100%;
  min-height: 60px;
  padding: 18px 18px 8px;

  border: 1px solid transparent;
  border-radius: var(--em-radius);

  outline: none;

  background: var(--em-surface);
  color: var(--em-text);

  font: inherit;
  font-size: 0.95rem;

  box-shadow:
    inset 7px 7px 15px var(--em-dark-shadow),
    inset -7px -7px 15px var(--em-light-shadow);

  transition:
    color var(--em-transition),
    border-color var(--em-transition),
    box-shadow var(--em-transition),
    transform var(--em-transition);
}

/* Remove browser placeholder */

.field input::placeholder {
  color: transparent;
}

/* Floating label */

.field label {
  position: absolute;
  top: 50%;
  left: 18px;

  color: var(--em-muted);
  font-size: 0.95rem;

  pointer-events: none;

  transform:
    translateY(-50%);

  transform-origin: left center;

  transition:
    color var(--em-transition),
    transform var(--em-transition),
    font-size var(--em-transition),
    background var(--em-transition),
    padding var(--em-transition);
}

/*
 * Float label when focused or when input contains text.
 */

.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  top: 0;

  padding: 0 7px;

  background: var(--em-surface);

  color: var(--em-accent);

  font-size: 0.72rem;
  font-weight: 700;

  transform:
    translateY(-50%);
}

/* Focused neumorphic field */

.field input:focus {
  border-color: rgba(99, 102, 241, 0.28);

  box-shadow:
    inset 4px 4px 10px var(--em-dark-shadow),
    inset -4px -4px 10px var(--em-light-shadow),
    0 0 0 4px var(--em-accent-soft),
    0 0 24px rgba(99, 102, 241, 0.14);

  transform: translateY(-1px);
}

/* Animated glow */

.field-glow {
  position: absolute;
  inset: 0;

  border-radius: var(--em-radius);

  pointer-events: none;

  opacity: 0;

  box-shadow:
    0 0 0 1px var(--em-accent-glow),
    0 0 18px rgba(99, 102, 241, 0.16);

  transition:
    opacity var(--em-transition);
}

.field input:focus ~ .field-glow {
  opacity: 1;
}

/* Hover */

.field:hover input:not(:focus) {
  box-shadow:
    inset 5px 5px 12px var(--em-dark-shadow),
    inset -5px -5px 12px var(--em-light-shadow),
    0 0 0 1px rgba(99, 102, 241, 0.08);
}

/* Button */

button {
  min-height: 52px;
  margin-top: 4px;

  border: 0;
  border-radius: 16px;

  background: var(--em-surface);
  color: var(--em-accent);

  font: inherit;
  font-weight: 800;

  cursor: pointer;

  box-shadow:
    8px 8px 16px var(--em-dark-shadow),
    -8px -8px 16px var(--em-light-shadow);

  transition:
    color var(--em-transition),
    box-shadow var(--em-transition),
    transform var(--em-transition);
}

button:hover {
  color: #4f46e5;

  box-shadow:
    6px 6px 12px var(--em-dark-shadow),
    -6px -6px 12px var(--em-light-shadow),
    0 0 22px rgba(99, 102, 241, 0.16);

  transform: translateY(-2px);
}

button:focus-visible {
  outline: 3px solid var(--em-accent);
  outline-offset: 4px;
}

button:active {
  box-shadow:
    inset 5px 5px 12px var(--em-dark-shadow),
    inset -5px -5px 12px var(--em-light-shadow);

  transform: translateY(1px);
}

/* Helper */

.helper {
  margin: 18px 0 0;

  color: var(--em-muted);
  font-size: 0.75rem;
  text-align: center;
}

/* Responsive */

@media (max-width: 600px) {
  .page {
    padding: 20px 14px;
  }

  .card {
    padding: 28px 20px;
    border-radius: 22px;

    box-shadow:
      12px 12px 28px var(--em-dark-shadow),
      -12px -12px 28px var(--em-light-shadow);
  }

  .intro {
    margin-bottom: 24px;
  }
}

@media (max-width: 380px) {
  .card {
    padding: 24px 16px;
  }

  .field input {
    min-height: 56px;
  }

  button {
    min-height: 50px;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}