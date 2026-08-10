# Pure CSS SaaS Pricing Elastic Tooltip

A highly responsive, zero-JavaScript tooltip component utilizing custom attributes and standard CSS variables to achieve an interactive spring-back slide movement.

## 🛠️ How It Works
* **Zero JS Blueprint**: Utilizes the HTML5 `data-tooltip` attribute mapped into a CSS pseudo-element (`::after`), eliminating overhead scripts completely.
* **Elastic Slide**: Interpolates values from a pre-configured `cubic-bezier(0.68, -0.6, 0.32, 1.6)` ease configuration to give an intentional bounce upon entry.
* **Keyboard Accessible**: Binds focus flags through `:focus-within` selectors alongside standard `tabindex="0"` setups to keep keyboard accessibility intact.

## ⚙️ Customization Tokens
You can easily adjust the theme behavior by overriding these root tokens inside your template structure:

```css
:root {
  --ease-speed-medium: 350ms; /* Speed of expansion scale */
  --ease-elastic: cubic-bezier(...); /* Elastic curve geometry */
  --tooltip-bg: #1e293b; /* Background box fill */
}
