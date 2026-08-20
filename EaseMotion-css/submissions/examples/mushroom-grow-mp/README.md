# ease-mushroom-grow-mp

> **Contributor suffix:** `-mp` (Mahi Patel)
> **Track:** Standard (HTML/CSS) → `submissions/examples/mushroom-grow-mp/`
> **Closes:** #26885

---

## What does this do?

A whimsical, spring-physics mushroom growth animation suite — the stem sprouts upward, the cap expands with an overshoot-and-settle bounce, spots pop in, and a looping idle sway + bioluminescent glow keeps it alive after growth completes.

---

## How is it used?

### 1. Full grow (one-shot entrance)
```html
<span class="ease-mushroom-grow-mp">🍄</span>
```

### 2. Staggered field
```html
<span class="ease-mushroom-grow-mp">🍄</span>
<span class="ease-mushroom-grow-mp ease-mushroom-delay-1-mp">🍄</span>
<span class="ease-mushroom-grow-mp ease-mushroom-delay-2-mp">🍄</span>
<span class="ease-mushroom-grow-mp ease-mushroom-delay-3-mp">🍄</span>
<span class="ease-mushroom-grow-mp ease-mushroom-delay-4-mp">🍄</span>
```

### 3. Idle sway (looping)
```html
<span class="ease-mushroom-sway-mp">🍄</span>
```

### 4. Glow pulse (bioluminescent)
```html
<span class="ease-mushroom-sway-mp ease-mushroom-glow-mp">🍄</span>
```

### 5. Spot pop-in (child elements)
```html
<span class="dot ease-mushroom-spot-mp" style="animation-delay:0.6s"></span>
<span class="dot ease-mushroom-spot-mp" style="animation-delay:0.75s"></span>
```

### 6. Shrink exit
```html
<span class="ease-mushroom-shrink-mp">🍄</span>
```

### 7. Speed modifiers
```html
<span class="ease-mushroom-grow-mp ease-mushroom-slow-mp">🍄</span>  <!-- 1.8s -->
<span class="ease-mushroom-grow-mp ease-mushroom-fast-mp">🍄</span>  <!-- 0.4s -->
```

---

## Classes Reference

| Class | Description |
|---|---|
| `ease-mushroom-grow-mp` | One-shot spring-bounce grow entrance |
| `ease-mushroom-stem-mp` | Stem-only sprout upward |
| `ease-mushroom-cap-mp` | Cap-only expand (use after stem) |
| `ease-mushroom-spot-mp` | Spot/dot pop-in (child element) |
| `ease-mushroom-spore-mp` | Spore particle floats up and fades |
| `ease-mushroom-sway-mp` | Looping gentle idle rock |
| `ease-mushroom-glow-mp` | Bioluminescent brightness pulse |
| `ease-mushroom-shrink-mp` | Exit — bounce up then collapse |
| `ease-mushroom-delay-1-mp` | 0.15s delay |
| `ease-mushroom-delay-2-mp` | 0.30s delay |
| `ease-mushroom-delay-3-mp` | 0.45s delay |
| `ease-mushroom-delay-4-mp` | 0.60s delay |
| `ease-mushroom-slow-mp` | 1.8s duration |
| `ease-mushroom-fast-mp` | 0.4s duration |

---

## Why is it useful?

EaseMotion CSS thrives on character-driven, organic motion. The `ease-mushroom-grow-mp` suite brings a nature-world animation pattern — staggered growth sequences — that has broad applicability in game UIs, fantasy landing pages, loading states, and onboarding reveals. It's composable (mix entrance + idle + exit classes), uses spring cubic-bezier curves for natural feel, respects `prefers-reduced-motion`, and requires zero JavaScript for the looping variants.

---

## Files

```
submissions/examples/mushroom-grow-mp/
├── demo.html   ← self-contained demo, open directly in browser
├── style.css   ← raw animation CSS
└── README.md   ← this file
```
