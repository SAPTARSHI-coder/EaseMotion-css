# CSS Fade-In Accordion

A pure CSS accordion component designed for SaaS showcases, featuring a clean, elegant fade-in effect for the content and smooth icon rotation.

## Features

- **Pure CSS/HTML**: JavaScript-free implementation using the radio button technique (`:checked` state).
- **Elegant Fade-In**: The content elegantly fades in (`opacity: 0` to `1`) while sliding up (`translateY`) to create a polished SaaS feel.
- **Fluid Layout**: Uses CSS Grid (`grid-template-rows: 0fr` to `1fr`) for seamless height transitions.
- **Accessible Design**: Honors the `prefers-reduced-motion` media query.
- **Dark Mode Compatibility**: Employs CSS custom properties mapped to `@media (prefers-color-scheme: dark)`.

## Usage

Simply copy the HTML structure from `demo.html` and the CSS from `style.css` into your project. 

The accordion relies on `<input type="radio">` and `<label>` pairs. Ensure that the `id` of each input matches the `for` attribute of its corresponding label.

```html
<div class="accordion-item">
    <input type="radio" name="accordion" id="unique-id" class="accordion-input">
    <label for="unique-id" class="accordion-header">
        <span class="header-text">Title</span>
        <span class="header-indicator"><!-- SVG Icon --></span>
    </label>
    <div class="accordion-content">
        <div class="content-inner">
            <p>Your content here.</p>
        </div>
    </div>
</div>
```

## CSS Variables

Customize colors and animation speeds by editing the root variables in `style.css`:

```css
:root {
    --ease-bg: #f9fafb;
    --ease-surface: #ffffff;
    --ease-border: #e5e7eb;
    --ease-text: #111827;
    --ease-text-muted: #6b7280;
    --ease-accent: #4f46e5;
    
    --ease-duration: 0.3s;
    --ease-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```
