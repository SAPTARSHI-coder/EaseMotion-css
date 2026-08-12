# docs-theme-toggle

A persisted dark/light mode toggle for the EaseMotion CSS docs site, built on `data-theme` custom properties + `localStorage`.

## Usage

```html
<html data-theme="dark">
<head>...</head>
<body>
  <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle dark mode">🌙</button>
  ...
</body>
</html>