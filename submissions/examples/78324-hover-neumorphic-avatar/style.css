:root {
  --bg: #e9edf3;
  --surface: #e9edf3;

  --text: #333a46;
  --muted: #788190;

  --pink: #eab7c7;
  --pink-dark: #c9829a;

  --blue: #b7d5eb;
  --blue-dark: #75a6ca;

  --lavender: #d1c5e7;
  --lavender-dark: #9984c1;

  --green: #b9dcc6;
  --green-dark: #6eaa84;

  --white: #ffffff;

  --radius: 26px;

  --raised:
    14px 14px 28px rgba(163, 170, 183, 0.48),
    -14px -14px 28px rgba(255, 255, 255, 0.85);

  --raised-small:
    8px 8px 18px rgba(163, 170, 183, 0.42),
    -8px -8px 18px rgba(255, 255, 255, 0.82);

  --pressed:
    inset 7px 7px 15px rgba(163, 170, 183, 0.45),
    inset -7px -7px 15px rgba(255, 255, 255, 0.8);

  --transition: 260ms ease;
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

button,
a {
  font: inherit;
}

.page {
  min-height: 100svh;

  display: grid;
  place-items: center;

  padding: 50px 20px;
}

.avatar-section {
  width: min(1080px, 100%);

  text-align: center;
}

.section-label {
  display: inline-block;

  padding: 8px 14px;

  border-radius: 999px;

  background: var(--surface);

  box-shadow: var(--raised-small);

  color: var(--muted);

  font-size: 0.65rem;
  font-weight: 800;

  letter-spacing: 0.16em;
}

.avatar-section h1 {
  margin-top: 22px;

  font-size: clamp(2.1rem, 5vw, 4rem);
  font-weight: 850;

  line-height: 1;

  letter-spacing: -0.055em;
}

.section-description {
  width: min(560px, 100%);

  margin: 18px auto 0;

  color: var(--muted);

  font-size: 0.95rem;
  line-height: 1.7;
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 30px;

  margin-top: 60px;
}

.avatar-card {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 34px 24px 26px;

  border-radius: var(--radius);

  background: var(--surface);

  box-shadow: var(--raised);

  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.avatar-card:hover {
  transform: translateY(-7px);

  box-shadow:
    18px 18px 34px rgba(163, 170, 183, 0.52),
    -18px -18px 34px rgba(255, 255, 255, 0.9);
}

/* Avatar */

.avatar {
  position: relative;

  width: 118px;
  height: 118px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  box-shadow:
    10px 10px 20px rgba(163, 170, 183, 0.46),
    -10px -10px 20px rgba(255, 255, 255, 0.9);

  transition:
    width var(--transition),
    height var(--transition),
    border-radius var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.avatar::before {
  content: "";

  position: absolute;

  inset: 8px;

  border-radius: inherit;

  border: 1px solid rgba(255, 255, 255, 0.5);

  opacity: 0.75;

  transition:
    inset var(--transition),
    border-radius var(--transition),
    opacity var(--transition);
}

.avatar__initials {
  position: relative;
  z-index: 1;

  font-size: 2.3rem;
  font-weight: 850;

  color: rgba(51, 58, 70, 0.72);

  transition:
    transform var(--transition),
    font-size var(--transition);
}

.avatar__status {
  position: absolute;

  right: 4px;
  bottom: 7px;

  width: 23px;
  height: 23px;

  border: 4px solid var(--surface);

  border-radius: 50%;

  background: var(--green-dark);

  box-shadow: 3px 3px 8px rgba(163, 170, 183, 0.4);
}

/* Neumorphic color variants */

.avatar--pink {
  background:
    linear-gradient(
      145deg,
      #f6cad7,
      var(--pink)
    );
}

.avatar--blue {
  background:
    linear-gradient(
      145deg,
      #d1e7f5,
      var(--blue)
    );
}

.avatar--lavender {
  background:
    linear-gradient(
      145deg,
      #e7ddf3,
      var(--lavender)
    );
}

/* Interactive avatar effect */

.avatar-card:hover .avatar {
  width: 132px;
  height: 132px;

  border-radius: 34%;

  transform: rotate(-3deg);

  box-shadow: var(--pressed);
}

.avatar-card:hover .avatar::before {
  inset: 12px;

  border-radius: 25%;

  opacity: 0.95;
}

.avatar-card:hover .avatar__initials {
  transform: scale(1.08) rotate(3deg);

  font-size: 2.5rem;
}

/* Content */

.avatar-card__info {
  margin-top: 28px;
}

.avatar-card__info h2 {
  font-size: 1.1rem;
  font-weight: 800;

  letter-spacing: -0.02em;
}

.avatar-card__info p {
  margin-top: 6px;

  color: var(--muted);

  font-size: 0.78rem;
}

.avatar-card__meta {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;
  padding-top: 17px;

  border-top: 1px solid rgba(120, 129, 144, 0.13);

  color: var(--muted);

  font-size: 0.67rem;
  font-weight: 650;
}

.avatar-card__meta span:first-child {
  color: var(--green-dark);
}

/* Bottom note */

.avatar-note {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 42px;

  padding: 12px 18px;

  border-radius: 999px;

  background: var(--surface);

  box-shadow: var(--pressed);

  color: var(--muted);

  font-size: 0.68rem;
  font-weight: 650;
}

.avatar-note__dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--green-dark);

  box-shadow: 0 0 0 5px rgba(110, 170, 132, 0.12);
}

/* Accessibility */

.avatar-card:focus-within {
  outline: 3px solid var(--blue-dark);
  outline-offset: 5px;
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

/* Tablet */

@media (max-width: 850px) {
  .avatar-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile */

@media (max-width: 580px) {
  .page {
    padding: 35px 16px;
  }

  .avatar-grid {
    grid-template-columns: 1fr;

    gap: 24px;

    margin-top: 42px;
  }

  .avatar-card {
    max-width: 360px;

    width: 100%;

    margin: 0 auto;
  }

  .avatar-note {
    max-width: 100%;

    text-align: left;

    line-height: 1.5;
  }
}

/* Small mobile */

@media (max-width: 380px) {
  .avatar-section h1 {
    font-size: 2rem;
  }

  .section-description {
    font-size: 0.84rem;
  }

  .avatar {
    width: 105px;
    height: 105px;
  }

  .avatar-card:hover .avatar {
    width: 116px;
    height: 116px;
  }
}