# Cursor Spotlight Card

A lightweight pointer-following spotlight effect for cards.

## What does it do?

The card displays a soft radial spotlight that follows the user's pointer across its surface. The spotlight position is controlled through CSS custom properties, while a small amount of JavaScript updates those values from pointer coordinates.

Multiple cards can be placed together and each card tracks its own pointer independently.

## How do I use it?

Add the card markup:

```html
<article class="spotlight-card">
  <div class="spotlight-card__content">
    <span class="spotlight-card__eyebrow">Motion</span>
    <h2>Cursor Spotlight</h2>
    <p>
      Move your pointer across the card to reveal the interactive light.
    </p>
  </div>
</article>
```
Then include the provided CSS and pointer-position JavaScript.

The effect relies on these CSS custom properties:

.spotlight-card {
  --spotlight-x: 50%;
  --spotlight-y: 50%;
}

The JavaScript updates them according to the pointer position:

card.style.setProperty("--spotlight-x", `${x}px`);
card.style.setProperty("--spotlight-y", `${y}px`);
Why use it?

Cursor Spotlight Card can add subtle depth and interaction to:

Feature cards
Portfolio sections
Product cards
Dashboard panels
Landing pages
Interactive galleries

The implementation is self-contained and does not require external libraries or assets.

It also includes a prefers-reduced-motion fallback for users who prefer reduced motion.


### After saving all 3 files

Open `demo.html` directly in your browser and test all three cards.

**Do not commit yet.** First make sure:

- spotlight follows the cursor;
- each card works independently;
- cards reset when the pointer leaves;
- mobile layout works;
- no external resources are required.

Then send me a screenshot/result, and we'll do the validation → commit → push → PR sequence.