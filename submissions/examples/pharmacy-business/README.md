## EaseMotion CSS Showcase — Independent Community Pharmacy
A production-ready, zero-build single-page web application designed for community healthcare providers. This project demonstrates how to orchestrate clean layouts, component hierarchies, and interactive micro-motions using EaseMotion CSS core utility classes alongside semantic HTML.

## 🚀 Key Features
Zero Build Step: Native HTML and CSS architecture that executes directly in the browser. No node modules, preprocessors, or bundlers required.

Trustworthy Healthcare Aesthetic: Styled with a carefully selected, clean palette centered around clinical teals, emerald accents, and slate neutrals.

Fluid Responsive Grid: Built using pure CSS Grid and Flexbox mechanics to guarantee smooth layouts across mobile viewports, tablets, and desktop displays.

Declarative Motion Engine: Utilizes isolated transition patterns to keep layout logic clean and performance-optimized.

## 🎯 EaseMotion Class Registry
The following ease-\* classes are bundled within the template's style architecture and can be repurposed across other UI views:

1. Entrance Animations
   These classes manage how elements arrive in the viewport when the document finishes parsing.

ease-fade-in — Transitions an element's opacity smoothly from 0 to 1 over 0.8s.

ease-slide-up — Rises gently from a translateY(30px) offset down to origin, drawing the user's eye down the page hierarchy.

ease-slide-down — Drops a component cleanly into place from a translateY(-30px) ceiling. (Used to anchor the sticky navigation bar).

ease-slide-right — Sweeps content horizontally outward from the left margin (translateX(-40px)). (Used on the Contact Information card).

ease-slide-left — Sweeps content horizontally inward from the right margin (translateX(40px)). (Used on the Operational Hours table).

ease-scale-in — Pops focal items into view using a subtle elastic trajectory (scale(0.95) up to 1). (Used on the Hero graphic and Consultation panel).

2. Time Staggering & Orchestration
   Use these structural delays to build structured visual hierarchies and prevent layout clutter:

ease-delay-1 — Delays animation ignition by 0.15s.

ease-delay-2 — Delays animation ignition by 0.30s.

ease-delay-3 — Delays animation ignition by 0.45s.

ease-delay-4 — Delays animation ignition by 0.60s.

3. Continuous Micro-interactions
   ease-pulse-soft — An infinite looping keyframe that oscillates an element's scale between 1 and 1.02 every 3s. Ideal for live indicators, notifications, and status badges.

4. Interactive Hover Modifiers
   ease-hover-grow — Elevates elements on the vertical axis while projecting an expansive soft box-shadow overlay to simulate material depth.

ease-hover-glow — Swaps border pigments to clinical teal (#0d9488) while generating an atmospheric perimeter drop-shadow to signal interactive cards.

ease-hover-lift — Provides a crisp, snappy layout elevation offset (translateY(-2px)) tuned explicitly for text links and buttons.
