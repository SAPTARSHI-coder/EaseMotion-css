# Scroll-Triggered Animations

Entrance animations that fire only when an element scrolls into the viewport.

## Classes

| Class | Effect |

| `scroll-fade-in` | Fades in on scroll |
| `scroll-slide-up` | Slides up on scroll |
| `scroll-zoom-in` | Zooms in on scroll |
| `scroll-slide-left` | Slides from left on   scroll |
| `scroll-slide-right` | Slides from right on scroll |

## Usage

```html
<div class="scroll-fade-in">Fades in</div>
<div class="scroll-slide-up delay-100">Slides up</div>
```

Add the companion JS snippet from `demo.html` to your page.

## Notes
- Uses IntersectionObserver — no dependencies
- Animates once per element, does not repeat
- Composable with delay classes: `delay-100`, `delay-200`, `delay-300`