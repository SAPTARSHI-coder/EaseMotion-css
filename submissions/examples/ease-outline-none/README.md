# Outline None Utility Proposal (`ease-outline-none`)

A proposal for `core/utilities.css` adding a standard `.outline-none` utility class.

## 🚀 Features

- **`.outline-none`**: Visually removes the default browser focus outline ring from an element.
- **Accessible Implementation**: Uses `outline: 2px solid transparent !important;` instead of `outline: none;`. This visually hides the outline for standard users but preserves it for Windows High Contrast Mode users, ensuring accessibility isn't compromised.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Click or Tab through the buttons to see the default browser outline vs the removed outline.

You apply this class to any interactive element (buttons, inputs, links) where you wish to hide the default browser focus ring:

```html
<button class="outline-none custom-focus-style">
  Submit
</button>
```

**⚠️ Important Accessibility Note:**
You should *never* remove a focus outline without providing a custom alternative (like a `box-shadow` or background color change on `:focus-visible`). This utility is intended to clear the browser defaults so that designers can apply custom, animated, on-brand focus states!

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #15112
