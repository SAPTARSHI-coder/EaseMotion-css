# CSS Knowledge Base Card

A responsive help-center knowledge base article card built with pure CSS.

## Features

- Clean knowledge base/help-center design
- Category label
- Article title and description
- Reading time and difficulty metadata
- Animated hover interaction
- Responsive card grid
- Keyboard-accessible links
- Visible focus states
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` - Demo markup
- `style.css` - Component styling and animations

## Usage

Open `demo.html` in a modern browser to view the component.

The card markup can be reused in an existing website by copying the
`knowledge-card` structure and including `style.css`.

## Accessibility

The component includes:

- Semantic `<article>` elements
- Descriptive link labels
- `aria-label` for the article navigation
- Visible `:focus-visible` states
- Decorative elements hidden from assistive technology
- `prefers-reduced-motion` support

## Customization

Update the CSS variables in `:root` to customize the colors:

```css
:root {
  --primary: #4f46e5;
  --primary-dark: #3730a3;
  --accent: #06b6d4;
}