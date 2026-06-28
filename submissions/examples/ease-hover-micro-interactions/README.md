# Hover Micro-Interactions Proposal (`ease-hover-micro-interactions`)

A proposal for `core/utilities.css` providing simple, drop-in utility classes for common hover micro-interactions.

## 🚀 Features

- **`.em-hover-lift`**: Moves the element up slightly and increases its box-shadow to simulate elevation.
- **`.em-hover-scale`**: Enlarges the element seamlessly to draw focus.
- **`.em-hover-glow`**: Applies a soft, glowing box-shadow around the element.
- **Accessible & Motion Safe**: Keyed to both `:hover` and `:focus-visible` for keyboard users, and fully respects `prefers-reduced-motion: reduce`.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can apply the proposed classes to any element:

```html
<button class="em-hover-scale">
  Hover me!
</button>

<div class="em-hover-lift">
  Card content
</div>
