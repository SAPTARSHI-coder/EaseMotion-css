# Live Class Inspector Panel for Animation Demo Boxes (live-class-inspector-mab)

## 1. What does this do?

Adds a floating **Live Class Inspector Panel** that appears when a user hovers over or focuses on any `.anim-box` demo element. The panel shows:

- The exact `ease-*` class applied to the element
- The resolved CSS `animation` shorthand
- A **Copy Class** button — copies just the class name (e.g. `ease-slide-up`)
- A **Copy HTML** button — copies a ready-to-paste `<div>` snippet
- A live copy-success flash with animated confirmation
- Full keyboard (`Tab` / `focus`) accessibility
- Screen-reader support via `role="tooltip"` and `aria-live="polite"`
- `prefers-reduced-motion` support — inspector still appears, but no animations play on reduced-motion systems

## 2. How is it used?

Annotate any animation demo element with `data-ease-class` and `data-ease-rule`:

```html
<div
  class="anim-box ease-slide-up"
  tabindex="0"
  data-ease-class="ease-slide-up"
  data-ease-rule="animation: ease-kf-slide-up 300ms cubic-bezier(0.4, 0, 0.2, 1) both"
>
  Slide Up
</div>
```

The inspector panel is a single shared `<div class="demo-inspector">` injected once into the DOM by a small JavaScript snippet. On hover/focus it positions itself near the active box and populates its content from the data attributes.

No framework, no dependencies — pure HTML + CSS + vanilla JS.

## 3. Why is it useful?

EaseMotion CSS is built around self-documenting, human-readable class names. But the current demo page requires users to open browser DevTools just to find which class produces a given animation.

This inspector panel:

1. **Eliminates DevTools friction** — developers instantly see the class and rule without leaving the page.
2. **Accelerates adoption** — one-click copy into clipboard means zero transcription errors.
3. **Improves onboarding** — new contributors understand the naming convention immediately by interacting with the demo.
4. **Reinforces EaseMotion's "learn by seeing" philosophy** — the visual effect and the code are shown together.
5. **Accessible by design** — keyboard focus triggers the inspector, making it usable without a mouse.
