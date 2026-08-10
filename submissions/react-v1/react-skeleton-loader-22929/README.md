# React Animated Loader / Skeleton Screen (#22929)

This submission fulfills Issue **#22929** by delivering a production-quality skeleton screen and loader component using React and EaseMotion CSS.

## Three-Phase Loading Sequence

The component progresses through three distinct phases driven by React state and `setTimeout` (mimicking a real async fetch):

| Phase | Duration | What renders |
|-------|----------|-------------|
| **Spinner** | 0 – 800 ms | `.ease-spin` rotating ring indicating an initial network request |
| **Skeleton** | 800 – 2800 ms | Six `<CardSkeleton>` blocks with `.ease-pulse` shimmer |
| **Loaded** | 2800 ms + | Six `<ContentCard>` components with staggered `.ease-fade-in .ease-slide-up` entry |

A "Replay" button resets the sequence so reviewers can watch all three phases on demand.

## Key Animation Techniques

### 1. `.ease-pulse` Skeleton Shimmer
Each `<SkeletonBlock>` primitive receives the `.ease-pulse` EaseMotion class, producing the universally recognised loading shimmer. Blocks mirror the exact shape of their future real content (avatar circle, text lines, tag chips) so the layout never shifts when data arrives.

### 2. `.ease-spin` Spinner
A plain `<div>` with a half-coloured CSS border becomes a spinner via `.ease-spin` — no SVG animation or external library needed.

### 3. Staggered Content Reveal
Each `<ContentCard>` applies `ease-fade-in ease-slide-up ease-duration-normal` with `animationDelay: index × 120ms`, cascading six cards in over ~720 ms total.

### 4. Layout-Shift-Free Swap
Because the skeleton cards have identical dimensions to the real cards, the grid never reflows when the data phase begins.

## How to View
Double-click `demo.html` — React 18 + Babel loaded via CDN, **no build step required**.
