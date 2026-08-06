
## 🚀 How It Works (The Label Trick)

Instead of using JavaScript to listen for clicks, this component uses a native HTML feature:
1. A hidden `<input type="file" id="file-upload">` is placed in the DOM.
2. The entire upload box is wrapped in a `<label for="file-upload">`.
3. When a user clicks *anywhere* inside the label (or the button), the browser automatically triggers the hidden file input, opening the native file picker.

## 🎨 Customization

Open `style.css` and modify the `:root` variables to match your brand:

```css
:root {
  --accent-primary: #6366f1;    /* Main brand color (Indigo) */
  --accent-hover: #4f46e5;      /* Darker shade for hover states */
  --accent-light: rgba(99, 102, 241, 0.1); /* Subtle background tint */
  --card-bg: #ffffff;           /* Box background color */
}