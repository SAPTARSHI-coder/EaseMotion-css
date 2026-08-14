# CSS Auto-Growing Inputs (`ease-auto-growing-input`)

A demonstration of the modern CSS `field-sizing: content` property, allowing form fields to automatically resize based on user input without requiring any JavaScript.

## 🚀 Features & EaseMotion Showcase

- **Zero JS Auto-Resize**: Textareas and inputs expand natively based on typed content length or line breaks.
- **Accessible Design**: Includes clear `:focus` and `:focus-visible` styling (conforming to our strict accessibility guidelines).
- **Responsive Guardrails**: Utilizes `min-width` and `max-width` to prevent fields from collapsing when empty or breaking layouts when excessively long.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<!-- Input that grows horizontally -->
<input type="text" class="ease-auto-grow" placeholder="Type here..." />

<!-- Textarea that grows vertically -->
<textarea class="ease-auto-grow" placeholder="Type multiple lines..."></textarea>
