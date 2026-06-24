# ease-scroll-* — scroll-driven animation utilities

Core utility classes that use CSS `scroll-timeline` and `view-timeline` to create scroll-driven animations. Requires Chrome 115+.

| class | effect |
|-------|--------|
| `.fd` | fade in + slide up 20px on entry |
| `.sd` | slide in from right 24px on entry |
| `.sr` | slide in from left 24px on entry |
| `.zm` | scale from 0.85 to 1 on entry |

Plus `.pbar` for a fixed scroll progress bar at the top of the page.

Dark/light mode via `prefers-color-scheme`. Reduced motion and unsupported browser fallback included.
