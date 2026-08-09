# CSS Breadcrumb Navigation Component

A modern, highly customizable, and accessible **CSS-only Breadcrumb Navigation Component** designed for a wide range of web applications.

---

## Overview

The CSS Breadcrumb Navigation Component is a lightweight, responsive, and semantic navigation helper built with pure HTML5 and CSS3. It allows users to track their current location within a website or web application and easily navigate back to previous hierarchical levels. This component is designed as a CSS-first, zero-dependency utility that can be integrated into any project with simple styling overrides.

---

## Features

- **Five Visual Variants**: Supports Basic, Rounded Pill, Filled, Glassmorphism, and Minimal design styles.
- **Five Separator Styles**: Switchable separators including Slash (`/`), Chevron (`›`), Arrow (`→`), Dot (`•`), and a Custom SVG double chevron.
- **Pure CSS Hover Effects**: Smooth underlines, color transitions, subtle upward movements, and separator animations.
- **Fully Responsive**: Optimized spacing, fluid font scaling, and automatic line-wrapping for long breadcrumb paths.
- **Accessibility (A11y) Compliant**: Structured with semantic elements, distinct active states, screen-reader compatibility, keyboard-accessible focus styling, high-contrast mode visibility, and reduced-motion adaptation.
- **CSS Variable Theme Setup**: Fully customizable via scoped CSS variables.

---

## Installation

To integrate the breadcrumb component into your project:

1. **Copy the Stylesheet**: Copy the styles from [style.css](style.css) into your project's stylesheet folder.
2. **Link the CSS**: Reference `style.css` in the `<head>` of your HTML document:
   ```html
   <link rel="stylesheet" href="path/to/style.css" />
   ```
3. **Include the HTML**: Copy the desired breadcrumb HTML structure into your pages.
4. **Run the Demo**: Open [demo.html](demo.html) in any modern browser to preview and test the variants.

---

## Usage Examples

Here is the standard HTML structure to create a basic breadcrumb with a slash separator:

```html
<nav
  aria-label="Breadcrumb"
  class="ease-breadcrumb ease-breadcrumb-basic ease-breadcrumb-separator-slash"
>
  <ol class="ease-breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Components</a>
    </li>
    <li class="breadcrumb-item">
      <span class="breadcrumb-link active" aria-current="page">Breadcrumb</span>
    </li>
  </ol>
</nav>
```

---

## Visual Variants

The following visual variants are available as class names on the parent `<nav>` container:

- **`ease-breadcrumb-basic`**: The default clean-text style featuring a custom animated bottom border on hover.
- **`ease-breadcrumb-rounded`**: Pill/badge styled tags with subtle boundaries and filled background highlighting on active items.
- **`ease-breadcrumb-filled`**: A contained block bar featuring solid filled hover backgrounds, optimal for dashboard headers.
- **`ease-breadcrumb-glass`**: A glassmorphic design utilizing background blurs, light borders, and shadow depths.
- **`ease-breadcrumb-minimal`**: Compact, uppercase lettering with tracking, tailored for minimal site indices.

---

## Separator Styles

Configure separators by applying one of these utility classes to the parent `<nav>` container:

- **`ease-breadcrumb-separator-slash`**: Inserts a slash `/` between breadcrumb items.
- **`ease-breadcrumb-separator-chevron`**: Inserts a single chevron `›` between items.
- **`ease-breadcrumb-separator-arrow`**: Inserts an arrow `→` between items.
- **`ease-breadcrumb-separator-dot`**: Inserts a middle-dot `•` between items.
- **`ease-breadcrumb-separator-svg`**: Uses a CSS mask-image to load a vector double-chevron SVG separator.

---

## Accessibility Notes

- **Semantic HTML**: Built using the W3C-recommended `<nav aria-label="Breadcrumb">` tag enclosing an ordered list (`<ol>`) to guarantee correct screen reader announcements.
- **Keyboard Navigation**: Links use correct `href` attributes, allowing user focus using standard Tab and Shift+Tab browser controls.
- **Focus Rings (`focus-visible`)**: Enhanced focus indicators using visible borders and outline offsets ensure focus states are obvious to keyboard users without cluttering mouse click events.
- **Reduced Motion Support**: An override media query (`@media (prefers-reduced-motion: reduce)`) instantly disables all transitions and animations for visitors with motion sensitivity.
- **High-Contrast Support**: Explicit style rules using `@media (forced-colors: active)` ensure that link text, separators, focus highlights, and active pages remain perfectly readable under high contrast and monochrome OS themes.

---

## Responsive Behavior

- **Desktop & Tablet**: Full navigation layout with proportional spacing.
- **Mobile Devices**: Spacing automatically collapses and fonts scale down to preserve horizontal screen space.
- **Automatic Path Wrapping**: Uses flex-wrap to automatically wrap long breadcrumb paths onto subsequent lines, preventing horizontal layout overflow or clipping on small viewports.

---

## Screenshots

Screenshots are intentionally omitted from this contribution and may be added in future updates to demonstrate each visual variant and separator style.

---

## Common Use Cases

This component is suitable for:

- **Documentation Websites**: Wrapping deep hierarchies under clean text paths.
- **Admin Dashboards**: Blocks with system icons highlighting the path to specific telemetry tools.
- **E-Commerce Platforms**: Tracking catalog categories (e.g., Electronics > Wearables > Smart Watches).
- **Blogs**: Simple minimal trails indicating the active post category.
- **CMS Systems**: Clear path indicators for site headers and sections.
- **SaaS Products**: Modern glassmorphism themes over complex layouts.
