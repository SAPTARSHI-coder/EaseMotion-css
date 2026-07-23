# CSS Zoom-In Popover for E-Commerce Checkout Layouts

A pure CSS, fully responsive, and keyboard-accessible Popover component designed for E-Commerce Checkout flows (e.g., applying Promo Codes, viewing tooltip details). It features a delightful zoom-in scale animation and clean, trustworthy e-commerce styling.

## 🌟 Key Features

- **Zoom-In Animation**: Transitions smoothly from a smaller scale (e.g., `0.85`) to full size (`1.0`) while fading in. It utilizes a `cubic-bezier` timing function with a slight bounce to create a tactile, snappy interaction.
- **E-Commerce Checkout Aesthetics**: Designed to look like a modern checkout flow (similar to Shopify). It uses high-contrast typography, solid borders, subtle shadows, and clear call-to-action buttons.
- **Pure CSS State Management**: Managed purely through CSS using `:focus-within` and `:hover`. No JavaScript event listeners or state variables are required.
- **Keyboard Accessible**: Tabbing to the "Apply Promo Code" button reveals the popover. The popover remains safely open as long as the user tabs into the input field or the inner "Apply" button.
- **Custom Properties (API)**: Easily modify the interaction style via standard CSS custom properties on the `:root` element.

---

## 🛠️ Custom Properties (API)

The component is highly customizable. By overriding the following CSS variables at the `:root` level, you can completely change the feel of the animation without touching the core logic.

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `0.3s` | Duration of the zoom-in animation. |
| `--popover-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function. The default provides a snappy, bouncy pop effect. |
| `--popover-scale-start` | `0.85` | The starting scale factor of the popover before it transitions to `1`. |
| `--popover-offset-x` | `-16px` | The initial horizontal `X` offset to perfectly align the popover arrow with the trigger text. |
| `--popover-offset-y` | `12px` | Vertical space between the trigger button and the top of the popover panel. |

### Example: Customizing the Animation
If you want a subtle, non-bouncy zoom effect:
```css
:root {
    --popover-timing: 0.2s;
    --popover-easing: ease-out;
    --popover-scale-start: 0.95; /* Less dramatic scale */
}
```

---

## 🚀 How It Works (The CSS Magic)

Building an interactive, accessible popover without JavaScript requires leveraging CSS pseudo-classes effectively. 

### State Management
The core logic revolves around this CSS selector block:
```css
.popover-container:hover .popover-content,
.popover-container:focus-within .popover-content {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}
```
1. **`:hover`**: When a mouse user hovers over the container (which includes both the trigger button and the popover itself), the popover becomes visible.
2. **`:focus-within`**: This is the crucial part for accessibility. It triggers when the container *or any of its descendants* receives focus. When a user tabs to the trigger link, it opens. When they press tab again to type in the Promo Code input, the container *still* has focus within it, keeping the popover open.

### The Animation
Instead of animating `display` (which is historically tricky in CSS), we animate `visibility`, `opacity`, and `transform`.
* `visibility: hidden` ensures the popover cannot be clicked or tabbed into when closed.
* Upon triggering, `visibility` becomes `visible` instantly, while `opacity` and `transform` smoothly transition over `--popover-timing`.

---

## 📱 Responsive Behavior

Checkouts need to be flawless on mobile devices. This component adapts elegantly:

- **Desktop ( > 800px )**: The checkout form and summary sit side-by-side. The popover anchors to the right of the summary line.
- **Mobile ( <= 800px )**: 
  - The grid collapses to a single column.
  - The Order Summary (and the Promo popover) intelligently moves *above* the shipping form via `order: -1`, which is a standard e-commerce mobile pattern.
  - The popover expands to `width: 100%` to fill the available space nicely on small screens, recalculating the arrow position seamlessly.

---

## 💻 Usage Instructions

To implement this in your own project:

1. Copy the HTML structure from `demo.html`, ensuring you maintain the `.popover-container` wrapping logic.
2. Ensure the trigger element (e.g., `<button class="popover-trigger">`) is focusable.
3. Place `.popover-content` inside the container as a sibling to the trigger.
4. Copy the relevant styles from `style.css` (specifically the Variables and Popover Component Implementation sections).
