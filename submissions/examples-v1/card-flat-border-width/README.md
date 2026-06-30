# Card Flat Border Width

Fix #3904: `.ease-card-flat` transparent border occupies 1px causing layout shift.

## Issue

`components/cards.css` defines:

```css
.ease-card-flat {
  border-color: transparent;
}
```

The `.ease-card` base sets `border: 1px solid var(--ease-color-neutral-200)`, so
`.ease-card-flat` only changes the color — the 1px width remains, causing a
sub-pixel layout shift when the class is toggled.

## Permanent Core Fix (for maintainer)

```css
/* components/cards.css .ease-card-flat */
.ease-card-flat {
  border-color: transparent;
  border-width: 0; /* eliminate 1px layout shift */
}
```

## Files

- `demo.html`
- `style.css`
- `README.md`
