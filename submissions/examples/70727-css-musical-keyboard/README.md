# CSS Musical Keyboard

A responsive piano keyboard component built with HTML and Vanilla CSS,
featuring tactile key-press animations and accessible keyboard controls.

## ✨ Features

- Piano-style white and black keys
- CSS press-down animation
- Hover interaction
- Keyboard focus states
- Native button semantics
- Responsive layout
- Dark-mode compatible design
- Reduced-motion support
- No external dependencies
- No JavaScript required

## 🎹 Keyboard Layout

The demo contains:

- C
- D
- E
- F
- G
- A
- B
- High C

and the corresponding sharp notes.

Keyboard hints are shown directly on the keys to make the component
easy to understand.

## 🎨 Interaction

Each key uses CSS transforms and shadows to simulate a physical
piano key being pressed.

```css
.white-key:active {
  transform: translate3d(0, 6px, 0);
}

.black-key:active {
  transform: translate3d(0, 5px, 0);
}