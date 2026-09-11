# CSS Typewriter Delete Retype

A pure CSS typewriter animation that types a phrase, pauses,
deletes it, and then types another phrase.

## Features

- Pure CSS implementation
- No JavaScript required
- Multiple rotating phrases
- Type and delete animation
- Gradient text
- Animated cursor effect
- Responsive design
- Keyboard-safe page structure
- Reduced-motion support

## Files

- `demo.html` — Typewriter animation markup
- `style.css` — Animation and responsive styles

## How It Works

The animation uses CSS `@keyframes` together with `steps()`.

```css
.word-one {
  animation: type-one 12s steps(21, end) infinite;
}