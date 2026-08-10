/* ==============================================================
   EaseMotion – Animated Progress Bars
   --------------------------------------------------------------
   Pure‑CSS, GPU‑accelerated animations (transform / opacity)
   ============================================================== */

/* -------------------- Global page styling -------------------- */
body {
  margin: 0;
  padding: 3rem 1rem;
  background: #f9fafb;
  font-family: 'Inter', system-ui, sans-serif;
  color: #222;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
h1 { text-align: center; margin-bottom: 2rem; font-size: 2.2rem; }
section { margin-bottom: 3rem; }
h2 { margin-bottom: .6rem; font-size: 1.2rem; color: #555; }

/* -------------------- Core container -------------------- */
.progress-container {
  width: 100%;
  height: 20px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

/* -------------------- Base bar (filled part) -------------------- */
.progress-bar {
  height: 100%;
  width: 0;                                 /* overridden by CSS var */
  background: #6366f1;                     /* default primary colour */
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: .5rem;
  color: #fff;
  font-weight: 600;
  font-size: .9rem;
  white-space: nowrap;
  overflow: hidden;
  animation: fillBar 2s forwards;          /* fill animation */
}

/* Show the % text via pseudo‑element – keeps markup clean */
.progress-bar::after { content: attr(data-progress); }

/* -------------------------------------------------
   VARIATIONS
   ------------------------------------------------- */

/* ▸ Striped bar – animated diagonal stripes */
.striped .progress-bar {
  background-image: repeating-linear-gradient(
    45deg,
    #6366f1,
    #6366f1 10px,
    #4f46e5 10px,
    #4f46e5 20px
  );
  background-size: 20px 20px;
  animation: stripe 1.5s linear infinite, fillBar 2s forwards;
}

/* Stripe movement */
@keyframes stripe {
  from { background-position: 0 0; }
  to   { background-position: 20px 0; }
}

/* ▸ Gradient bar – colourful sweep */
.multicolor .progress-bar {
  background: linear-gradient(90deg,
    #6366f1,
    #f59e0b,
    #10b981,
    #3b82f6);
  background-size: 400% 100%;
  animation: gradient 3s linear infinite, fillBar 2s forwards;
}

/* Gradient sweep */
@keyframes gradient {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* -------------------------------------------------
   FILL ANIMATION – driven by a CSS custom property
   ------------------------------------------------- */

/* Map each data‑progress value to a CSS variable */
[data-progress="70%"] { --progress: 70; }
[data-progress="85%"] { --progress: 85; }
[data-progress="60%"] { --progress: 60; }

/* Apply the variable to the width of the bar */
.progress-bar {
  width: var(--progress, 0%) !important;
}

/* Grow from 0 → final width */
@keyframes fillBar {
  from { width: 0; }
  to   { width: var(--progress, 0)%;}
}