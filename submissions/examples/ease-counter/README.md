# ease-counter

Submission for Issue #3824

## What this adds

CSS utility that animates a number from 0 to a target value using
CSS @property and counter(). Includes scroll-triggered variant via
animation-timeline: view(). Zero JavaScript required.

## Browser Support

Requires `@property` support (Chrome 85+, Edge 85+, Safari 16.4+).
Falls back gracefully in unsupported browsers via `prefers-reduced-motion`
pattern — shows final value immediately with a fade-in.

## Classes

### Base
| Class | Description |
|---|---|
| `ease-counter` | Base count-up (0 → 100, 2s) |

### Target Presets
| Class | Target |
|---|---|
| `ease-counter--10` | Counts to 10 |
| `ease-counter--50` | Counts to 50 |
| `ease-counter--100` | Counts to 100 |
| `ease-counter--500` | Counts to 500 |
| `ease-counter--1000` | Counts to 1000 |

### Speed
| Class | Duration |
|---|---|
| `ease-counter--fast` | 0.8s |
| `ease-counter` | 2s (default) |
| `ease-counter--slow` | 4s |

### Suffix Helpers
| Class | Output |
|---|---|
| `ease-counter--suffix-percent` | 100% |
| `ease-counter--suffix-plus` | 100+ |
| `ease-counter--suffix-k` | 100k |
| `ease-counter--suffix-x` | 100x |

### Size
| Class | Font Size |
|---|---|
| `ease-counter--sm` | 1.5rem |
| `ease-counter--md` | 2.5rem |
| `ease-counter--lg` | 4rem |
| `ease-counter--xl` | 6rem |

### Trigger
| Class | Trigger |
|---|---|
| `ease-counter` | On load (default) |
| `ease-counter--scroll` | On scroll into view |

## Usage

```html
<!-- Count to 100 -->
<span class="ease-counter ease-counter--100 ease-counter--lg ease-counter--green"></span>

<!-- Count to 500 with + suffix, slow -->
<span class="ease-counter ease-counter--500 ease-counter--suffix-plus ease-counter--slow"></span>

<!-- Scroll-triggered count to 1000 -->
<span class="ease-counter ease-counter--scroll ease-counter--1000 ease-counter--xl"></span>
```

## Accessibility

Respects `prefers-reduced-motion` — animation skipped, final
value shown immediately with a simple fade-in.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
