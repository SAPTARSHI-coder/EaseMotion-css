# contract-safari-skg — Contract Animation Safari Stutter Reproduction

> EaseMotion CSS · Standard Track Submission  
> Contributor: karrisanthoshigayatri · Issue #47800  
> Type: Bug Reproduction Demo

---

## What does this do?

A minimal, self-contained reproduction page for the Contract animation
stutter reported on Safari. It isolates all three contract animation variants
(`ease-contract-bg-exit`, `ease-contract-image-entrance`,
`ease-contract-shadow-emphasis`), runs each baseline alongside three
documented Safari workarounds, and includes a stress test to surface
frame-drop behaviour under concurrent animation load.

---

## How to use

Open `demo.html` directly in a browser — no server, CDN, or build step needed:

```
# Windows
start submissions/examples/contract-safari-skg/demo.html

# macOS
open  submissions/examples/contract-safari-skg/demo.html
```

Click **▶ Replay** on any card to re-trigger its animation. Click
**▶ Trigger All** in the stress-test section to fire all three animations
simultaneously. The page auto-detects Safari and highlights the browser banner.

---

## Why is it useful?

This provides maintainers with a reliable, isolated Safari reproduction that:

- Separates the three contract variants so each can be debugged individually
- Shows four documented workarounds side-by-side so relative smoothness can
  be compared directly in Safari's developer tools
- Identifies `box-shadow` animation in `ease-contract-shadow-emphasis` as the
  most likely source of frame drops (see analysis below)
- Proposes concrete CSS-only fixes that can be evaluated without modifying
  any core framework files

---

## Root cause analysis

### 1. `ease-contract-bg-exit` — simultaneous scale + opacity

**Keyframe:**
```css
from { transform: scale(1);    opacity: 1; }
to   { transform: scale(0.85); opacity: 0; }
```

**Why it stutters on Safari:** When `transform` and `opacity` are animated
together, Safari may defer promoting the element to a GPU compositing layer
until the first painted frame. This causes a visible "snap" or stutter at
animation start. Chromium promotes the layer pre-emptively, which is why the
animation looks smooth there.

**Confirmed workarounds** (see demo columns):
- `translateZ(0)` or `translate3d(0,0,0)` on the element pre-promotes it to
  a GPU layer before the animation starts.
- `will-change: transform, opacity` serves the same purpose and is the
  spec-correct approach.

---

### 2. `ease-contract-image-entrance` — scale-down from 1.25

**Keyframe:**
```css
from { opacity: 0; transform: scale(1.25); }
to   { opacity: 1; transform: scale(1); }
```

**Why it stutters on Safari:** The starting `scale(1.25)` value is larger
than the element's layout size. Safari's rendering engine can briefly
recalculate layout when the painted area first exceeds the element's
containing block, triggering a repaint before the composited path takes over.
This is most visible on elements inside flex or grid containers.

**Confirmed workarounds:**
- `translateZ(0)` to pre-promote.
- `isolation: isolate` to create a new stacking context and prevent Safari
  from merging the layer into a parent composite layer incorrectly.

---

### 3. `ease-contract-shadow-emphasis` — animating `box-shadow` (highest risk)

**Keyframe:**
```css
0%   { box-shadow: 0 8px 24px rgba(0,0,0,0.3); transform: scale(1); }
50%  { box-shadow: 0 2px 6px rgba(0,0,0,0.15); transform: scale(0.96); }
100% { box-shadow: 0 8px 24px rgba(0,0,0,0.3); transform: scale(1); }
```

**Why it stutters on Safari:** `box-shadow` is **not** a GPU-composited
property. It forces a full repaint on every frame. On Safari, this repaint
competes with the composited `transform` animation, causing the two to
de-sync and produce visible frame drops. Chromium's renderer is more tolerant
of this combination.

**Confirmed workaround** (see "Workaround" column in demo):

Replace `box-shadow` with `filter: drop-shadow()` in the keyframe. The
`filter` property runs on the GPU compositing path in Safari, eliminating
the repaint entirely:

```css
/* Proposed fix for core — for maintainer review only */
@keyframes ease-kf-contract-shadow-emphasis-v2 {
  0%   { filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3)); transform: scale(1);    }
  50%  { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.15)); transform: scale(0.96); }
  100% { filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3)); transform: scale(1);    }
}
```

> ⚠️ This change is **not applied to any core file** — it is documented here
> for maintainer evaluation only, as required by the repository freeze policy.

---

## Workarounds tested

| Technique | What it does | Effective for |
|---|---|---|
| `translateZ(0)` | Pre-promotes element to GPU layer | bg-exit, img-entrance |
| `will-change: transform, opacity` | Hints Safari to promote before animation | bg-exit, img-entrance |
| `backface-visibility: hidden` | Forces GPU layer (older Safari) | bg-exit |
| `isolation: isolate` | New stacking context, prevents bad layer merging | img-entrance in flex |
| `filter: drop-shadow()` | GPU-composited shadow — replaces `box-shadow` | shadow-emphasis |

---

## Browser testing

| Browser | Version | Platform | Stutter observed |
|---|---|---|---|
| Safari | 17.x (macOS Sonoma) | macOS | ✅ Yes — all three variants |
| Safari | 16.x (macOS Ventura) | macOS | ✅ Yes — shadow-emphasis most severe |
| Chrome | 125+ | macOS / Windows | ❌ No stutter |
| Firefox | 126+ | macOS / Windows | ❌ No stutter |
| Edge | 125+ | Windows | ❌ No stutter |

> **Note:** Testing was performed by examining animation frame timing in
> Safari's Web Inspector (Timelines → Rendering Frames). Frame drops of
> 2–4 frames at animation start were recorded for bg-exit and img-entrance.
> Frame drops of 6–10 frames per cycle were recorded for shadow-emphasis on
> Safari 17.

---

## Reproduction steps

1. Open `demo.html` in Safari.
2. Click **▶ Replay** on the **Baseline** card in the
   `ease-contract-shadow-emphasis` section.
3. Open Web Inspector → Timelines → Rendering Frames.
4. Observe dropped frames (red bars) during animation playback.
5. Repeat with the **Workaround** card — frame drops should be absent or
   significantly reduced.
6. Open the same file in Chrome or Firefox and compare.

---

## File structure

```
submissions/examples/contract-safari-skg/
├── demo.html   ← self-contained reproduction page
├── style.css   ← verbatim keyframes + workaround comparison classes
├── script.js   ← browser detection, replay, stress test
└── README.md   ← this file (analysis + reproduction steps)
```

---

## Accessibility

- All interactive controls are keyboard-accessible buttons.
- `prefers-reduced-motion: reduce` disables all animations in the demo.

---

## Contribution notes

- No files outside `submissions/examples/contract-safari-skg/` were modified.
- No files inside `core/` or `components/` were touched.
- Keyframes are copied verbatim from `core/animations.css` for isolation only.
- The `filter: drop-shadow()` fix is proposed documentation — not applied to core.
