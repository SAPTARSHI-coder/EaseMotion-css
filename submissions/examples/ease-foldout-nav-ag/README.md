# Fold-out Navigation

A sidebar navigation menu that folds out like an accordion purely with CSS.

## Preview

Open `demo.html` in your browser and click on the "Menu" header to see the fold-out effect.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the "checkbox hack" using an `<input type="checkbox">` and `<label>`.
- **Smooth Animation:** Uses CSS transitions on `max-height` to achieve the fold-out effect without knowing the exact height beforehand.
- **Staggered Entrance:** Child items animate in with a staggered delay when the menu is opened.
