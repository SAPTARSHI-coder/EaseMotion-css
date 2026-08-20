# useEaseReveal

A lightweight, dependency-free (besides React) custom hook that brings
EaseMotion's `ease-scroll-reveal` utility into React and Next.js apps using
the native `IntersectionObserver` API — no `reveal.js` script tag, no manual
DOM querying.

## ✨ Features

- **Idiomatic React API** — just attach the returned ref to any element.
- **SSR-safe** — guards against `window` / `IntersectionObserver` being
  unavailable during server rendering (Next.js App Router, Pages Router,
  Remix, etc).
- **Accessible** — respects `prefers-reduced-motion` by revealing content
  immediately instead of animating it in.
- **No scroll listeners** — uses `IntersectionObserver` exclusively.
- **Batched updates** — class toggles are wrapped in
  `requestAnimationFrame` to avoid layout thrash on pages with many
  observed elements.
- **Automatic cleanup** — the observer is disconnected on unmount.
- **Reuses existing utilities** — pairs with the `ease-scroll-reveal` CSS
  class already shipped in EaseMotion; this hook does not introduce a new
  animation system.

## 📦 Installation

Copy `useEaseReveal.js` into your project (e.g. `src/hooks/useEaseReveal.js`)
and import the `ease-scroll-reveal` styles from `style.css` (or your
existing EaseMotion stylesheet, if the utility is already included there).

## 🧩 Usage

```jsx
import { useEaseReveal } from "./useEaseReveal";

export default function Card() {
  const ref = useEaseReveal({
    animation: "slide-up",
    threshold: 0.2,
    once: true,
  });

  return (
    <div ref={ref} className="ease-card">
      Scroll to reveal me!
    </div>
  );
}
```

## ⚙️ API

```js
useEaseReveal(options?)
```

| Option        | Type      | Default   | Description |
|---------------|-----------|-----------|-------------|
| `animation`   | `string`  | `"fade"`  | Variant suffix, appended as `ease-scroll-reveal--{animation}`. Built-in variants: `fade`, `slide-up`, `slide-left`, `slide-right`, `zoom`. |
| `threshold`   | `number`  | `0.15`    | IntersectionObserver threshold (0–1) — how much of the element must be visible before revealing. |
| `rootMargin`  | `string`  | `"0px"`   | IntersectionObserver rootMargin, e.g. `"0px 0px -10% 0px"` to trigger slightly early. |
| `once`        | `boolean` | `true`    | If `true`, the element reveals once and is never re-observed. If `false`, the `is-visible` class toggles on/off as the element enters/leaves the viewport. |
| `root`        | `Element \| null` | `null` | Custom scroll container to observe within, instead of the browser viewport. |

**Returns:** a ref callback to attach to the target element via `ref={...}`.

## 🎨 Styling

The hook toggles two classes on the element:

- `ease-scroll-reveal ease-scroll-reveal--{animation}` — applied immediately
  on mount, defining the pre-reveal (hidden/offset) state.
- `is-visible` — added once the element intersects the viewport (or removed
  again if `once: false` and it scrolls back out).

```css
.ease-scroll-reveal--slide-up {
  opacity: 0;
  transform: translateY(32px);
}

.ease-scroll-reveal.is-visible {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}
```

Add your own `ease-scroll-reveal--{name}` variant to define a custom
animation — the hook just toggles class names, it doesn't hardcode any
specific transform.

## ♿ Accessibility

If the user has `prefers-reduced-motion: reduce` set, or the browser
doesn't support `IntersectionObserver`, the hook skips observation entirely
and reveals the element immediately — content is never hidden behind a
scroll trigger that might not fire.

## 🖥️ SSR / Next.js Notes

All `window` / `IntersectionObserver` access is guarded, so the hook is
safe to call during server rendering. No observation happens until the
component mounts on the client.

## 📁 Files

- `useEaseReveal.js` — the hook, importable directly into a React/Next.js
  project
- `demo.html` — a standalone preview (loads React + Babel via CDN so it
  runs without a build step) demonstrating all five built-in animation
  variants
- `style.css` — the `ease-scroll-reveal` utility classes used by the hook,
  plus demo page styling

## 🔗 Issue

Closes #34686 — [FEATURE] useEaseReveal — Custom React Hook for
Scroll-Triggered Animations