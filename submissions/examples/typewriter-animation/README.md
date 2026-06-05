# Typewriter Text Animation

Pure CSS typewriter effect — reveals text character-by-character with a blinking cursor. No JavaScript, no build step, no dependencies.

---

## What does this do?

Text inside a specially-prepared element animates as if it's being typed in real time. A blinking cursor sits at the end of the text while it appears, then either stays visible or disappears once typing finishes.

Three ready-to-use examples are included:

| Example             | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| **Hero heading**    | Large display text that types in once on page load, with a staggered subtitle fade |
| **Code snippet**    | Four lines of code that type in sequence, one after another                        |
| **Terminal prompt** | A looping command-line that types, pauses, erases, and repeats                     |

---

## How is it used?

### The short version

Add `overflow: hidden; white-space: nowrap` to an element, then animate its `width` from `0` to `100%` using `steps(N)` where **N equals the exact character count** of the text.

```css
.my-text {
  --chars: 14; /* "Hello, world!" = 13 chars + 1 for safety */

  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid currentColor; /* the cursor */

  animation:
    type-in calc(var(--chars) * 60ms) steps(var(--chars)) forwards,
    cursor-blink 700ms steps(1) infinite;
}
```

```html
<p class="my-text">Hello, world!</p>
```

### Staggering multiple lines

Each line gets its own `animation-delay`. The delay for line N is roughly the sum of all previous lines' durations:

```css
/* Line 1: 20 chars, starts immediately */
.line-1 {
  --chars: 20;
  animation-delay: 0s;
}

/* Line 2: 25 chars, starts after line 1 finishes */
.line-2 {
  --chars: 25;
  animation-delay: calc(20 * 60ms);
}

/* Line 3: starts after both previous lines */
.line-3 {
  --chars: 10;
  animation-delay: calc(45 * 60ms);
}
```

### Looping (type + erase)

Swap `type-in` for `type-in-then-delete` and set `infinite`:

```css
.looping {
  --chars: 18;
  animation:
    type-in-then-delete 5s steps(var(--chars)) infinite,
    cursor-blink 700ms steps(1) infinite;
}
```

### Accessibility

Always include a plain-text `aria-label` on animated elements so screen readers announce the full string immediately rather than waiting for the animation:

```html
<h1 class="hero-title" aria-label="Build things that matter.">
  Build things that matter.
</h1>
```

The stylesheet also includes a `prefers-reduced-motion` block that disables all animations and immediately reveals all text for users who have that setting enabled.

---

## Why is it useful?

**No JavaScript required.** The whole effect runs on two CSS animations — `type-in` and `cursor-blink` — which work in every modern browser without a single line of script.

**Lightweight.** There are no runtime dependencies, no npm install, and nothing to bundle. Drop `style.css` into any project and it works.

**Easy to customise.** Changing speed, colour, font size, or cursor thickness is one CSS variable or property edit. Each example is self-contained, so you can copy just the part you need.

**Accessible by default.** `aria-label` means the full text is available to assistive technology instantly, and the `prefers-reduced-motion` fallback respects users who experience discomfort from motion effects.

**Good for first impressions.** A typewriter heading draws attention without being distracting. It works well for landing pages, developer portfolios, CLI-tool documentation, and anywhere a terminal or code aesthetic fits the brand.

---

## Files

```
submissions/examples/typewriter-animation/
├── demo.html   — three live examples in a single page
├── style.css   — all keyframes, utilities, and example styles
└── README.md   — this file
```

## Browser support

Tested in Chrome 120+, Firefox 121+, Edge 120+, Safari 17+. The core technique (`animation`, `steps()`, `overflow: hidden`) has been supported since ~2013, so older browsers work too — they just show the text statically if the animation isn't supported.
