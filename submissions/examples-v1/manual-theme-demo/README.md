# Manual Theme Demo

## What does this do?

This demo provides a fully interactive UI that switches between light and dark themes manually using CSS variables (`--bg-color`, `--text-color`, `--primary-color`), seamlessly updating the interface without markup changes.

## How is it used?

Variables are defined at the `:root` level and updated under a `.dark-theme` class applied to the `body`:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #4f46e5;
}

body.dark-theme {
  --bg-color: #0f0f0f;
  --text-color: #f3f4f6;
  --primary-color: #818cf8;
}
```

## Why is it useful?

This feature aligns with EaseMotion CSS's philosophy of being human-readable, composable, and developer-friendly. CSS variables are a modern web standard for theming, and this dedicated demo will help users build scalable, maintainable designs while integrating EaseMotion CSS animations and utilities. It also encourages best practices for design systems and improves the learning experience for new contributors.

## Tech Stack

- HTML
- CSS
- JavaScript (for toggle functionality)

## Preview

Open `index.html` directly in your browser to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
