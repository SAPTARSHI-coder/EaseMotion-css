# CSS Shimmer-Sweep Accordion

A pure CSS, JavaScript-free accordion component designed for modern SaaS showcase layouts, featuring a buttery-smooth shimmer-sweep hover effect and elegant expand/collapse animations.

## Features

- **Pure CSS/HTML**: No JavaScript required. Uses the radio button hack for state management.
- **Shimmer-Sweep Animation**: A dynamic linear-gradient background animation on hover for a premium feel.
- **Smooth Content Reveal**: Utilizes CSS Grid (`grid-template-rows`) for fluid height transitions.
- **Fully Responsive**: Adapts flawlessly to desktop, tablet, and mobile viewports.
- **Accessible**: Supports `prefers-reduced-motion` for users who prefer minimal animations.
- **Dark Mode Ready**: Uses CSS variables mapped to `@media (prefers-color-scheme: dark)`.

## Usage

Simply copy the HTML structure from `demo.html` and the CSS from `style.css` into your project. 

The accordion relies on `<input type="radio">` and `<label>` pairs. Ensure that the `id` of each input matches the `for` attribute of its corresponding label.

```html
<div class="accordion-item">
    <input type="radio" name="accordion" id="unique-id" class="accordion-input">
    <label for="unique-id" class="accordion-header">
        <span class="header-text">Title</span>
        <span class="header-icon"><!-- SVG Icon --></span>
        <div class="shimmer-effect"></div>
    </label>
    <div class="accordion-content">
        <div class="content-inner">
            <p>Your content here.</p>
        </div>
    </div>
</div>
```

## CSS Variables

You can easily customize the colors and transition timings by modifying the root variables:

```css
:root {
    --ease-bg: #f8fafc;
    --ease-surface: #ffffff;
    --ease-border: #e2e8f0;
    --ease-text: #0f172a;
    --ease-text-muted: #64748b;
    --ease-primary: #3b82f6;
    --ease-primary-light: #eff6ff;
    
    --ease-transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --ease-transition-normal: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```
