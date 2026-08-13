# Scroll Progress Bar

## 1. What does this do?
A thin progress bar fixed at the top of the page that fills horizontally as the user scrolls, indicating reading progress.

## 2. How is it used?
Add a `.progress-bar` element at the top of `<body>`. The inline JS updates its width based on scroll position.
```html
<div class="progress-bar" id="progressBar"></div>
```

## 3. Why is it useful?
A lightweight reading progress indicator with minimal JavaScript. Updates in real-time via the `scroll` event. The gradient bar style is visually clean and non-intrusive.
