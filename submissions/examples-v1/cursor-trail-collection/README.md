# Cursor Trail Effect Collection

## What does this do?
A set of five cursor-reactive hover effects — glow, spotlight, dot trail, pulsing ring, and a magnetic-feel button — built primarily with CSS, with a tiny optional JS helper only where live pointer coordinates are genuinely needed.

## How is it used?

```html
<!-- 1. Glow that follows the cursor -->
<div class="cursor-glow-box" id="glow-box">
  <span class="cursor-glow-label">Move your mouse over this box</span>
</div>

<!-- 2. Spotlight overlay that follows the cursor -->
<div class="cursor-spotlight-box" id="spotlight-box">
  <span class="cursor-spotlight-label">Spotlight section</span>
</div>

<!-- 3. Fading dot trail on hover (no JS) -->
<div class="cursor-trail-target">
  Hover over me
  <span class="cursor-trail-dot"></span>
  <span class="cursor-trail-dot"></span>
  <span class="cursor-trail-dot"></span>
  <span class="cursor-trail-dot"></span>
  <span class="cursor-trail-dot"></span>
</div>

<!-- 4. Pulsing ring on hover (no JS) -->
<div class="cursor-pulse-target">Hover</div>

<!-- 5. Magnetic-feel button on hover/focus (no JS) -->
<button class="cursor-magnetic-btn">Click me</button>
```

For `cursor-glow-box` and `cursor-spotlight-box`, attach the small mousemove
helper included in `demo.html` to set `--x` / `--y` on the element. This is
the only JavaScript in the whole collection, and it does no rendering — it
just writes two CSS custom properties that the gradients read.

```js
function bindPointerTracking(el) {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
    el.style.setProperty('--y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
  });
}
```

## Why is it useful?
Cursor-reactive feedback is one of the highest-impact ways to make an
interface feel alive without weighing it down. Three of the five effects
(`cursor-trail`, `cursor-pulse`, `cursor-magnetic`) are entirely CSS —
zero JavaScript, zero runtime cost beyond a `:hover` transition, which
fits EaseMotion CSS's "animation-first, dependency-free" philosophy
exactly. The other two (`cursor-glow`, `cursor-spotlight`) are honest
about the one real constraint of pure-CSS cursor effects: CSS alone has
no way to read live pointer coordinates across an arbitrary container,
so a 4-line mousemove listener supplies `--x`/`--y` while the actual
glow/spotlight rendering stays 100% CSS (`radial-gradient` +
`@property`-style custom property transitions). This mirrors the
approach already used by the project's existing `ease-spotlight`
submission, so it stays consistent with prior art in the framework
rather than overclaiming a JS-free implementation that isn't possible
for true pointer-following effects.

## Tech Stack
- HTML
- CSS (`:hover`, `::before`/`::after`, custom properties, keyframes)
- ~10 lines of optional JS (coordinate tracking only, no rendering logic)

## Preview
Open `demo.html` directly in your browser — no build step, no server,
no external dependencies.

## Note on naming
Submitted as `cursor-trail-collection-tk` (suffixed per the repo's
naming-collision policy in `CONTRIBUTING.md`) since several related
cursor/glow/spotlight/magnetic effects already exist as separate
submissions in `submissions/examples/`. This folder bundles all five
requested variants together as one cohesive collection rather than
duplicating any single existing effect.