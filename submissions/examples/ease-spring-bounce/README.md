# ease-spring-bounce

A pure CSS spring-physics animation utility built on the CSS `linear()` easing function.

---

## 1. What does this do?

`ease-spring-bounce` uses the CSS `linear()` easing function to **plot a mathematically precise damped harmonic oscillator curve** natively inside the browser.

Unlike `cubic-bezier()`, which can only model a single smooth arc, `linear()` accepts an arbitrary array of output-progress stops — including values **above 1.0** (overshoot) and **below 0.0** (rebound dip). This lets it trace the same physics that govern a physical spring:

```
time  →  0%     20%    35%    45%    60%    75%    90%    100%
value →  0.00   0.82   1.15   1.05   0.95   1.02   0.99   1.00
                ↑              ↑      ↑
          First rise   Max    Settle oscillation
                      overshoot
```

The 13-stop `linear()` array encodes a spring with:

- **Stiffness ≈ 300** (fast initial push)
- **Damping ≈ 18** (settles within ~3 oscillations)
- **Mass = 1** (normalised unit)

No JavaScript physics engine is involved — the browser's compositor thread drives every frame.

---

## 2. How is it used?

Add the `ease-spring-bounce` class to any element and link `style.css`:

```html
<!-- Notification toast -->
<div class="toast ease-spring-bounce" role="status" aria-live="polite">
  <span>✓ Deployment Successful</span>
</div>

<!-- Feature card -->
<article class="card ease-spring-bounce">
  <h2>Zero JS overhead</h2>
  <p>60 fps spring physics, CSS only.</p>
</article>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The class applies the keyframe animation `ease-spring-drop` (a translateY + scale entrance) with the `linear()` timing function. A `@supports` block provides a `cubic-bezier(0.175, 0.885, 0.32, 1.275)` fallback for browsers that pre-date `linear()`.

---

## 3. Why is it useful?

Spring physics is the gold standard for motion that feels **physical and alive**. Until recently, achieving this on the web required:

| Approach | Cost |
|---|---|
| **GSAP** (Elastic ease) | ~60 KB JS bundle + parser overhead |
| **Framer Motion** (spring) | ~150 KB React dependency |
| **Web Animations API** (custom easing) | JS-driven, can drop off compositor |
| **CSS `linear()`** (this submission) | **0 KB**, compositor-native, no runtime |

`linear()` achieves what those libraries do, but:

- **Runs on the GPU compositor thread** — immune to main-thread JS jank.
- **Declared entirely in CSS** — no build step, no bundler, no CDN.
- **Progressively enhanced** via `@supports` — zero breakage on legacy browsers.
- **`prefers-reduced-motion` aware** — respects users with vestibular disorders.

This fits EaseMotion CSS's philosophy of delivering expressive, performant motion through plain, portable CSS — closing the gap between native spring-animation libraries and zero-dependency stylesheets.

---

## Folder Structure

```text
submissions/examples/ease-spring-bounce/
├── demo.html   ← self-contained, open directly in browser
├── style.css   ← animation utility + full page styles
└── README.md   ← this file
```

---

## Browser Support

| Browser | `linear()` | Fallback (`cubic-bezier`) |
|---|---|---|
| Chrome 112+ | ✅ Native | — |
| Firefox 112+ | ✅ Native | — |
| Safari 17.2+ | ✅ Native | — |
| Safari < 17.2 | ❌ | ✅ via `@supports not` |
| Chrome < 112 | ❌ | ✅ via `@supports not` |

---

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.  
Issue: **#61502 — ease-spring-bounce using CSS linear() easing function**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
