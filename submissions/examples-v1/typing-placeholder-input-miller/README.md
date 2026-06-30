# Animated Typing Placeholder Input

An input field with a typing animation that cycles through placeholder
suggestions. Text appears character-by-character with a blinking cursor,
then erases and moves on to the next suggestion — mimicking a real typing
effect for a more engaging search or onboarding experience.

## Files
- `demo.html` - Working demo with 4 cycling suggestions
- `style.css` - Component styles
- `README.md` - This file

## Usage

```html
<div class="ease-typing-input">
  <input type="text" class="ease-typing-input-field" aria-label="Search">
  <span class="ease-typing-placeholder" id="typing-placeholder"></span>
</div>
```

Add the typing/erasing JS loop (included in `demo.html`) with your own
array of suggestion strings:

```js
const suggestions = [
  "Search anything...",
  "Try 'animated buttons'...",
  "Explore CSS components...",
  "Find your next idea..."
];
```

## How it works
- `.ease-typing-placeholder` is an absolutely positioned overlay span sitting
  on top of the empty input, styled to look like native placeholder text.
- JS types each suggestion into the span character-by-character, pauses,
  erases it, then moves to the next suggestion in a loop.
- A CSS `::after` pseudo-element renders a blinking `|` cursor next to the
  animated text via `@keyframes`.
- Once the user starts typing into the real input, the overlay is cleared
  and the animation stops so it doesn't overlap with user input.

## Features
- Pure CSS blinking cursor animation
- Lightweight JS loop for the typing/erasing effect
- Easily customizable suggestion list
- Ideal for search bars, AI tools, onboarding screens, and landing pages
- Animation pauses automatically when the user types
