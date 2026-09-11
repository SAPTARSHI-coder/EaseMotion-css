# CSS-only Toggle with Pastel Styling

A soft, playful toggle switch built completely without Javascript, utilizing the CSS Checkbox Hack and soft pastel color palettes.

## Features
- Pure CSS state management (`:checked` pseudo-class)
- Playful pastel color transitions (Pink for Off, Mint for On)
- Spring-like physics for the toggle thumb movement (`cubic-bezier` timing)
- Cute CSS-only animated face on the thumb (sleeping when off, awake when on)
- Fully accessible label linking and user-select protection

## Usage
Include `demo.html` and `style.css` in your project. The toggle state relies strictly on the `.toggle-input` checkbox being wrapped by a `<label>`, which naturally forwards click events. No JS is required!
