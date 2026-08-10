# Loaders Reduced Motion Fix — Issue #8485

**Fixes:** #8485

## What does this do?

Adds a `@media (prefers-reduced-motion: reduce)` block to
`components/loaders.css` so all four loader animations stop when the user
has enabled Reduce Motion in their OS accessibility settings.

## The problem

`components/loaders.css` defines four continuously looping animations:

```css
.ease-loader-spin  { animation: ease-kf-rotate 0.8s ... infinite; }
.ease-loader-pulse { animation: ease-kf-pulse  1.2s ... infinite; }
.ease-loader-ping  { animation: ease-kf-ping   1s   ... infinite; }
.ease-loader-dot   { animation: ease-kf-bounce 1s   ... infinite; }
```

The file ends with no `@media (prefers-reduced-motion: reduce)` block.
All four animations keep running at full speed even when the user has
enabled Reduce Motion — a system accessibility setting intended to
prevent motion-triggered symptoms in people with vestibular disorders,
epilepsy, motion sickness, or ADHD.

Loaders are particularly high-risk because they run continuously and are
displayed prominently while users are waiting and looking directly at them.

`loaders.css` is the only animated component file in the framework
missing this accessibility safeguard. Every other component has it:
buttons, cards, modals, forms, sidebar, tooltips, chip, footer, marquee,
and scroll-progress.

## How to reproduce

1. Chrome DevTools → More Tools → Rendering
2. Set **Emulate CSS media feature prefers-reduced-motion** to `reduce`
3. Open any page with `.ease-loader-spin`, `.ease-loader-dots`, or
   `.ease-loader-pulse` — all animations continue running with no change

## The fix

```css
@media (prefers-reduced-motion: reduce) {
  .ease-loader-spin,
  .ease-loader-pulse,
  .ease-loader-ping,
  .ease-loader-dot {
    animation: none !important;
  }
}
```

Four lines. Same pattern used by every other animated component in the
framework.

## What users see after the fix

| Loader | Motion enabled | Reduce motion enabled |
|---|---|---|
| `.ease-loader-spin` | Spinning circle | Static arc — still visible |
| `.ease-loader-pulse` | Pulsing dot | Solid dot — still visible |
| `.ease-loader-ping` | Expanding ring | Static dot — still visible |
| `.ease-loader-dot` | Bouncing dots | Static dots — still visible |

All loaders remain visible. They simply stop animating. The loading
state is still communicated — just without motion.

## Demo

The demo includes a **Simulate Reduce Motion** toggle button so the
before/after difference is visible without needing OS settings or
DevTools. It also responds to the real `prefers-reduced-motion: reduce`
media query through the `style.css` fix when tested with DevTools.
