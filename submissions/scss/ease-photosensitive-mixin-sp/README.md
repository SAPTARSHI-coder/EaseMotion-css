# Photosensitive-Safe Animation SCSS Mixin

An SCSS mixin pack that wraps animations with **photosensitive-safe defaults** — max flash rate limits, opacity caps, and automatic `prefers-reduced-motion` fallback rules.

> Submission track: `submissions/scss/ease-photosensitive-mixin-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44487

---

## What does this do?

EaseMotion CSS supports `prefers-reduced-motion`, but SCSS contributors often lack a reusable pattern for seizure-safe animations. This submission provides `mixin.scss` with guardrailed keyframe generators and convenience recipes, plus a demo comparing risky vs mixin-wrapped output.

---

## Mixins included

| Mixin | Purpose |
|-------|---------|
| `photosensitive-safe-animation` | Core wrapper — clamps duration, iterations, emits reduced-motion fallback |
| `photosensitive-pulse` | Capped-opacity pulse (one-line recipe) |
| `photosensitive-ping` | Safer notification ring expand |
| `photosensitive-attention` | Gentle rotation shake for form errors |
| `photosensitive-soft-flash` | Soft alert blink with opacity floor |
| `psm-keyframes-*` | Low-level keyframe generators with caps |

---

## How is it used?

1. Open `demo.html` in a browser to compare risky vs safe animations.
2. Copy `mixin.scss` into your SCSS project.
3. Import and apply a recipe:

```scss
@use 'mixin' as psm;

.badge {
  @include psm.photosensitive-pulse();
}
```

4. Compile SCSS — `style.css` in this folder shows the compiled output for reference.

---

## Features

- SCSS mixin for photosensitive-safe animations
- Max flash rate guardrails (avoid rapid strobing)
- Opacity cap defaults for safer fade/pulse effects
- `prefers-reduced-motion` fallback included in mixin output
- Demo page showing risky vs mixin-safe animation comparison
- Copy-ready SCSS usage examples
- Educational notes on photosensitive / seizure-safe animation practices
- Responsive, accessible demo UI

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| SCSS mixin source | `mixin.scss` |
| Compiled demo styles | `style.css` |
| Replay + copy helpers | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `mixin.scss` | Photosensitive-safe SCSS mixin source |
| `style.css` | Compiled mixin output + demo layout |
| `demo.html` | Risky vs safe comparison playground |
| `README.md` | This document |

---

## Configurable variables

| Variable | Default | Description |
|----------|---------|-------------|
| `$psm-flash-interval-min` | `0.5s` | Minimum interval between flash states |
| `$psm-duration-floor` | `1s` | Minimum full animation cycle |
| `$psm-max-iterations` | `3` | Caps `infinite` and high iteration counts |
| `$psm-opacity-floor` | `0.55` | Minimum opacity in generated keyframes |
| `$psm-max-scale-delta` | `0.35` | Max scale increase from 1.0 |

---

## Compliance notes

- Only **new files** inside `submissions/scss/ease-photosensitive-mixin-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All four required submission files included (`demo.html`, `style.css`, `mixin.scss`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
