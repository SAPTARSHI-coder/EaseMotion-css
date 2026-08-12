# OTP Verification Input — `otp-verification-input-nk`

## 1. What does this do?

An animated 6-digit OTP/PIN verification input that auto-advances focus between digit boxes on entry, shakes all boxes simultaneously on a wrong code, and fires a drawn SVG checkmark with a scale-pop success burst on a correct code — all transitions driven by pure CSS keyframes and state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<!-- OTP digit group — add data-strength via JS -->
<div class="otp-group" id="otp-group" role="group" aria-label="6-digit code">
  <input class="otp-box" type="text" inputmode="numeric"
         pattern="[0-9]" maxlength="1" aria-label="Digit 1"
         autocomplete="one-time-code" />
  <input class="otp-box" type="text" inputmode="numeric"
         pattern="[0-9]" maxlength="1" aria-label="Digit 2" />
  <!-- ...repeat for digits 3–6... -->
</div>
```

### State classes

| Class / Attribute | Applied to | Effect |
|---|---|---|
| `:focus` (native) | `.otp-box` | Scale-up bounce + indigo border glow |
| `[data-filled]` | `.otp-box` | Soft filled background, lighter border |
| `.otp-box--error` | `.otp-box` | Red border + glow |
| `.otp-group--error` | `.otp-group` | Horizontal shake animation |
| `.otp-box--success` | `.otp-box` | Green border + glow + scale pop |
| `.otp-group--success` | `.otp-group` | Retained green state |
| `.otp-success--visible` | `.otp-success` | Reveals SVG checkmark with draw animation |

### JS bridge (minimal — only toggles classes and moves focus)

```js
// Wrong code → shake + error glow
group.classList.add('otp-group--error');
boxes.forEach(b => b.classList.add('otp-box--error'));

// Correct code → success burst
group.classList.add('otp-group--success');
boxes.forEach(b => b.classList.add('otp-box--success'));
successEl.classList.add('otp-success--visible');

// Auto-advance on digit entry
if (box.value && i < boxes.length - 1) boxes[i + 1].focus();

// Paste → fill all boxes instantly
text.split('').forEach((ch, idx) => {
  boxes[idx].value = ch;
  boxes[idx].setAttribute('data-filled', '');
});
```

All visual transitions — focus scale, error shake, success draw, entrance fade — are pure CSS. The JS only sets `data-filled`, moves focus, and toggles state classes.

---

## 3. Why is it useful?

OTP inputs are one of the highest-friction points in any authentication flow. Most implementations are plain static boxes with no feedback — users don't know if they mis-typed, are on the right box, or succeeded.

This component fits EaseMotion's philosophy because:

- **Motion communicates state.** The focus scale-bounce tells the user exactly which box is active. The shake says "wrong" without a word. The SVG draw says "done" in a way a toast never could.
- **CSS does the heavy lifting.** Every transition — the bounce pop on focus, the lateral shake on error, the circle-draw on success — is a CSS keyframe. The JS is ~60 lines and purely orchestrates DOM state; swap it for React `useState`, Alpine `x-bind`, or HTMX and the stylesheet works unchanged.
- **Accessible by default.** Each input has an `aria-label`. A `role="status"` live region announces state changes to screen readers. The group uses `role="group"` with a label. `prefers-reduced-motion` collapses all animation durations to near-zero.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.
- **Mobile-first.** `inputmode="numeric"` raises the numeric keypad on iOS/Android. Paste of a 6-digit code fills all boxes instantly. Responsive breakpoint at 380px shrinks boxes for small screens.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `otp-fade-up` | Card / hint on page load | Fade + slide up entrance |
| `otp-focus-pop` | Any `.otp-box:focus` | Bounce scale-up (1 → 1.12 → 1.08) |
| `otp-shake` | `.otp-group--error` | 7-step horizontal shake |
| `otp-success-pop` | `.otp-box--success` | Quick scale burst (1 → 1.18 → 1) |
| `otp-success-entrance` | `.otp-success--visible` | Scale + fade entrance for checkmark container |
| `otp-draw-circle` | SVG circle on success | Stroke-dashoffset draw from 166 → 0 |
| `otp-draw-check` | SVG check on success | Stroke-dashoffset draw from 48 → 0 |
| Shimmer sweep | Submit button on hover | Light sweep across gradient background |

---

## Files

```
submissions/examples/otp-verification-input-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```

### Demo credentials

- Correct code: **`123456`** → success checkmark + green burst
- Any other 6 digits → shake + error glow + boxes cleared
