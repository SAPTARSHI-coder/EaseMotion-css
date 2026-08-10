# CSS Confetti Button (`ease-confetti-button`)

## 1. What does this do?
The **CSS Confetti Button** delivers a vibrant, multi-directional confetti explosion animation triggered entirely on click without relying on any JavaScript.

## 2. How is it used?
It utilizes the **CSS Checkbox Hack**:
- A hidden `<input type="checkbox">` (`.ease-confetti-trigger`) acts as the state holder.
- A `<label>` (`.ease-confetti-btn`) bound to the checkbox input acts as the interactive trigger button.
- When clicked, the checkbox transitions to the `:checked` state, causing the general sibling combinator (`~`) selector `.ease-confetti-trigger:checked ~ .ease-confetti-btn .ease-confetti-particle` to launch keyframe animations on child particle elements.

## 3. Why is it useful?
- **Zero JavaScript Overhead**: Animates smoothly purely via CSS keyframes and pseudo-classes.
- **Custom Trajectories via CSS Variables**: Utilizing CSS Custom Properties (`--tx`, `--ty`, `--c`) directly within keyframe `transform` functions allows each particle to have unique travel paths and colors without complex JS coordinate calculations or dynamic DOM injection.
- **Performance Optimized**: GPU-accelerated transforms (`translate`, `scale`, `rotate`) ensure 60fps animations with minimal main-thread processing.
