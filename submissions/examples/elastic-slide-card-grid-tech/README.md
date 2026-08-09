# Elastic-Slide Card Grid

A minimalist tech layout feature that implements a smooth, elastic-slide animation for cards when hovered, revealing additional content underneath. Built entirely with pure CSS and HTML.

## Features

- **Pure CSS / HTML**: No JavaScript or external dependencies required.
- **Elastic Animation**: Uses custom cubic-bezier timing functions for a bouncy, elastic motion effect.
- **Modern Layout**: Employs CSS Grid for responsive grid alignments.
- **Accessible**: Full support for `prefers-reduced-motion` to disable animations for accessibility needs.

## Usage

Include the `style.css` in your project and copy the markup from `demo.html` into your page.

### CSS Custom Properties

You can customize the component by overriding the following CSS variables in the `:root` scope:

```css
:root {
    --em-bg-color: #0f1115;
    --em-text-primary: #f8fafc;
    --em-text-secondary: #94a3b8;
    --em-card-bg: #1e293b;
    --em-card-border: rgba(255, 255, 255, 0.05);
    --em-card-hover-border: rgba(255, 255, 255, 0.2);
    --em-accent: #3b82f6;
    
    /* Elastic easing */
    --em-elastic-easing: cubic-bezier(0.68, -0.4, 0.32, 1.4);
    --em-transition-duration: 0.5s;
}
```

## Structure

- **`.em-grid`**: The responsive grid container displaying the cards.
- **`.em-card`**: The individual card component.
- **`.em-card-details-wrapper`**: The wrapper that handles the slide-down animation using `grid-template-rows`.
- **`.em-card-details`**: The hidden content revealed on hover.
