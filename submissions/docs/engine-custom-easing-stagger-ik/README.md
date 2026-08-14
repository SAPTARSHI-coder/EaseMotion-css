# EaseMotion Motion Engine — Easing & Stagger Showcase (`engine-custom-easing-stagger-ik`)

An architecture documentation showcase illustrating zero-config `em="..."` motion engine tokenization, canonical easing curve maps, and staggered delay modifiers for standard list items.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Demonstrates how the EaseMotion zero-config Motion Engine (`easemotion/engine/`) tokenizes raw HTML `em="..."` attributes at runtime via MutationObserver into deterministic CSS animation keyframe rules.

---

## 2. How is it used?

Apply the `em="..."` attribute directly to elements in your HTML markup:

```html
<!-- Example: Staggered entrance with spring easing -->
<div em="fade-in 600ms spring delay-100ms">Card 1</div>
<div em="fade-in 600ms spring delay-200ms">Card 2</div>
<div em="fade-in 600ms spring delay-300ms">Card 3</div>
```

Initialize the browser runtime in JS:

```js
import { start } from 'easemotion-css/engine';
start();
```

---

## 3. Token Grammar Reference

| Token Type | Examples | Description |
|------------|----------|-------------|
| **Animation Name** | `fade-in`, `slide-up`, `bounce`, `zoom-in` | Maps to `@keyframes ease-kf-*` definitions |
| **Duration** | `500ms`, `1.2s` | Sets animation duration |
| **Easing Alias** | `spring`, `bounce`, `snap`, `ease-out` | Canonical cubic-bezier timing functions |
| **Delay / Stagger** | `delay-100ms`, `delay-200ms` | Staggered animation delay offset |
| **Iterations** | `repeat-2`, `repeat-infinite` | Iteration count declaration |
