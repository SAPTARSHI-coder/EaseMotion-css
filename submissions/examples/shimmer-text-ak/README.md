# shimmer-text-ak

A pure CSS animated shimmer effect for text — no JavaScript required.

## What it does

A bright highlight sweeps continuously across text using a moving gradient clipped to the text shape via `background-clip: text`. Supports colour variants and speed modifiers.

## How to use

```html
<!-- Default white shimmer -->
<h1 class="ease-shimmer-text">Hello World</h1>

<!-- Colour variants -->
<h2 class="ease-shimmer-text ease-shimmer-text--purple">Purple</h2>
<h2 class="ease-shimmer-text ease-shimmer-text--gold">Gold</h2>
<h2 class="ease-shimmer-text ease-shimmer-text--cyan">Cyan</h2>
<h2 class="ease-shimmer-text ease-shimmer-text--rose">Rose</h2>

<!-- Speed variants -->
<h2 class="ease-shimmer-text ease-shimmer-text--fast">Fast</h2>
<h2 class="ease-shimmer-text ease-shimmer-text--slow">Slow</h2>
```

## How to review

1. Open `demo.html` directly in browser — no server needed
2. All text should have a moving light sweep from left to right
3. Each row shows a different colour variant
4. Fast/Slow rows at bottom show speed modifiers working

## Classes

| Class | Description |
|---|---|
| `ease-shimmer-text` | Base — required |
| `ease-shimmer-text--purple` | Purple/violet shimmer |
| `ease-shimmer-text--gold` | Gold/amber shimmer |
| `ease-shimmer-text--cyan` | Cyan/teal shimmer |
| `ease-shimmer-text--rose` | Rose/pink shimmer |
| `ease-shimmer-text--fast` | 1s animation duration |
| `ease-shimmer-text--slow` | 4s animation duration |

## Implementation notes

- Uses `background-clip: text` + animated `background-position` — zero JS
- `prefers-reduced-motion` respected — animation pauses, static gradient shown
- Works on any text element: `h1`–`h6`, `p`, `span`, `a`
