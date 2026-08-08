# Expand Modal Mixin

## Description
The `ease-expand-modal-mixin-ag` is an SCSS mixin designed for entrance animations on modals, popovers, tooltips, and dialogs. It scales the element up from 80% to 100% while fading it in, utilizing a default elastic cubic-bezier curve to give the modal a natural, physical "pop" when it appears.

## Installation
Copy `_expand-modal.scss` into your project's SCSS directory and import it where needed.

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `0.3s` | The duration of the expand animation. |
| `$timing` | String | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | The CSS timing function (default is a bouncy back-out). |
| `$delay` | Time | `0s` | The delay before the animation starts. |

## Usage Example

```scss
// Import the mixin
@use 'path/to/expand-modal' as *;

.my-dialog-container {
    // Basic modal styling
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    // Apply the mixin
    @include ease-expand-modal-mixin-ag(0.4s);
}
```

## Accessibility Considerations
- **Reduced Motion:** If a user has `prefers-reduced-motion: reduce` enabled in their system preferences, the mixin safely forces the animation to `none` and sets the opacity to `1` and scale to `1`, ensuring the modal appears instantly.
- **Performance:** Applies `will-change: transform, opacity` to ensure smooth hardware acceleration on lower-end devices.
