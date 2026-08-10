# Hover Intent Delay

Closes #65821

### 1. What does this do?
A CSS-only utility, `.em-hover-intent`, that adds a short delay (default 80ms) before a hover animation triggers on entry, while reverting instantly on exit — preventing the flashing/chaotic effect when a user's mouse quickly passes over several animated elements.

### 2. How is it used?
Add `.em-hover-intent` alongside any element that already has its own hover transition (card lift, button color change, underline link, etc.). No JavaScript is required:

```html
<div class="demo-card em-hover-intent">Card A</div>

<button class="demo-btn em-hover-intent" type="button">Hover me</button>

<a class="demo-link em-hover-intent" href="#">Underline link</a>
```

The element still needs its own `transition: <property> <duration> <easing>;` declaration — `.em-hover-intent` only controls the *delay* portion:

```css
.demo-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```

Two speed modifiers are included, both changing a single custom property so you can also override it inline:

```html
<div class="demo-card em-hover-intent em-hover-intent--fast">50ms</div>
<div class="demo-card em-hover-intent">80ms (default)</div>
<div class="demo-card em-hover-intent em-hover-intent--slow">100ms</div>

<!-- or a fully custom delay -->
<div class="demo-card em-hover-intent" style="--em-hover-delay: 120ms;">Custom</div>
```

**How it works:** CSS resolves `transition-delay` from the *after-change* rule. Moving into `:hover` uses the delay from the `:hover` rule (`var(--em-hover-delay)`), so the animation waits. Moving back out uses the delay from the base rule (`0s`), so it snaps back immediately — no lag when the user actually leaves. `prefers-reduced-motion: reduce` collapses the delay to `0s` in both directions.

### 3. Why is it useful?
Hover-triggered animations are one of EaseMotion's core building blocks, but on dense layouts (grids of cards, nav bars, toolbars) a fast mouse pass can fire dozens of transitions in a fraction of a second, reading as visual noise rather than polish. `.em-hover-intent` fixes this with a single class and zero JavaScript, keeping with EaseMotion's philosophy of small, composable, human-readable utilities that layer cleanly on top of existing hover effects instead of replacing them.
