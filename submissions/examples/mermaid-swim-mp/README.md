# ease-mermaid-swim-mp

> **Contributor suffix:** `-mp` (Mahi Patel)
> **Track:** Standard (HTML/CSS) → `submissions/examples/mermaid-swim-mp/`
> **Closes:** #26891

---

## What does this do?

A set of fluid, ocean-inspired CSS animations that simulate mermaid swimming — combining sinusoidal body undulation, a one-shot forward drift, tail flick, hair/fin ripple, iridescent shimmer, and rising bubble effects.

---

## How is it used?

Apply utility classes directly to HTML elements. No JavaScript required for the looping variants.

### 1. Swim Across (one-shot drift)
```html
<span class="ease-mermaid-swim-mp">🧜‍♀️</span>
```

### 2. Looping vertical bob (idle state)
```html
<span class="ease-mermaid-loop-mp">🧜‍♀️</span>
```

### 3. Iridescent shimmer (combine with loop)
```html
<span class="ease-mermaid-loop-mp ease-mermaid-shimmer-mp">🧜‍♀️</span>
```

### 4. Tail flick + hair flow on child elements
```html
<div class="ease-mermaid-loop-mp">
  <span class="ease-mermaid-flow-mp">🌊</span>  <!-- hair / fin -->
  🧜‍♀️
  <span class="ease-mermaid-tail-mp">🐟</span>   <!-- tail -->
</div>
```

### 5. Rising bubbles (stagger with `animation-delay`)
```html
<span class="ease-mermaid-bubble-mp" style="animation-delay:0s"></span>
<span class="ease-mermaid-bubble-mp" style="animation-delay:0.5s"></span>
<span class="ease-mermaid-bubble-mp" style="animation-delay:1s"></span>
```

### 6. Speed modifiers & direction flip
```html
<span class="ease-mermaid-loop-mp ease-mermaid-slow-mp">🧜‍♀️</span>  <!-- 3.6s -->
<span class="ease-mermaid-loop-mp ease-mermaid-fast-mp">🧜‍♀️</span>  <!-- 0.6s -->
<span class="ease-mermaid-loop-mp ease-mermaid-rtl-mp">🧜‍♀️</span>   <!-- flipped -->
```

---

## Classes Reference

| Class | Description |
|---|---|
| `ease-mermaid-swim-mp` | One-shot forward drift with body undulation |
| `ease-mermaid-loop-mp` | Continuous vertical sinusoidal bob |
| `ease-mermaid-shimmer-mp` | Iridescent hue-shift + brightness pulse |
| `ease-mermaid-tail-mp` | Rhythmic tail-flick (apply to child element) |
| `ease-mermaid-flow-mp` | Hair / fin ripple (apply to child element) |
| `ease-mermaid-bubble-mp` | Rising bubble that fades out |
| `ease-mermaid-slow-mp` | Modifier — slows animation to 3.6s |
| `ease-mermaid-fast-mp` | Modifier — speeds animation to 0.6s |
| `ease-mermaid-rtl-mp` | Modifier — flips element horizontally |

---

## Why is it useful?

EaseMotion CSS celebrates organic, character-driven motion. The `ease-mermaid-swim-mp` suite fills a gap in aquatic / fantasy UI animations — it's composable (mix and match classes for different effects), accessibility-safe (`prefers-reduced-motion` disables all animations), and works on any HTML element without a framework or JavaScript dependency. Ideal for ocean-themed landing pages, game UIs, loading states, and decorative character sprites.

---

## Files

```
submissions/examples/mermaid-swim-mp/
├── demo.html   ← self-contained demo, open directly in browser
├── style.css   ← raw animation CSS
└── README.md   ← this file
```
