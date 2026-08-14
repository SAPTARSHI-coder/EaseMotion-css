# Ease Memory Flip Game

A 3D memory card flip game powered by pure CSS 3D transforms and state logic, supported by a minimal JavaScript game referee.

---

## 1. What does this do?
This component implements an interactive 3D memory card flip matching game using hardware-accelerated CSS animations. Players click on cards to flip them in 3D space and find matching pairs of emojis.

---

## 2. How is it used?
The component utilizes native HTML checkbox inputs (`.ease-card-trigger`) combined with CSS `:checked` pseudo-selectors and `transform-style: preserve-3d` to control card flipping entirely within the DOM rendering pipeline:

- **State Flip**: When a card label is clicked, its corresponding hidden checkbox toggles state. CSS selects `:checked + .ease-card .ease-card-inner` to apply `transform: rotateY(180deg)`.
- **3D Card Structure**: Front and back faces use `backface-visibility: hidden` and `perspective: 1000px` on the board container for realistic depth.
- **JS Referee Logic**: A minimal JavaScript listener acts purely as a game referee. It tracks active selections, evaluates pair matches (adding `.is-matched`), and resets non-matching cards after a 1-second timeout.

---

## 3. Why is it useful?
Decoupling the visual rendering engine from the game state engine prevents layout thrashing and performance bottlenecks:

- **Hardware Acceleration**: CSS handles all 3D rotations, transitions, and hover states directly on the GPU (`rotateY`, `cubic-bezier` easing).
- **Lightweight JS Footprint**: JavaScript is restricted exclusively to referee functions (evaluating match state and resetting checkboxes), eliminating the need for heavy animation loop drivers or dynamic style recalculations.
- **Accessibility**: Includes a `prefers-reduced-motion` media query to disable transitions for users who prefer reduced motion.
