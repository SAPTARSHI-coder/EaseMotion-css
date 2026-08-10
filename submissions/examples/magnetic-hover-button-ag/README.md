# CSS Magnetic Hover Button

A smooth, pure CSS magnetic-style button hover animation using a multi-zone grid trigger system.

## 🌟 What the Magnetic Button Effect Is
The magnetic button effect simulates a physical "attraction" pull, where the button translates slightly toward the cursor as it hovers near or over the button boundaries.

## 🛠️ How it Works (CSS Hover Interaction)
Without JavaScript coordinate tracking, the attraction effect is achieved using a 3x3 grid of hidden, transparent overlay spans inside the button wrapper:
1. **Trigger Grid**: The parent clickable element acts as a 3x3 CSS grid container. It holds 9 absolutely positioned transparent trigger spans (`.magnetic-zone`).
2. **Sibling Selection**: The visual button (`.magnetic-button`) sits below the triggers. When one of the zones is hovered, we target the sibling visual button using the sibling selector `~` and apply a corresponding translation:
   - Hovering **Top-Left** triggers `translate(-12px, -10px)`
   - Hovering **Right** triggers `translate(16px, 0px)`
   - Hovering off returns the button to center `translate(0, 0)`

## 💫 Transform and Transition Physics
To make the magnetic pull feel organic and alive:
- We use a scale transformation `scale(1.08)` to add depth.
- We utilize EaseMotion's bounce token `cubic-bezier(0.34, 1.56, 0.64, 1)` (springy animation) for the `transform` transition. This creates a snapping, physical attraction force.

## 🚀 How to Use
Add the magnetic container and triggers inside a `<button>` wrapper:

```html
<button type="button" class="magnetic-container">
  <span class="magnetic-zone zone-tl" aria-hidden="true"></span>
  <span class="magnetic-zone zone-t" aria-hidden="true"></span>
  <span class="magnetic-zone zone-tr" aria-hidden="true"></span>
  <span class="magnetic-zone zone-l" aria-hidden="true"></span>
  <span class="magnetic-zone zone-c" aria-hidden="true"></span>
  <span class="magnetic-zone zone-r" aria-hidden="true"></span>
  <span class="magnetic-zone zone-bl" aria-hidden="true"></span>
  <span class="magnetic-zone zone-b" aria-hidden="true"></span>
  <span class="magnetic-zone zone-br" aria-hidden="true"></span>
  <span class="magnetic-button">Explore</span>
</button>
```

You can add theme modifier classes like `.theme-emerald` or `.theme-rose` to customize color profiles.

## ♿ Accessibility & Reduced-Motion
- **Keyboard Tab Navigation**: Since the container is a native `<button>`, it is fully focusable. When navigated via keyboard, a high-contrast focus ring appears around the visual button using `.magnetic-container:focus-visible .magnetic-button`.
- **prefers-reduced-motion**: Inside a `@media (prefers-reduced-motion: reduce)` block, all translations and scale transforms on hover are disabled, keeping the button static, readable, and functional.
