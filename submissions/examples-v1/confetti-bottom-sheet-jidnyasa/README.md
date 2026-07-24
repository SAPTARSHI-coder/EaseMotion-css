# Confetti Bottom Sheet — Jidnyasa

## What does this do?

This submission presents a JavaScript-free completion bottom sheet that slides up from the viewport and launches a short confetti celebration.

## How is it used?

The open state is stored in a native checkbox. A label opens the sheet, while the backdrop and primary action close it.

```html
<label class="launch-trigger" for="sheet-state">
  Complete launch
</label>

<input class="sheet-state" type="checkbox" id="sheet-state">

<label class="sheet-scrim" for="sheet-state">
  <span class="visually-hidden">Close completion sheet</span>
</label>

<section class="celebration-sheet">
  <div class="confetti-field" aria-hidden="true">
    <i style="--x:15%;--delay:.18s;--turn:-390deg;--tone:#ffd166"></i>
  </div>

  <h2>Release 2.4.0 is live</h2>

  <label class="sheet-actions__primary" for="sheet-state">
    Done
  </label>
</section>
```

Important customization values are grouped at the top of `style.css`:

```css
:root {
  --sheet-motion: 640ms;
  --sheet-ease: cubic-bezier(.2, .85, .25, 1);
  --paper: #f6f2ea;
  --violet: #6758e8;
  --green: #19a878;
}
```

Open `demo.html` directly in a browser. The component does not require JavaScript, a build step, a CDN, or external assets.

## Why is it useful?

Bottom sheets work well for completion messages, mobile confirmations, rewards, onboarding milestones, and status receipts. This version demonstrates EaseMotion's philosophy by combining one focused entrance transition with a brief decorative animation while preserving a meaningful static state for reduced-motion users.

## Accessibility notes

- The trigger and close actions are keyboard-focusable labels.
- The background scrim has a hidden descriptive label.
- Confetti is decorative and hidden from assistive technology.
- The main message remains understandable without animation.
- `prefers-reduced-motion` removes the slide transition and confetti.
- The layout stacks cleanly on narrow screens.

## Manual checks

1. Open `demo.html` directly.
2. Activate **Complete launch**.
3. Confirm the sheet enters from the bottom and confetti runs once.
4. Activate **Done** or the backdrop to close it.
5. Navigate with the keyboard and verify visible focus rings.
6. Test at mobile width.
7. Enable reduced motion and verify the static fallback.
