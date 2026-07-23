# Slide Up Accordion

A news portal-inspired accordion component built with pure CSS, featuring smooth slide-up content reveals and a clean editorial layout.

Designed for news websites, blogs, dashboards, documentation pages, and content-heavy interfaces.

---

## Features

- 📰 News portal inspired design
- ⬆️ Smooth slide-up content animation
- ⚡ Uses EaseMotion CSS animation utilities
- 🚫 Zero JavaScript dependency
- ♿ Native accessible accordion using HTML `<details>` and `<summary>`
- 📱 Responsive layout
- 🎨 Clean editorial card styling
- 🚀 Lightweight and reusable component

---

## Preview

The accordion contains multiple news categories:

1. Technology Innovations
2. Business & Finance
3. Sports Highlights
4. Global Headlines

Each section expands with a smooth slide-up animation to reveal article previews.

---

## Folder Structure

```
slide-up-accordion/
│
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include EaseMotion CSS:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

Include the component stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the accordion structure from `demo.html`.

---

## EaseMotion Classes Used

This component uses existing EaseMotion utilities:

| Class | Purpose |
|------|---------|
| `ease-fade-in` | Initial section reveal |
| `ease-slide-up` | Content entrance animation |
| `ease-hover-grow` | Interactive hover support |

---

## Animation Details

The accordion uses:

- Native HTML accordion behavior
- CSS keyframe animations
- Smooth slide-up content reveal
- Rotating indicator interaction
- Hover elevation effects

No JavaScript state management is required.

---

## Customization

### Change Animation Speed

Modify the content animation duration:

```css
.content {
  animation: slide-up-content .35s ease;
}
```

Example:

```css
.content {
  animation: slide-up-content .5s ease;
}
```

---

### Customize Colors

Update the CSS variables:

```css
:root {

  --news-bg: #f8fafc;
  --card-bg: #ffffff;
  --primary-text: #0f172a;
  --secondary-text: #64748b;
  --accent: #2563eb;

}
```

---

### Adjust Card Shadow

```css
:root {

  --shadow:
    0 15px 40px rgba(15, 23, 42, 0.08);

}
```

---

## Accessibility

- Uses semantic HTML elements
- Supports keyboard navigation through native browser behavior
- Includes visible focus states
- Supports `prefers-reduced-motion`
- Maintains readable contrast

---

## Browser Support

Works on modern browsers supporting:

- HTML details/summary elements
- CSS Variables
- CSS Animations
- Flexbox

Internet Explorer is not supported.

---

## Credits

Created as a contribution to:

**EaseMotion CSS**

An animation-first CSS framework for expressive and reusable UI components.