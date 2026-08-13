# Morphing Button

## What does this do?
Provides a beautiful morphing button animation that transitions smoothly from a standard text button into a circular icon button to indicate a success state.

## How is it used?
```html
<button class="ease-morphing-button">
    <span class="text">Submit</span>
    <span class="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </span>
</button>
```

Add the `morphed` class to trigger the state change animation (e.g., using JavaScript upon a successful action).

## Why is it useful?
This interaction provides clear visual feedback and enhances the overall user experience by smoothly indicating success states or loading seamlessly within the button itself, which perfectly aligns with EaseMotion's dynamic and premium design philosophy.
