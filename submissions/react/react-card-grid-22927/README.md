# React Animated Card Grid with Staggered Entry (#22927)

This submission fulfills Issue **#22927** by delivering a production-ready animated card grid component using React, `IntersectionObserver`, and the EaseMotion CSS framework.

## Key Animation Techniques

### 1. Scroll-Triggered Stagger via IntersectionObserver
A single `IntersectionObserver` watches the grid container. The moment it intersects the viewport (at 5 % threshold), React flips a `visible` boolean to `true`. Each `<AnimatedCard>` conditionally applies `.ease-slide-up .ease-duration-normal` only while `visible === true`, so no cards animate off-screen and waste CPU.

### 2. Mathematically Computed Delays
Every card receives an inline `animation-delay` of `staggerIndex × 100ms`. With 12 cards the last entry triggers at `1100ms`, creating a smooth waterfall cascade entirely driven by CSS — no JavaScript timers needed.

### 3. Filter-Driven Stagger Replay
Clicking a filter pill instantly resets `visible` to `false` and bumps a `triggerKey` (forcing a grid remount), then a double `requestAnimationFrame` flips `visible` back to `true`. The result: every filter switch replays the full stagger on the new card subset, making the UI feel genuinely alive.

### 4. Interactive Hover Polish
`.ease-hover-scale` and `.ease-hover-glow` are applied to every card, providing satisfying micro-feedback without a single line of JS event handling.

## How to View
Double-click `demo.html` directly in your file system. React 18 + Babel are loaded via CDN — **no build step or Node server needed**.
