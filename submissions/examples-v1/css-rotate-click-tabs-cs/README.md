# Rotate-Click Product Catalog Tabs

## Overview

Rotate-Click Product Catalog Tabs is a **pure CSS** component that provides animated category navigation for product catalogs. It uses native HTML radio inputs and labels to switch between content panels without JavaScript, making it lightweight, responsive, and easy to integrate into any project.

---

## What is it?

This component displays multiple product categories as interactive tabs. Selecting a tab triggers a rotate-click animation on the active tab while smoothly revealing its corresponding product panel.

The demo includes three example categories:

- New Arrivals
- Popular
- On Sale

---

## Why?

Modern product catalogs often require animated category navigation without adding unnecessary JavaScript. This component demonstrates how CSS state management (`:checked` selectors) can create an engaging user experience while remaining lightweight and accessible.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Rotate-click active tab animation
- Smooth panel transitions
- Responsive layout
- Keyboard accessible
- Visible focus states
- CSS Custom Properties for easy customization
- Reduced motion support
- Easy to extend with additional tabs

---

## Folder Structure

```text
rotate-click-tabs-sg/
├── demo.html
├── style.css
└── README.md
```

---

## How it Works

The component uses native radio inputs as the state controller.

Each tab label is linked to a radio input using the `for` attribute. When a radio input becomes checked, CSS sibling selectors:

- apply the active tab styling,
- trigger the rotate-click animation,
- reveal the matching product panel,
- hide inactive panels.

Since radio buttons allow only one checked item at a time, only one panel is displayed.

---

## How to Use

### 1. Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### 2. Create the radio inputs

```html
<input type="radio" name="catalog-tabs" id="tab-new" checked>
<input type="radio" name="catalog-tabs" id="tab-popular">
<input type="radio" name="catalog-tabs" id="tab-sale">
```

### 3. Create matching labels

```html
<label class="catalog-tab" for="tab-new">New Arrivals</label>
<label class="catalog-tab" for="tab-popular">Popular</label>
<label class="catalog-tab" for="tab-sale">On Sale</label>
```

### 4. Create matching content panels

```html
<section class="catalog-panel catalog-panel-new">
    ...
</section>

<section class="catalog-panel catalog-panel-popular">
    ...
</section>

<section class="catalog-panel catalog-panel-sale">
    ...
</section>
```

---

## Customization

The component exposes the following CSS custom properties:

```css
.catalog-tabs{
    --tab-duration:520ms;
    --tab-easing:cubic-bezier(.22,1,.36,1);
    --tab-scale:1.04;
    --panel-translate:1.2rem;
    --catalog-radius:1.4rem;
    --catalog-accent:#8b82ff;
}
```

| Variable | Purpose |
|----------|---------|
| `--tab-duration` | Animation duration |
| `--tab-easing` | Animation timing function |
| `--tab-scale` | Active tab scale |
| `--panel-translate` | Panel entrance animation |
| `--catalog-radius` | Border radius |
| `--catalog-accent` | Active accent color |

---

## Accessibility

- Uses native radio inputs for keyboard interaction.
- Supports keyboard navigation using **Tab** and **Arrow keys** (browser dependent).
- Includes visible `:focus-visible` styles.
- Supports `prefers-reduced-motion` for users who prefer minimal animations.

---

## Adding More Tabs

To create additional categories:

1. Add another radio input.
2. Add a matching tab label.
3. Add the corresponding content panel.
4. Create the matching `:checked` selector in `style.css`.

---

## Use Cases

- Product catalogs
- E-commerce landing pages
- Product showcases
- Portfolio filtering
- Service categories
- Pricing sections
- Feature navigation

---
