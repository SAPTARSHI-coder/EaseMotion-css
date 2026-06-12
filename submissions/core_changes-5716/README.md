# Issue #5716: Cheatsheet documents ~40+ non-existent CSS classes

## Description
`docs/cheatsheet.html` lists 93 CSS classes, but only 42 exist in the framework. The remaining 51 classes are not defined anywhere in `core/` or `components/`.

## Root Cause
The cheatsheet was written as a roadmap/design document rather than reflecting the actual implemented classes. Many classes were planned but never built.

## Proposed Fix
Audit `docs/cheatsheet.html` and remove or comment out non-existent classes. Below is the full audit.

## Full Audit Results

### Missing Layout (1)
| Class | Notes |
|-------|-------|
| `ease-row` | Not defined anywhere |

### Missing Entrance (2)
| Class | Notes |
|-------|-------|
| `ease-slide-left` | Not in core |
| `ease-slide-right` | Not in core |

### Missing Hover (2)
| Class | Notes |
|-------|-------|
| `ease-hover-dim` | Not in core |
| `ease-hover-bright` | Not found anywhere in codebase |

### Missing Animation (25)
| Class | Notes |
|-------|-------|
| `ease-spin` | Not in core |
| `ease-shake-subtle` | Not in core |
| `ease-shake-hard` | Not found anywhere |
| `ease-float-shadow` | Not found anywhere |
| `ease-neon`, `ease-neon-border` | Not in core |
| `ease-neon-pink/blue/green/purple` | Not in core |
| `ease-glitch`, `ease-glitch-loop` | Not in core |
| `ease-marquee-pause` | Actual class is `ease-marquee-pause-on-hover` |
| `ease-reveal-fade` | Not in core |
| `ease-reveal-zoom` | Not in core |
| `ease-blur-in`, `ease-blur-in-light/heavy/loop` | Not in core |
| `ease-spotlight`, `ease-spotlight-blue/purple/warm` | Not in core |

### Missing Utility (20)
| Class | Notes |
|-------|-------|
| `ease-tilt-container`, `ease-tilt`, `ease-tilt-left/right/up/down/subtle/hard` | Not in core |
| `ease-cursor-crosshair/grab/none` | Only `pointer`, `default`, `not-allowed` exist |
| `ease-cursor-grow/lift/press` | Not in core |
| `ease-progress`, `ease-progress-fill/striped` | Not in core |
| `ease-accordion`, `ease-accordion-bordered/flush` | Not in core |

### Correct Categories (all classes exist)
- **Button** (8/8): all exist
- **Card** (6/6): all exist
- **Layout** (5/6): `ease-row` missing
- **Entrance** (8/10): `ease-slide-left/right` missing

## Files
- `README.md` — this audit document
- `demo.html` — summary table visualization
- `style.css` — placeholder for cheatsheet fix

## Required maintainer action
Edit `docs/cheatsheet.html` to remove or comment out the 51 non-existent classes listed above.
