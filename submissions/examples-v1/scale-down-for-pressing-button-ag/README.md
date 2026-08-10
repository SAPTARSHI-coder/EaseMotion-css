# Scale-Down for Pressing Button

## What does this example do?
This example demonstrates a tactile, squishy button interaction. When the user clicks or taps the button (or presses Space/Enter while focused), the button smoothly scales down, simulating the physical depression of a real button. It returns to its normal size when released.

## How is it used?
The effect is achieved using CSS `transition` and the `:active` pseudo-class to manipulate the `transform: scale()` property.

1.  **Define the Base State and Transition:**
    Apply a `transition` to the `transform` property of the button.
    ```css
    .action-button {
        /* ... styling ... */
        will-change: transform;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    ```

2.  **Define the Hover State (Optional but recommended):**
    Providing a slight lift on hover makes the subsequent press feel more impactful.
    ```css
    .action-button:hover {
        transform: translateY(-2px);
    }
    ```

3.  **Define the Active (Pressed) State:**
    Use the `:active` pseudo-class, which triggers during the physical click/tap down phase. Scale the button down below 1 (e.g., `0.92`). It's also recommended to speed up the transition slightly for the press down phase to make it feel snappier.
    ```css
    .action-button:active {
        transform: scale(0.92) translateY(0);
        /* Faster transition for the "press down" action */
        transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    ```

## Why is it useful?
- **Tactile Feedback:** Providing immediate, physical-feeling feedback confirms to the user that their click registered, preventing them from rage-clicking if a network request takes a moment to process.
- **Zero JavaScript:** The `:active` state is handled entirely by the browser engine natively.
- **Accessibility:** 
  - Using a semantic `<button>` ensures the `:active` state triggers correctly not just on mouse clicks and touch taps, but also when keyboard users press `Space` or `Enter`.
  - A clear focus ring (`:focus-visible`) is provided.
  - A `@media (prefers-reduced-motion: reduce)` block elegantly disables the `transform` transitions, ensuring the button remains static when pressed for users with motion sensitivity, while preserving background color changes.
