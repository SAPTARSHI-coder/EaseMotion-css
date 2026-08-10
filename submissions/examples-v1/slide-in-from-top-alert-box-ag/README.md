# Slide-in from Top Alert Box Example

## What does this example do?
This example demonstrates a self-contained, responsive Alert Box component that smoothly enters the viewport from the top of the screen using a CSS `slide-down` animation when the page loads.

## How is it used?
You can apply the slide-in animation by adding the `.ease-slide-down-in` utility class to your alert container element. 

```html
<div class="alert success ease-slide-down-in">
    <span class="icon">✔</span>
    <div class="message">Your changes have been saved successfully.</div>
</div>
```

The example also demonstrates how to stack multiple alerts and apply a slight animation delay (e.g., `style="animation-delay: 0.2s;"`) to create a cascading entrance effect.

## Why is it useful?
Alert boxes (or "Toasts" when anchored to a screen edge) are a fundamental UI pattern for providing non-disruptive feedback. By anchoring the alert to the top of the screen and sliding it down into view, you capture the user's attention gracefully without jarring layout shifts. This implementation uses highly performant CSS animations (`transform` and `opacity`) and fully respects user accessibility preferences (`prefers-reduced-motion: reduce`).
