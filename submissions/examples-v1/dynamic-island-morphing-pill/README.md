# Dynamic Island (Morphing Pill)

A purely CSS-driven component that mimics modern smartphone "Dynamic Island" notification cutouts. It begins as a compact pill and morphs into a fully expanded card with smooth bezier transitions—using absolutely no JavaScript.

## 🚀 How it works

The component leverages the **CSS Checkbox Hack** (`:checked` pseudo-class) combined with a `<label>` element that acts as the physical card.
When a user clicks the card, it invisibly toggles the checkbox, triggering the `width`, `height`, `border-radius`, and `opacity` transition states across the container and its children.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.

```html
<div class="ease-dynamic-island">
  <input type="checkbox" id="island-toggle" class="island-toggle-hack" />
  <label for="island-toggle" class="island-morph-container">
    <div class="island-compact-state">...</div>
    <div class="island-expanded-state">...</div>
  </label>
</div>
```

## ✨ Why it fits EaseMotion CSS

EaseMotion is all about animation-first, highly responsive design. This component perfectly demonstrates how developers can achieve complex, high-fidelity UI morphing animations purely through CSS transitions, avoiding the heavy payload of JavaScript animation libraries.
