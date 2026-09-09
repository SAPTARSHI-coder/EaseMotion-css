# White Space Utilities (`ease-white-space-utilities`)

A demonstration of the various CSS `white-space` utilities, which give developers granular control over how text wraps and how HTML handles consecutive spaces and line breaks.

## 🚀 Features & EaseMotion Showcase

- **Prevent Unwanted Wrapping**: Use `.ease-whitespace-nowrap` to force text (like badges, tags, or horizontal scrolling lists) to stay on a single line, preventing awkward line breaks in small containers.
- **Preserve User Input Formatting**: By default, HTML collapses multiple spaces and ignores new lines (Enter key). If you are rendering user comments or code blocks, applying `.ease-whitespace-pre-wrap` tells the browser to exactly preserve the spaces and line breaks the user typed, while still wrapping long lines so they don't break the layout.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To preserve line breaks in a paragraph:
```html
<p class="ease-whitespace-pre-wrap">
  Line 1
  Line 2
</p>
