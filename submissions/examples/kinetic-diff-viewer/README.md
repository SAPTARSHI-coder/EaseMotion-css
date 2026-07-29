# Kinetic Diff Viewer

A responsive **Kinetic Diff Viewer** component built with pure HTML and CSS for the EaseMotion CSS library. Inspired by **Real Estate** design patterns, this component provides a clean side-by-side comparison interface with a smooth kinetic animation.

## Features

- 🏡 Real Estate inspired diff viewer
- ⚡ Pure HTML & CSS (No JavaScript)
- 🎨 Smooth kinetic animation
- 📱 Fully responsive layout
- ♿ Accessible with keyboard focus states
- 🎯 Lightweight and easy to customize
- 🔄 Side-by-side comparison for before/after content

## Folder Structure

```text
submissions/examples/kinetic-diff-viewer-srujana-manda/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the component:

```html
<div class="diff-viewer ease-kinetic">

  <div class="panel before">
    <div class="panel-header">
      <span class="badge before-badge">Before</span>
    </div>

    <h2>Property Description</h2>

    <ul>
      <li class="removed">- Old kitchen cabinets</li>
      <li class="removed">- Standard lighting</li>
      <li>2 Bedrooms</li>
    </ul>
  </div>

  <div class="divider">⇄</div>

  <div class="panel after">
    <div class="panel-header">
      <span class="badge after-badge">After</span>
    </div>

    <h2>Property Description</h2>

    <ul>
      <li class="added">+ Modern modular kitchen</li>
      <li class="added">+ Smart LED lighting</li>
      <li>2 Bedrooms</li>
    </ul>
  </div>

</div>
```

## Customization

Modify the CSS variables in `style.css` to match your project theme.

```css
:root {
  --primary: #2563eb;
  --success: #16a34a;
  --danger: #dc2626;
  --bg: #f5f7fb;
}
```

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Accessibility

- Semantic HTML structure
- Keyboard accessible using `:focus-visible`
- Responsive on desktop and mobile devices
- Supports `prefers-reduced-motion`

## Author

**GitHub:** @srujana-manda

---

Created for **EaseMotion CSS** – **Issue #42472** (Kinetic Diff Viewer for Real Estate).