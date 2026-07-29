# Character Count Field

A self-contained **textarea with live character-count feedback**. As the user
types, an animated bar fills, the counter updates, the field turns **amber**
near the limit, and **shakes + turns red** if the limit is exceeded.

> The repo's other "count" examples (`animated-counter-component`,
> `count-up-animation`, `ease-countdown-timer-ns`, …) are stat counters and
> countdown timers. This is the **form-input** character-counter pattern, which
> wasn't represented.

## Preview

Open `demo.html` in any browser and type into the textarea. The soft limit is
120 characters (the field allows a little overflow so you can see the
over-limit state).

## States

| State | Trigger | Visuals |
| ----- | ------- | ------- |
| Default  | Under ~85% of the limit | Accent-coloured fill bar |
| Warning  | Within 15% of the limit | Amber fill + amber counter |
| Over     | Past the limit | Red field, red bar, shake animation, negative count |

## Usage

```html
<div class="field" data-charfield data-max="120">
  <label class="field__label" for="bio">Short bio</label>
  <textarea id="bio" class="field__input" rows="4"
            maxlength="160" aria-describedby="bio-count"></textarea>

  <div class="field__meter" aria-hidden="true">
    <span class="field__meter-fill" data-fill></span>
  </div>

  <p class="field__count" id="bio-count" aria-live="polite">
    <span data-remaining>120</span> characters remaining
  </p>
</div>
```

Set the soft limit with `data-max`. The included script keeps the count, the
fill bar (`transform: scaleX(...)`), and the `is-warning` / `is-over` state
classes in sync. All colours and motion are handled in `style.css`.

## Files

```
char-count-field/
├── demo.html   ← Textarea + counter + inline counting helper
├── style.css   ← Self-contained styles and keyframes
└── README.md   ← This file
```

## Accessibility

- The counter is an `aria-live="polite"` region linked to the textarea via
  `aria-describedby`, so screen readers announce the remaining count.
- The over-limit state is conveyed by **text** (a negative number), not colour
  alone.
- Honours `prefers-reduced-motion: reduce`: transitions and the shake animation
  are disabled.

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅ |
| Firefox | ✅ |
| Safari  | ✅ |
| Edge    | ✅ |

## Why it's useful

Character-limited inputs are one of the most common form patterns, and good
limit feedback meaningfully improves form UX. This provides a lightweight,
accessible, drop-in implementation.

---

**Closes:** #3034
**Status:** Ready for review
