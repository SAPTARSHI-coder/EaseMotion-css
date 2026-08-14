# CSS Typewriter Text Feature

An animation that reveals text character by character, simulating a mechanical typewriter for the EaseMotion library, fully addressing feature request issue `#71727`.

## 🚀 Features

- **Class Selector:** Applied directly to `.ease-typewriter`.
- **Text Constraints:** Utilizes `white-space: nowrap` and `overflow: hidden`.
- **Steps Timing:** Animate width from `0` to `100%` using `steps(35, end)` timing function.
- **Blinking Cursor:** Includes a blinking cursor implemented via `border-right` and keyframes.

## 🛠️ Usage Example

```html
<div class="em-typewriter-wrapper">
    <h2 class="ease-typewriter" aria-label="Simulated Typewriter Text">
        Building the future of web animations...
    </h2>
</div>
