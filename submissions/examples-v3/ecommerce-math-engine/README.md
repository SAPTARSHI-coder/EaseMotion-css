# Pure CSS E-Commerce Product Customizer (Math Engine)

A fully functional, interactive E-Commerce product configuration UI built completely without JavaScript. 

## 🚀 How it works

This component proves that CSS is capable of acting as a mathematical state-engine for UI applications.

1. **State Management**: Hidden HTML radio buttons and checkboxes hold the user's interactive state.
2. **Image Logic**: Sibling combinators trigger a smooth, hardware-accelerated crossfade of the product image when color swatches (radio buttons) are clicked.
3. **Math Engine**: The container initializes `counter-reset: total_price 199`. As the user selects add-ons (checkboxes), the CSS applies `counter-increment` to mathematically add values to the base price natively.
4. **Output Rendering**: The dynamically calculated integer sum is rendered to the DOM synchronously via the `content: "$" counter(total_price);` pseudo-element property.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.

## ✨ Why it fits EaseMotion CSS

In modern web development, developers default to loading heavy JS frameworks (like React or Vue) just to manage simple pricing states on marketing pages. This component aligns perfectly with EaseMotion's zero-dependency philosophy by proving that advanced UI state-management, conditional rendering, and even mathematical calculation can be offloaded entirely to the browser's native CSS rendering engine.
