/* =========================================================
   3D Pagination — Neon
   EaseMotion CSS — Issue #79728
   ========================================================= */

:root {
  --bg: #05070d;
  --surface: #0b1019;
  --surface-soft: #111827;

  --text: #f2f7ff;
  --muted: #7f8da3;

  --border: rgba(255, 255, 255, 0.08);

  --neon: #54f5ff;
  --neon-strong: #19dce9;
  --neon-purple: #906bff;

  --neon-soft: rgba(84, 245, 255, 0.12);

  --shadow:
    0 22px 60px rgba(0, 0, 0, 0.55);

  --ease:
    260ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* =========================================================
   Reset
   ========================================================= */

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
      circle at 15% 15%,
      rgba(84, 245, 255, 0.08),
      transparent 25%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(144, 107, 255, 0.1),
      transparent 28%
    ),
    linear-gradient(
      145deg,
      #05070d,
      #0a0e17
    );

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

  padding: 2rem 1rem;
}

.demo {
  width: min(100%, 58rem);

  text-align: center;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 0.8rem;

  color: var(--neon);

  font-size: 0.66rem;

  font-weight: 800;

  letter-spacing: 0.18em;

  text-shadow:
    0 0 14px
    rgba(84, 245, 255, 0.45);
}

.demo h1 {
  margin: 0;

  font-size:
    clamp(2.3rem, 6vw, 4.2rem);

  line-height: 1;

  letter-spacing: -0.055em;
}

.intro {
  max-width: 40rem;

  margin:
    1rem auto 2.8rem;

  color: var(--muted);

  font-size: 0.92rem;

  line-height: 1.8;
}

/* =========================================================
   Pagination Surface
   ========================================================= */

.pagination {
  position: relative;

  width: fit-content;
  max-width: 100%;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.7rem;

  padding:
    1.15rem 1.3rem;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.012)
    );

  border:
    1px solid
    var(--border);

  border-radius: 1.25rem;

  box-shadow:
    var(--shadow),
    inset
    0 1px 0
    rgba(255, 255, 255, 0.04);

  perspective: 1000px;

  isolation: isolate;
}

.pagination::before {
  content: "";

  position: absolute;

  inset: -1px;

  z-index: -1;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      rgba(84, 245, 255, 0),
      rgba(84, 245, 255, 0.15),
      rgba(144, 107, 255, 0.15),
      rgba(84, 245, 255, 0)
    );

  opacity: 0;

  filter: blur(10px);

  transition:
    opacity var(--ease);
}

.pagination:hover::before {
  opacity: 1;
}

/* =========================================================
   Pagination Buttons
   ========================================================= */

.pagination__button {
  position: relative;

  width: 3rem;
  height: 3rem;

  flex: 0 0 3rem;

  display: grid;

  place-items: center;

  color: var(--text);

  background:
    linear-gradient(
      145deg,
      #131c2b,
      #09101a
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.06);

  border-radius: 0.75rem;

  box-shadow:
    0 7px 0
    #050a11,
    0 11px 20px
    rgba(0, 0, 0, 0.28),
    inset
    0 1px 0
    rgba(255, 255, 255, 0.04);

  text-decoration: none;

  font-size: 0.8rem;

  font-weight: 800;

  transition:
    transform var(--ease),
    color var(--ease),
    border-color var(--ease),
    box-shadow var(--ease),
    background var(--ease);
}

.pagination__button::after {
  content: "";

  position: absolute;

  inset: 0;

  border-radius: inherit;

  box-shadow:
    0 0 0
    rgba(84, 245, 255, 0);

  transition:
    box-shadow var(--ease);
}

.pagination__button:hover {
  color: var(--neon);

  border-color:
    rgba(84, 245, 255, 0.38);

  transform:
    translateY(-4px)
    rotateX(7deg);

  box-shadow:
    0 10px 0
    #050a11,
    0 18px 26px
    rgba(0, 0, 0, 0.34),
    inset
    0 1px 0
    rgba(255, 255, 255, 0.06);
}

.pagination__button:hover::after {
  box-shadow:
    0 0 20px
    rgba(84, 245, 255, 0.12);
}

.pagination__button:active {
  transform:
    translateY(3px);

  box-shadow:
    0 3px 0
    #050a11,
    0 7px 14px
    rgba(0, 0, 0, 0.28);
}

/* =========================================================
   Active Button
   ========================================================= */

.pagination__button--active {
  color: #021317;

  background:
    linear-gradient(
      145deg,
      var(--neon),
      var(--neon-strong)
    );

  border-color:
    rgba(84, 245, 255, 0.85);

  box-shadow:
    0 7px 0
    #0a8d97,
    0 0 24px
    rgba(84, 245, 255, 0.26);
}

.pagination__button--active:hover {
  color: #021317;

  border-color:
    var(--neon);

  box-shadow:
    0 10px 0
    #0a8d97,
    0 0 34px
    rgba(84, 245, 255, 0.38);
}

/* =========================================================
   Arrow Buttons
   ========================================================= */

.pagination__button--arrow {
  font-size: 1.4rem;

  line-height: 1;
}

.pagination__button--arrow:hover {
  color: var(--neon);
}

/* =========================================================
   Dots
   ========================================================= */

.pagination__dots {
  display: grid;

  place-items: center;

  width: 2rem;
  height: 3rem;

  color: var(--muted);

  font-size: 0.8rem;

  font-weight: 800;

  letter-spacing: 0.1em;
}

/* =========================================================
   Info
   ========================================================= */

.pagination-info {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.4rem;

  margin-top: 1.5rem;

  color: var(--muted);

  font-size: 0.7rem;
}

.pagination-info strong {
  color: var(--text);

  font-weight: 800;
}

/* =========================================================
   Focus
   ========================================================= */

.pagination__button:focus-visible {
  outline:
    3px solid
    rgba(84, 245, 255, 0.4);

  outline-offset: 4px;
}

/* =========================================================
   Responsive
   ========================================================= */

@media (max-width: 680px) {
  .page {
    padding:
      1.5rem 0.75rem;
  }

  .demo {
    text-align: left;
  }

  .intro {
    margin-left: 0;
    margin-right: 0;
  }

  .pagination {
    width: 100%;

    overflow-x: auto;

    justify-content: flex-start;

    padding: 1rem;

    scrollbar-width: thin;
  }

  .pagination__button {
    width: 2.7rem;
    height: 2.7rem;

    flex-basis: 2.7rem;
  }

  .pagination__dots {
    height: 2.7rem;
  }

  .pagination-info {
    justify-content: flex-start;

    flex-wrap: wrap;
  }
}

@media (max-width: 420px) {
  .pagination {
    gap: 0.45rem;
  }

  .pagination__button {
    width: 2.45rem;
    height: 2.45rem;

    flex-basis: 2.45rem;

    border-radius: 0.65rem;

    font-size: 0.72rem;

    box-shadow:
      0 5px 0
      #050a11,
      0 8px 15px
      rgba(0, 0, 0, 0.25);
  }

  .pagination__dots {
    width: 1.3rem;

    font-size: 0.7rem;
  }

  .pagination-info {
    font-size: 0.62rem;
  }
}

/* =========================================================
   Reduced Motion
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;

    animation-duration: 0.01ms !important;

    scroll-behavior: auto !important;
  }
}