# Card Accent Variants

This submission implements and demonstrates the missing `.ease-card-accent-info` and `.ease-card-accent-secondary` color border accent modifier classes for EaseMotion CSS cards.

---

## What It Does

- Adds support for **Info** (`cyan/blue`) accents to highlight informational or system statuses.
- Adds support for **Secondary** (`slate/gray`) accents to represent neutral, archived, or disabled card structures.

Both variants are applied via a clean side-border visual accent line:

```css
/* Info Accent */
.ease-card-info .card-accent-line {
  background-color: var(--info-color);
}

/* Secondary Accent */
.ease-card-secondary .card-accent-line {
  background-color: var(--secondary-color);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe three cards: the standard Primary card, the newly introduced Info card (cyan accent), and the newly introduced Secondary card (gray/slate accent).
3. Hover over the cards — verify clean translateY lift transformations.
