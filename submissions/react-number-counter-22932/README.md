# React Animated Number Counter — Count-Up (#22932)

This submission fulfills Issue **#22932** by delivering a production-quality animated count-up component featuring a custom `useCountUp` hook, IntersectionObserver scroll triggering, and EaseMotion CSS card animations.

## Key Techniques

### 1. `useCountUp` Custom Hook
A self-contained React hook that drives the count-up animation:
- Uses `requestAnimationFrame` for silky-smooth 60fps counting with no external dependencies.
- Accepts a configurable `easing` parameter (`easeOut`, `easeIn`, `easeInOut`, `linear`) applied as a mathematical function to the raw time progress `t ∈ [0, 1]`.
- Supports `start`, `end`, `duration`, and `decimals` for flexible integer and float targets.
- Returns `{ value, counting, replay }` — a clean, reusable API for any component.

### 2. IntersectionObserver Trigger
The stat grid is observed at `threshold: 0.1`. Counters only start when the grid enters the viewport — the same pattern used by real hero stats sections on production marketing pages. A "Replay" button resets and re-triggers the sequence for easy review.

### 3. `.ease-pulse` While Counting
The number `<span>` receives `.ease-pulse` + a `drop-shadow` glow while `counting === true`. The moment the rAF loop completes, the pulse class is removed, producing a subtle heartbeat during the count that ceases at the final value.

### 4. Staggered Card Entry
Each `<StatCard>` uses `.ease-slide-up` with `animationDelay: index × 150ms`, giving a cascading reveal of all 6 cards as they enter the viewport together.

### 5. Easing Visualizer (Bonus Section)
A dedicated panel below the stats runs the same rAF engine for 4 different easing curves simultaneously, rendering each as a live progress bar so developers can visually compare how `easeOut` vs `easeIn` vs `easeInOut` vs `linear` feel.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.
