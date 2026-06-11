# ease-divider — Animated Section Divider

A highly customizable, lightweight, and accessible CSS section divider component. It includes four distinct responsive layouts and smooth drawing animations for section transitions.

## Overview
The `ease-divider` component helps break up pages, articles, dashboards, or card modules with elegant horizontal lines, custom labels, custom gradient drops, and smooth drawing entrance transitions. It is completely native CSS, requiring zero dependencies.

---

## Features

- **Simple Divider**: A minimal, clean 1px section break with a subtle entrance fade animation.
- **Labeled Divider**: A centered label (supports text, icons, or badges) built using a highly responsive flex layout.
- **Gradient Divider**: Modern fades that taper off towards the edges, plus high-fidelity neon gradients.
- **Animated Divider**: A premium draw-out entrance effect that sweeps outward from the center, featuring subtle micro-interactions on hover.
- **Accessible & Semantic**: Uses native `<hr>` tags or a `<div>` with `role="separator"` and customizable `aria-label` attributes to ensure complete screen reader compatibility.
- **Theme-Ready**: Includes CSS custom variables (`--divider-color-default`, `--divider-glow-start`, etc.) and built-in hooks for both light and dark backgrounds.

---

## Usage Instructions

### 1. Include the Stylesheet
Link `style.css` in your project's `<head>`:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Basic Markup Snippets

#### Simple Divider
```html
<hr class="ease-divider ease-divider-simple">
```

#### Labeled Divider (Accessible)
```html
<div role="separator" aria-label="Section breakpoint" class="ease-divider-labeled">
  CONTINUE READING
</div>
```

#### Gradient Divider
```html
<!-- Fades out at the edges -->
<hr class="ease-divider ease-divider-gradient">

<!-- Neon glow gradient -->
<hr class="ease-divider ease-divider-gradient-neon">
```

#### Animated Divider (Draw Outward)
```html
<hr class="ease-divider ease-divider-animated ease-divider-interactive">
```

---

## Technical Details & Customization
You can override design tokens at the `:root` level or directly on a divider class to match your brand style:

```css
:root {
  --divider-color-default: rgba(255, 255, 255, 0.12);
  --divider-glow-start: #3b82f6;
  --divider-glow-mid: #8b5cf6;
  --divider-glow-end: #ec4899;
}
```

---

## Preview & Screenshots

### Screenshots Section
<!-- [Screenshots Placeholder: Add your screenshot links here] -->
![Section Divider Preview Screenshot](https://raw.githubusercontent.com/tejasch2006-ux/EaseMotion-css/main/submissions/examples/ease-divider/screenshot-placeholder.png)

Open `demo.html` in your web browser to play with all interactive variants and the dark/light mode switcher.
