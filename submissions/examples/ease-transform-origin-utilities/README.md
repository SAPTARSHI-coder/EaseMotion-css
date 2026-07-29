# Transform Origin Utilities (`ease-transform-origin-utilities`)

A demonstration of CSS `transform-origin` utilities, which allow developers to dictate the precise anchor point around which an element scales, rotates, or skews.

## 🚀 Features & EaseMotion Showcase

- **Fine-Grained Animation Control**: By default, CSS transforms happen from the `center` of an element. Using utilities like `.ease-origin-top-left`, you can make elements swing open like a door, scale down into a specific corner, or grow from the top edge.
- **Visual Demo**: This demo includes visual "anchor dots" to show exactly where the element is pinned down during its hover transition.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To change where an element scales from:
```html
<!-- Scales out from its top-left corner instead of the center -->
<div class="ease-origin-top-left">
  Hover me!
</div>
