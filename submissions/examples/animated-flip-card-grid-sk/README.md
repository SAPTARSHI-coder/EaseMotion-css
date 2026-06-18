# Animated Flip Card Grid

A responsive grid of 3D flip cards (3x2 layout) that reveal back-face content on hover. Uses CSS `perspective` and `rotateY` transforms for a smooth card flip effect. Created by @saurabhhhcodes.

## Features

- Pure CSS 3D card flips (no JavaScript)
- 3x2 grid layout, responsive to 2 columns and 1 column
- Each card flips on hover to show team member bio
- Smooth 0.6s `cubic-bezier` transition
- BEM naming throughout
- Color-coded avatar initials

## Usage

Include `style.css` and structure your cards with `.flip-card` > `.flip-card__inner` > `.flip-card__front` / `.flip-card__back`. The hover state triggers the 180-degree Y-axis rotation.
