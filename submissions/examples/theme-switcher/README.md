# Theme Switcher

A multi-theme switcher component using CSS custom properties — pure CSS.

## Features
- Four themes: Light, Dark, Neon, Sepia
- Uses CSS :has() selector for theme toggling
- CSS custom properties for all themed values
- Smooth transition between themes
- Expressive color schemes

## Usage
```html
<input type="radio" name="theme" id="light" checked><label for="light">Light</label>
```
Themes are defined via `body:has(#themeId:checked)` selectors.

## Browser Support
- Chrome 105+, Firefox 121+, Safari 15.4+

## Tech Stack
- HTML + CSS only, no JavaScript
