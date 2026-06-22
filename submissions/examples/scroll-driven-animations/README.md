# ease-scroll-* — CSS Scroll-Driven Animation Utilities

## What does this do?

Provides CSS Scroll-Driven Animation utility classes (`ease-scroll-reveal`, `ease-view-slide-in`, `ease-scroll-progress-bar`, and companions) that enable animations driven by scroll position and element viewport visibility using the modern CSS Scroll-Driven Animations API (`animation-timeline: scroll()` / `view()`) — no JavaScript required in supporting browsers.

## How is it used?

**Scroll progress bar (fixed at top):**

```html
<div class="ease-scroll-progress-bar"></div>
```

**Fade-in-up cards as they enter the viewport:**

```html
<div class="ease-scroll-reveal">Content fades in on scroll</div>
```

**Slide in from the right:**

```html
<div class="ease-view-slide-in">Slides in as it enters view</div>
```

**Parallax movement:**

```html
<div class="ease-scroll-parallax">Moves at a different scroll speed</div>
```

### Available Classes

| Class | Effect | Timeline |
|---|---|---|
| `.ease-scroll-progress-bar` | Fixed top reading progress indicator | `scroll(root)` |
| `.ease-scroll-reveal` | Fade-in-up entrance on scroll | `view()` |
| `.ease-scroll-parallax` | Vertical parallax movement | `scroll(root)` |
| `.ease-scroll-zoom` | Scale-up zoom effect on entry | `view()` |
| `.ease-scroll-blur` | Unblur transition on entry | `view()` |
| `.ease-view-reveal` | Extended fade-in-up across viewport | `view()` + `cover` range |
| `.ease-view-scale-in` | Scale from 0.8 to 1.0 on entry | `view()` |
| `.ease-view-slide-in` | Slide in from the right | `view()` |
| `.ease-view-slide-in-left` | Slide in from the left | `view()` |

### Range Modifiers

| Class | Behavior |
|---|---|
| `.ease-range-quick` | Animation completes within first 50% of entry |
| `.ease-range-full` | Animation spans the full viewport coverage |
| `.ease-range-exit` | Animation triggers on element exit |

## Why is it useful?

Scroll-driven animations are a native CSS API that eliminates JavaScript for common scroll-linked effects. These utility classes make the API accessible with intuitive class names, consistent with EaseMotion CSS's utility-first philosophy. A built-in IntersectionObserver fallback ensures basic functionality in browsers without scroll-timeline support.
