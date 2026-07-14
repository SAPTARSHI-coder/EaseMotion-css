# Copy Code Button

A lightweight, dependency-free Copy Code Button component built with HTML, CSS, and JavaScript. It allows users to copy code snippets to their clipboard with a single click while providing immediate visual feedback.

---

## Overview

When users interact with documentation, tutorials, or code examples, copying code manually can interrupt their workflow. This component solves that problem by providing a dedicated **Copy** button that copies the displayed code snippet directly to the clipboard.

After the copy operation succeeds, the button label temporarily changes from **Copy** to **Copied!**, giving users clear confirmation that the action was successful. After a short delay, the button automatically resets to its original state.

The component is completely standalone and works by simply opening `demo.html` in any modern browser.

---

## Features

- One-click copy to clipboard
- Instant visual feedback
- Automatically resets button text
- Uses the Clipboard API
- Lightweight implementation
- No dependencies
- Easy to customize
- Responsive layout
- Beginner-friendly code
- Works in modern browsers

---

## Folder Structure

```
copy-code-button/
│
├── demo.html
├── style.css
└── README.md
```

---

## Demo

Open `demo.html` directly in your browser.

The demo includes:

- A sample code snippet
- A Copy button
- Clipboard functionality
- Automatic button state reset

No build tools or local server are required.

---

## How It Works

1. The user clicks the **Copy** button.
2. JavaScript reads the code snippet.
3. The Clipboard API copies the text.
4. The button text changes to **Copied!**
5. After 1.5 seconds, the button text automatically changes back to **Copy**.

This provides immediate confirmation without requiring a page reload.

---

## Usage

```html
<pre id="generatedClass">
console.log("Hello, EaseMotion!");
</pre>

<button id="copyBtn">Copy</button>
```

```javascript
const generatedCodeEl = document.getElementById("generatedClass");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generatedCodeEl.textContent);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 1500);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
});
```

---

## Customization

You can easily customize:

- Button colors
- Font styles
- Border radius
- Transition duration
- Reset timeout
- Code block styling
- Spacing and layout

The functionality remains unchanged while the appearance can be adapted to match any project.

---

## Browser Support

| Browser | Supported |
|----------|-----------|
| Chrome | ✅ |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅* |

\* Clipboard functionality may require a secure context (HTTPS) depending on the browser.

---

## Why This Fits EaseMotion CSS

This example follows EaseMotion CSS principles by keeping the implementation:

- Simple
- Lightweight
- Easy to understand
- Easy to reuse
- Focused on improving user experience

It demonstrates a practical UI interaction that developers can integrate into documentation pages, code playgrounds, or developer tools.

---

## Possible Improvements

Some future enhancements could include:

- Copy icon
- Animated success icon
- Toast notification
- Multiple copy buttons
- Syntax highlighted code blocks
- Accessibility improvements
- Keyboard shortcuts

---

## Accessibility

The component is designed to be accessible by:

- Using semantic HTML
- Providing a clearly labeled button
- Keeping interaction straightforward
- Maintaining readable text contrast

Further improvements could include ARIA live regions for announcing copy success to screen readers.

---

## License

This example follows the license of the EaseMotion CSS repository.