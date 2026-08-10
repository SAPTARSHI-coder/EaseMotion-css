# Pure CSS 3D Parallax Tilt Card (Hover Grid Technique)

An `.ease-parallax-card` component that tilts smoothly in 3D space toward the user's cursor as they hover over different quadrants of the card, built entirely without JavaScript.

## Why is this useful?
3D tilt effects (like vanilla-tilt.js) are highly requested for modern portfolios and NFTs. Creating this effect using the pure CSS "hover grid" technique is a fantastic demonstration of intermediate CSS architecture. It provides a heavy-hitting, premium interaction while keeping the DOM lightweight and script-free.

## How it works
1. **Parent wrapper (`.ease-parallax-card-container`)**: Uses `perspective: 1000px` to establish a 3D space.
2. **Hover Grid (`.tracker`)**: A grid of 9 invisible `<div>` elements absolutely positioned over the card, acting as tracking zones (top-left, top-center, top-right, etc.).
3. **Card (`.ease-parallax-card`)**: The actual card content below the grid uses `transform-style: preserve-3d` and a smooth transition (`transition: transform 0.5s ease`).
4. **General Sibling Combinator (`~`)**: Used to apply specific `rotateX` and `rotateY` transforms to the card depending on which invisible grid zone is currently being hovered.
