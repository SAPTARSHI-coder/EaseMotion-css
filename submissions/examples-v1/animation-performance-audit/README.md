# Animation Performance Audit

## Test Setup
- 120 simultaneously animated elements
- Animation: blur + translateX entrance with staggered 0.03s delays
- Browser: Chrome
- Tool: Chrome DevTools Performance tab

## Results
| Metric | Value |
|--------|-------|
| Scripting | 543ms |
| Rendering | 414ms |
| Painting | 231ms |
| Total duration | 7.5s |
| Frame drops | Yes (minor, visible in Frames row) |

## Findings
Minor frame drops occur at 120 simultaneous animated elements.
Heavy scripting cost observed during stagger sequence.

## Recommendation
Keep simultaneous EaseMotion animations under 100 for consistent 60fps.
Use staggered delays (0.03s+) to spread GPU load.