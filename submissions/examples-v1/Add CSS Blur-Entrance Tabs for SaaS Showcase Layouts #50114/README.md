# CSS Blur-Entrance Tabs for SaaS Showcase Layouts

A pure CSS tab component designed specifically for modern SaaS (Software as a Service) dashboards. It features a premium "Blur-Entrance" interaction transition, simulating a cinematic camera focus effect often found in native applications.

## Features

- **Pure CSS Operations**: No external JavaScript frameworks required. Utilizes the native `<input type="radio">` and `:checked` pseudo-class architecture for reliable state management.
- **Blur-Entrance Transition**: Content panels start out-of-focus (`filter: blur(12px)`) and slightly scaled down (`transform: scale(0.98)`). Upon selection, they smoothly resolve into sharp focus, providing an incredibly polished UI feel.
- **SaaS Interface Aesthetic**: Designed to replicate high-end analytics dashboards. Uses a clean pill-shaped navigation container, crisp `Inter` typography, robust data metric cards, and a calming blue primary palette (`#2563eb`).
- **Fully Responsive**: Adapts flawlessly across breakpoints. On mobile, the horizontal pill navigation automatically converts into a vertically stacked menu while retaining the fluid sliding active indicator.
- **Keyboard Accessible**: Focus management is completely operational via standard `Tab` and Arrow keys, relying on semantic `<label>` routing.

## Customization

The blur depth and transition properties can be globally adjusted inside the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Blur Dynamics */
  --tab-blur-start: 12px;
  
  /* Interaction Parameters */
  --tab-transition-duration: 0.6s;
  --tab-transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## How It Works

- Absolute positioning is used to stack the `.tab-panel` elements exactly over each other inside a relative `.tabs-content` container.
- Unselected panels hold a state of `opacity: 0`, `visibility: hidden`, and `filter: blur(var(--tab-blur-start))`.
- When the corresponding `radio` input becomes checked, the sibling selector `~` overrides these properties to clear the blur (`blur(0)`) and restore opacity (`opacity: 1`).
- The `transition` property handles the smooth interpolation between the blurred and sharp states.

## Usage Instructions

1. Open `demo.html` in any modern web browser.
2. Click between "Dashboard", "Integrations", and "Billing" to witness the Blur-Entrance transition.
3. Resize your browser window to observe how the tabs navigation gracefully collapses into a mobile-friendly vertical stack.
