# Native Dialog & Unmount Transitions (@starting-style + transition-behavior)

## 1. What does this do?

Provides zero-dependency, animation-first CSS utility classes (`ease-dialog-bounce`, `ease-popover-slide-up`, `ease-dialog-slide-side`) that enable smooth entrance **AND** exit transitions for native HTML `<dialog>` elements and the HTML Popover API.

It utilizes the modern CSS 2025/2026 specifications:
- `@starting-style` rule for initial mount state interpolation.
- `transition-behavior: allow-discrete` to allow `display` (`none` to `block`/`dialog`) and `overlay` (top-layer elevation) to transition smoothly on unmount without JavaScript timers or `setTimeout()` hooks.

---

## 2. How is it used?

### Native `<dialog>` Modal with Bounce Transition

Add the `ease-dialog-bounce` class to any standard HTML `<dialog>` element:

```html
<dialog id="my-modal" class="ease-dialog-bounce">
  <div class="dialog-content">
    <h3>Modal Title</h3>
    <p>Smooth entrance and unmount exit animation.</p>
    <button onclick="document.getElementById('my-modal').close()">Close</button>
  </div>
</dialog>

<button onclick="document.getElementById('my-modal').showModal()">Open Dialog</button>
```

### Native HTML Popover API (Zero JS)

Combine `ease-popover-slide-up` with standard HTML `popover` and `popovertarget` attributes:

```html
<!-- Trigger Button -->
<button popovertarget="my-popover">Toggle Popover</button>

<!-- Native Popover Container -->
<div id="my-popover" popover class="ease-popover-slide-up">
  <h4>Native Popover</h4>
  <p>Animates seamlessly on mount and unmount with zero JavaScript!</p>
</div>
```

---

## 3. Why is it useful?

Historically, animating native dialog closing/unmounting required JavaScript hacks (e.g. adding a closing class, waiting for `animationend` or `setTimeout`, and then calling `.close()` or changing state).

With modern CSS `@starting-style` and `transition-behavior: allow-discrete`:
1. **Zero JS Overhead:** Browsers handle top-layer unmounting animations natively.
2. **Top-Layer Compatibility:** Native HTML `<dialog>` elements remain rendered in the browser's top-layer with proper focus traps and accessibility features.
3. **Smooth Backdrops:** `::backdrop` elements fade out smoothly in sync with modal scale-down animations.
4. **Accessible:** Fully supports `prefers-reduced-motion` fallbacks and native keyboard ESC handling.

---

## 4. Key Classes & Custom CSS Properties

| Class Name | Description | Default Timing |
| ---------- | ----------- | -------------- |
| `.ease-dialog-bounce` | Scale-up spring bounce modal entrance & elastic exit | `0.4s` cubic-bezier |
| `.ease-popover-slide-up` | Slide-up popover API transition with opacity reveal | `0.35s` ease-out |
| `.ease-dialog-slide-side` | Right side-drawer dialog transition with glass backdrop | `0.4s` ease-out |

### Customization Variables

```css
:root {
  --ease-dialog-duration: 0.4s;
  --ease-popover-duration: 0.35s;
  --ease-bounce-cubic: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```
