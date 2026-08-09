# Firefly Rich Text Toolbar (Landing Page UI)

A pure HTML + CSS rich text formatting toolbar inspired by modern premium Landing Page / SaaS design patterns. The component uses zero JavaScript, showcasing a glassmorphic toolbar surrounded by floating golden firefly particles. It includes interactive dropdown menus using native `<details>` summaries and a live `contenteditable="true"` editor area to demonstrate real-world integration.

## Features

- **Floating Firefly Particles**: Absoluted-positioned elements drift, scale, and fade in the background surrounding the toolbar using staggered CSS `@keyframes` animations.
- **Glassmorphism & Glows**: A dark slate glassmorphism container (`backdrop-filter`) accented with a gold border and drop shadow glows.
- **Natively Expandable Dropdowns**: Font family and Font size selectors are constructed using native `<details>` elements, avoiding JavaScript state requirements.
- **Live Interactive Panel**: Includes a live editable box (`contenteditable="true"`) styled with premium serif typography and styled blockquotes.
- **Keyboard Friendly**: Tab and spacebar support details expansion natively, and active elements show clear outlines using `:focus-visible`.
- **Reduced Motion Support**: Disables drifting animations and dropdown transition slides if `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/firefly-rich-text-toolbar-landing/
├── demo.html    # Standalone showcase detailing the floating particles, dropdowns, and editor
├── style.css    # Layout rules, firefly drift paths, details summary selectors, and media queries
└── README.md    # Documentation & API guidelines
```

---

## Customization API

Easily adjust timings, intensities, and formatting variables by updating these CSS custom properties in your stylesheet:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-toolbar-duration` | `0.3s` | Easing transition speeds for buttons and hover. |
| `--ease-toolbar-easing` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Standard transition timing curve. |
| `--ease-toolbar-glow` | `0 0 25px rgba(251, 191, 36, 0.12)...` | Glowing gold border box-shadow. |
| `--ease-toolbar-blur` | `12px` | Backdrop blur intensity on the glassmorphic toolbar. |
| `--ease-toolbar-opacity` | `0.95` | Opacity value of the toolbar background. |
| `--ease-toolbar-radius` | `16px` | Outer border radius of the toolbar and editor panels. |
| `--ease-toolbar-shadow` | `0 20px 40px rgba(0, 0, 0, 0.5)` | Drop shadow value. |
| `--ease-toolbar-spacing` | `0.5rem` | Inner margins and gaps between toolbar buttons. |

---

## Technical Details

### Firefly Drifting Keyframes
Floating light particles are animated along distinct translate-and-scale coordinates using staggered animation delays:

```css
.ease-firefly-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--ease-color-gold);
  box-shadow: 0 0 10px 2px var(--ease-color-gold-glow);
}

.ease-firefly-particle:nth-child(1) {
  left: 15%; top: -10px;
  animation: ease-kf-firefly-drift-1 12s infinite ease-in-out;
}
```

### Pure CSS Dropdowns via `<details>`
Standard HTML details elements manage dropdown expansion natively:

```html
<details class="ease-toolbar__dropdown">
  <summary class="ease-toolbar__button ease-dropdown-btn">
    <span>Inter (Sans)</span>
  </summary>
  <div class="ease-toolbar__dropdown-menu">
    <button class="ease-dropdown-item ease-active">Inter (Sans)</button>
    ...
  </div>
</details>
```
To animate the details-menu appearance, keyframes are targeted to fade and translate:
```css
.ease-toolbar__dropdown-menu {
  position: absolute;
  top: 100%;
  animation: ease-kf-dropdown-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```
