# Submission: 3D Tilt Card

## 1. What does this do?
Adds a real-time 3D perspective tilt to cards that follows the user's mouse position, with a dynamic specular shine layer and a smooth spring-back on mouse leave.

## 2. How is it used?

Add the `tilt-card` class to any card element and include a `tilt-card-shine` child div:

```html
<div class="tilt-card" data-tilt>
  <div class="tilt-card-shine"></div>

  <span class="card-badge badge-new">New</span>
  <h3 class="card-title">Animation First</h3>
  <p class="card-sub">Design Philosophy</p>
  <p class="card-body">Your card content here.</p>
  <a class="card-link">Explore</a>
</div>
```

Include the JS snippet (from `demo.html`) once per page to activate tilt tracking on all `[data-tilt]` elements.

## 3. Why is it useful?

EaseMotion CSS is animation-first — motion is a first-class citizen, not an afterthought. A 3D tilt card makes hover state *feel* alive rather than just changing a color. It communicates depth and responsiveness in a way that flat hover effects cannot.

The effect is:
- **Pure CSS + vanilla JS** — no dependencies
- **Composable** — works on top of existing `ease-card` variants
- **Accessible** — no motion triggers on keyboard focus, pointer only
- **Performant** — uses `will-change: transform` and `transform-style: preserve-3d` on GPU-composited layers only

Proposed class name (maintainer decides final naming):
- `ease-card-3d` — activates 3D tilt behaviour
- `ease-card-shine` — the specular highlight child layer